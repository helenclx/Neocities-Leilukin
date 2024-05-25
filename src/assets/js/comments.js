/**
 * Author: Vera Konigin
 * Site: https://groundedwren.neocities.org
 * Contact: vera@groundedwren.com
 *
 * File Description: Comments Control
 */

registerNamespace("GW.Controls", function (ns)
{
    ns.CommentForm = class CommentForm extends HTMLElement
    {
        //#region staticProperties
        static observedAttributes = [];
        static instanceCount = 0;
        static instanceMap = {};
        //#endregion

        //#region instance properties
        instanceId;
        isInitialized;
        titleText;
        discordURL;

        //#region element properties
        formEl;
        titleEl;

        dispNameInpt;
        emailInpt;
        websiteInpt;
        respToInpt;
        commentInpt;

        resetBtn;
        submitBtn;
        //#endregion
        //#endregion

        constructor()
        {
            super();
            this.instanceId = CommentForm.instanceCount++;
            CommentForm.instanceMap[this.instanceId] = this;
        }

        get idKey()
        {
            return `gw-comment-form-${this.instanceId}`;
        }

        //#region HTMLElement implementation
        connectedCallback()
        {
            if (this.isInitialized) { return; }

            this.titleText = this.getAttribute("titleText") || "Add a Comment";
            this.discordURL = this.getAttribute("discordURL")

            this.renderContent();
            this.registerHandlers();

            this.isInitialized = true;
        }
        //#endregion

        renderContent()
        {
            //Markup
            this.innerHTML = `
            <form id="${this.idKey}-form"
                aria-labelledby="${this.idKey}-title"
                aria-describedby="${this.idKey}-banner"
                class="comment-form"
                autocomplete="off"
            >
                <span id="${this.idKey}-title" class="comment-form-title">${this.titleText}</span>
                <div class="input-horizontal-flex">
                    <div class="input-vertical">
                        <label for="${this.idKey}-dispName">
                            Display name<span aria-hidden="true">*</span>
                            <span class="visually-hidden">(Required)</span>
                        </label>
                        <input id="${this.idKey}-dispName" type="text" maxlength="1000" required="true">
                    </div>
                    <div class="input-vertical">
                        <label for="${this.idKey}-email">Email</label>
                        <input id="${this.idKey}-email" type="email">
                    </div>
                    <div class="input-vertical">
                        <label for="${this.idKey}-website">Website</label>
                        <input id="${this.idKey}-website" type="text" maxlength="1000">
                    </div>
                    <div class="input-vertical">
                        <label for="${this.idKey}-respTo">Response to</label>
                        <input id="${this.idKey}-respTo" type="number">
                    </div>
                </div>
                <div class="comment-box-container">
                    <div class="input-vertical">
                        <label for="${this.idKey}-comment">
                            Comment<span aria-hidden="true">*</span>
                            <span class="visually-hidden">(Required)</span>
                        </label>
                        <textarea id="${this.idKey}-comment"
                            minlength="1"
                            maxlength="4000"
                            required="true"
                            rows="5"
                        ></textarea>
                    </div>
                </div>
                <div id="${this.idKey}-banner" class="inline-banner">
                    <gw-icon iconKey="circle-info" title="info"></gw-icon>
                    <span>Comments are manually approved</span>
                </div>
                <div class="form-footer">
                    <input id="${this.idKey}-reset" type="reset" value="Reset">
                    <input id="${this.idKey}-submit" type="submit" value="Submit">
                </div>
            </form>
            `;

            //element properties
            this.formEl = document.getElementById(`${this.idKey}-form`);
            this.titleEl = document.getElementById(`${this.idKey}-title`);

            this.dispNameInpt = document.getElementById(`${this.idKey}-dispName`);
            this.emailInpt = document.getElementById(`${this.idKey}-email`);
            this.websiteInpt = document.getElementById(`${this.idKey}-website`);
            this.respToInpt = document.getElementById(`${this.idKey}-respTo`);
            this.commentInpt = document.getElementById(`${this.idKey}-comment`);

            this.resetBtn = document.getElementById(`${this.idKey}-reset`);
            this.submitBtn = document.getElementById(`${this.idKey}-submit`);

            //default values
            this.dispNameInpt.value = localStorage.getItem("comment-name") || "";
            this.emailInpt.value = localStorage.getItem("comment-email") || "";
            this.websiteInpt.value = localStorage.getItem("comment-website") || "";
        }

        //#region Handlers
        registerHandlers()
        {
            this.formEl.onsubmit = this.onSubmit;
        }

        onSubmit = (event) =>
        {
            event.preventDefault();

            const contentObj = {
                name: this.dispNameInpt.value,
                email: this.emailInpt.value,
                website: this.websiteInpt.value,
                responseTo: this.respToInpt.value,
                comment: this.commentInpt.value,
                timestamp: new Date().toUTCString(),
            };
            const contentAry = [];
            for (let contentKey in contentObj)
            {
                contentAry.push(`${contentKey}=${contentObj[contentKey]}`);
            }

            const request = new XMLHttpRequest();
            request.open(
                "POST",
                this.discordURL,
                true
            );
            request.setRequestHeader("Content-Type", "application/json");

            request.onreadystatechange = function ()
            {
                if (request.readyState == 4)
                {
                    console.log(request.responseText);
                }
            };

            request.send(JSON.stringify({ content: contentAry.join("; ") }));

            localStorage.setItem("comment-name", contentObj.name);
            localStorage.setItem("comment-email", contentObj.email);
            localStorage.setItem("comment-website", contentObj.website);

            this.formEl.reset();
            this.dispNameInpt.value = contentObj.name;
            this.emailInpt.value = contentObj.email;
            this.websiteInpt.value = contentObj.website;

            alert("Your comment has been submitted!");
        };
        //#endregion
    };
    customElements.define("gw-comment-form", ns.CommentForm);

    ns.CommentList = class CommentList extends HTMLElement
    {
        //#region staticProperties
        static observedAttributes = [];
        static instanceCount = 0;
        static instanceMap = {};
        //#endregion

        //#region instance properties
        instanceId;
        isInitialized;
        gSpreadsheetId;
        gSheetId;
        isNewestFirst;
        gwCommentFormId;

        //#region element properties
        //#endregion
        //#endregion

        constructor()
        {
            super();
            this.instanceId = CommentList.instanceCount++;
            CommentList.instanceMap[this.instanceId] = this;
        }

        get idKey()
        {
            return `gw-comment-list-${this.instanceId}`;
        }

        //#region HTMLElement implementation
        connectedCallback()
        {
            if (this.isInitialized) { return; }

            this.gSpreadsheetId = this.getAttribute("gSpreadsheetId");
            this.gSheetId = this.getAttribute("gSheetId");
            this.isNewestFirst = this.getAttribute("isNewestFirst");
            this.gwCommentFormId = this.getAttribute("gwCommentFormId");

            this.loadAndRender();

            this.isInitialized = true;
        }
        //#endregion

        async loadAndRender()
        {
            this.innerHTML = `
            <div class="inline-banner">
                <gw-icon iconkey="circle-info" title="info"></gw-icon>
                <span>Comments loading....</span>
            </div>
            `

            const sheetReader = new GW.Gizmos.GoogleSheetsReader(this.gSpreadsheetId, this.gSheetId);
            const sheetData = await sheetReader.loadData();
            this.innerHTML = "";

            const allComments = sheetReader.rowData;
            if (this.isNewestFirst)
            {
                allComments.reverse();
            }

            this.renderContent();
            this.registerHandlers();

            const allCommentsIndex = {};
            const topLevelCommentIdxs = [];
            const childCommentIdxs = [];
            for (let i = 0; i < allComments.length; i++)
            {
                const comment = allComments[i];
                allCommentsIndex[comment.ID] = i;
                if (!comment.ResponseTo)
                {
                    topLevelCommentIdxs.push(i);
                }
                else
                {
                    childCommentIdxs.push(i);
                }
            }
            childCommentIdxs.forEach(childIdx =>
            {
                const replyId = allComments[childIdx].ResponseTo;
                const respondeeComment = allComments[allCommentsIndex[replyId]];

                respondeeComment.childrenIdxs = respondeeComment.childrenIdxs || [];
                respondeeComment.childrenIdxs.push(childIdx);
            });

            let commentsToBuild = [];
            topLevelCommentIdxs.forEach(
                topCommentIdx => commentsToBuild.push(
                    {
                        parent: this.containerEl,
                        parentId: null,
                        comment: allComments[topCommentIdx]
                    }
                )
            );

            while (commentsToBuild.length > 0)
            {
                let { parent, parentId, comment } = commentsToBuild.shift();
                if (!comment.Timestamp)
                {
                    continue;
                }
                parent.insertAdjacentHTML("beforeend", `
                <gw-comment-card  id="${this.idKey}-cmt-${comment.ID}"
                                    commentId="${comment.ID || ""}"
                                    replyToId="${parentId || ""}"
                                    commenterName="${comment["Display Name"] || ""}"
                                    isoTimestamp="${comment.Timestamp.toISOString()}"
                                    websiteURL="${comment.Website || ""}"
                                    commentText="${comment.Comment || ""}"
                                    gwCommentFormId="${this.gwCommentFormId || ""}"
                ></gw-comment-card>
                `);

                const commentEl = document.getElementById(`${this.idKey}-cmt-${comment.ID}`);
                (comment.childrenIdxs || []).forEach(
                    childIdx => commentsToBuild.push({
                        parent: commentEl.articleEl,
                        parentId: comment.ID,
                        comment: allComments[childIdx]
                    })
                );
            }
        }

        renderContent()
        {
            //Markup
            this.innerHTML = `
            <div id="${this.idKey}-container" class="comments-container"">
            </div>
            `;

            //element properties
            this.containerEl = document.getElementById(`${this.idKey}-container`);
        }

        //#region Handlers
        registerHandlers()
        {
        }
        //#endregion
    };
    customElements.define("gw-comment-list", ns.CommentList);

    ns.CommentCard = class CommentCard extends HTMLElement
    {
        //#region staticProperties
        static observedAttributes = [];
        static instanceCount = 0;
        static instanceMap = {};
        //#endregion

        //#region instance properties
        instanceId;
        isInitialized;
        commentId;
        replyToId;
        commenterName;
        isoTimestamp;
        datetime;
        websiteURL;
        commentText;
        gwCommentFormId;

        //#region element properties
        articleEl;
        replyBtn;
        //#endregion
        //#endregion

        constructor()
        {
            super();
            this.instanceId = CommentCard.instanceCount++;
            CommentCard.instanceMap[this.instanceId] = this;
        }

        get idKey()
        {
            return `gw-comment-card-${this.instanceId}`;
        }

        //#region HTMLElement implementation
        connectedCallback()
        {
            if (this.isInitialized) { return; }

            this.commentId = this.getAttribute("commentId");
            this.replyToId = this.getAttribute("replyToId");
            this.commenterName = this.getAttribute("commenterName");
            this.isoTimestamp = this.getAttribute("isoTimestamp");
            this.datetime = new Date(this.isoTimestamp);
            this.websiteURL = this.getAttribute("websiteURL");
            this.commentText = this.getAttribute("commentText");
            this.gwCommentFormId = this.getAttribute("gwCommentFormId");

            this.renderContent();
            this.registerHandlers();

            this.isInitialized = true;
        }
        //#endregion

        renderContent()
        {
            const headerText = this.replyToId
                ? `Comment #${this.commentId} replying to #${this.replyToId}`
                : `Top level comment #${this.commentId}`;

            const displayTimestamp = this.datetime.toLocaleString(
                undefined,
                { dateStyle: "short", timeStyle: "short" }
            );

            const commenterNameEl = this.websiteURL
                ? `<a href="${this.websiteURL}" target="_blank" class="commenter-name">${this.commenterName}</a>`
                : `<span class="commenter-name">${this.commenterName}</span>`;

            //Markup
            this.innerHTML = `
            <article  id="${this.idKey}-article"
                        aria-labelledby="${this.idKey}-header"
                        class="comment-article"
            >
                <div id="${this.idKey}-header" class="comment-header">
                    <div>
                        <span aria-hidden="true" class="comment-id">#${this.commentId}</span>
                        <span class="visually-hidden">${headerText}</span>
                    </div>
                    ${commenterNameEl}
                    <time datetime="${this.isoTimestamp}" class="comment-timestamp">${displayTimestamp}</time>
                </div>
                <blockquote>${this.commentText}</blockquote>
                <button id="${this.idKey}-reply">Reply to #${this.commentId}</button>
            </article>
            `;

            //element properties
            this.articleEl = document.getElementById(`${this.idKey}-article`);
            this.replyBtn = document.getElementById(`${this.idKey}-reply`);
        }

        //#region Handlers
        registerHandlers()
        {
            this.replyBtn.onclick = this.onReply;
        }

        onReply = () =>
        {
            const gwCommentForm = document.getElementById(this.gwCommentFormId);
            const respToInpt = gwCommentForm.respToInpt;
            if (!respToInpt)
            {
                alert("Comment form not found");
                return;
            }

            respToInpt.value = this.commentId;
            respToInpt.focus();
        };
        //#endregion
    };
    customElements.define("gw-comment-card", ns.CommentCard);
});