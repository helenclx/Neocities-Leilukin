/**
 * Author: Vera Konigin
 * Site: https://groundedwren.neocities.org
 * Contact: vera@groundedwren.com
 *
 * File Description: Gizmo for reading from Google Sheets.
 *  Neocities editor users will see a lot of linter errors in this file, but none of them are real errors. The linter just doesn't understand some modern JS.
*/

/**
 * By default, any JavaScript code written is defined in the global namespace, which means it's accessible directly under the "window" element.
 * If you have a lot of scripts, this can lead to clutter and naming collisions (what if two different scripts use a variable called "i"? They can inadvertently mess each other up).
 * To get around this, we define the registerNamespace function in the global namespace, which just confines all the code in the function passed to it to a property under window.
 * That property is represented as the "path" parameter. It is passed to the function for ease of access.
*/
function registerNamespace(path, nsFunc)
{
    var ancestors = path.split(".");

    var ns = window;
    for(var i = 0; i < ancestors.length; i++)
    {
        ns[ancestors[i]] = ns[ancestors[i]] || {};
        ns = ns[ancestors[i]];
    }
    nsFunc(ns);
}

registerNamespace("GW.Gizmos", function(ns) {
    /**
     * A class to read from one page in a google sheet document
    */
    ns.GoogleSheetsReader = class GoogleSheetsReader
    {
        //setResponse is intended for React - it's how google responds to our GET. Fortunately valid JSON is inside this call, so we can just parse it out.
        static #RESPONSE_PREFIX = "setResponse(";
        static #RESPONSE_SUFFIX = ");";

        //Here we can define any custom types based on column label. "Timestamp" is intended for ISO 8601 format date/time strings.
        static #CUSTOM_LABEL_TYPES = {
            "Timestamp": "timestamp"
        };

        spreadsheetId; //The ID of the spreadsheet. This is the part just after /d/ in the docs.google.com URL
        sheetName; //The name of the particular sheet we're after

        #sheetURL; //Composed request URL

        loadPromise = null; //A promise created when loading begins and which resolves when data has finished loading.
        tableJSON = null; //Raw JS Object version of the returned JSON.
        rowData = null; //Parsed row data
        colData = null; //A shortcut to the the column data in tableJSON
        colIndex = null; //An index from column label to its metadata, plus array position

        /**
         * Constructs a GoogleSheetsReader object
         * spreadsheetId is the part of the docs.google.com URL just after /d/
         * sheetName is the name of the particular page
        */
        constructor(spreadsheetId, sheetName)
        {
            this.spreadsheetId = spreadsheetId;
            this.sheetName = sheetName;
            this.#sheetURL = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=${sheetName}`;
        }

        /**
         * Loads and parses sheet data via HTTP GET
         * Returns null on success, and an error string on failure.
        */
        async loadData()
        {
            this.loadPromise = this.#loadData();
            return this.loadPromise;
        }

        async #loadData()
        {
            this.tableJSON = null;
            this.rowData = null;
            this.colData = null;
            this.colIndex = null;

            const response = await fetch(this.#sheetURL);
            if (response.ok)
            {
                return response.text().then((unparsedData) =>
                {
                    //This is parsing out the valid JSON from the React method they gave us
                    const targetData = unparsedData.split(
                        GoogleSheetsReader.#RESPONSE_PREFIX
                    )[1].split(
                        GoogleSheetsReader.#RESPONSE_SUFFIX
                    )[0];

                    this.tableJSON = GoogleSheetsReader.#applyCustomLabelTypes(JSON.parse(targetData).table);
                    this.rowData = GoogleSheetsReader.#parseAllRows(this.tableJSON);
                    this.colIndex = GoogleSheetsReader.#indexColumns(this.tableJSON);
                    this.colData = this.tableJSON.cols;

                    return null;
                });
            }
            else
            {
                return response.statusText || response.status;
            }
        }

        /**
         * Overrides any google-returned column data types with custom ones based on label
        */
        static #applyCustomLabelTypes(tableJSON)
        {
            tableJSON.cols.forEach(col => {
                if(this.#CUSTOM_LABEL_TYPES[col.label])
                {
                    col.type = this.#CUSTOM_LABEL_TYPES[col.label]
                };
            });
            return tableJSON;
        }

        static #parseAllRows(tableJSON)
        {
            const rowDataArray = [];
            for(let i = 0; i < tableJSON.rows.length; i++)
            {
                rowDataArray.push(this.#parseRow(i, tableJSON));
            }
            return rowDataArray;
        }

        static #parseRow(rowIdx, tableJSON)
        {
            const rowData = {};
            const cells = tableJSON.rows[rowIdx].c;

            for(let i = 0; i < cells.length; i++)
            {
                rowData[tableJSON.cols[i].label] = this.#parseCellType(cells[i], tableJSON.cols[i].type);
            }
            return rowData;
        }

        /**
         * Parses a cell based on its type. Further custom types will need their own parsing added here.
        */
        static #parseCellType(cellData, cellType)
        {
            switch (cellType)
            {
                case "string":
                    return cellData ? cellData.v : cellData;
                case "number":
                    return cellData ? cellData.v : cellData;
                case "datetime":
                case "date":
                    return (cellData && cellData.v) ? eval("new " + cellData.v) : null;
                case "timestamp":
                    const cellTimestamp = new Date(cellData ? cellData.v : "");
                    return isNaN(cellTimestamp) ? null : cellTimestamp;
                default:
                    return cellData;
            }
        }

        static #indexColumns(tableJSON)
        {
            const colIndex = {};
            for(let i = 0; i < tableJSON.cols.length; i++)
            {
                const colData = tableJSON.cols[i];
                colIndex[colData.label] = {...colData, index: i};
            }
            return colIndex;
        }
    };
});