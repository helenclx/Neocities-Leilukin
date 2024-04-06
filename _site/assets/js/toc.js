// Auto generate table of contents
// Code based on https://techindetail.com/table-of-contents-javascript/
window.addEventListener('DOMContentLoaded', (event) => {
    const article = document.querySelector("article");
    const headings = article.querySelectorAll("h2, h3");
    const toc = document.querySelector(".toc");
    const tocSidebar = document.querySelector(".sidebar__toc");
    const leftSidebar = document.querySelector('.left-sidebar');
    const totalHeadings = headings.length;
    let tocOl = document.createElement("ol");
    let tocFragment = new DocumentFragment();
    let mainLi = null;
    let subUl = null;
    let subLi = null;
    let isSibling = false;

    if (totalHeadings > 1) {
        for (let element of headings) {
            let anchor = document.createElement("a");
            let anchorText = element.innerText;
            anchor.innerText = anchorText;
            let elementId = anchorText.replaceAll(" ", "-").toLowerCase();
            anchor.href = "#" + elementId;
            element.id = elementId;
            let level = element.nodeName;

            if ("H3" === level) {
                if (mainLi) {
                    subLi = document.createElement("li");
                    subLi.appendChild(anchor);

                    if (isSibling === false) {
                        subUl = document.createElement("ul");
                    }
                    subUl.appendChild(subLi);
                    mainLi.appendChild(subUl);

                    isSibling = true;
                }
            } else {
                mainLi = document.createElement("li");
                mainLi.appendChild(anchor);
                tocFragment.appendChild(mainLi);
                isSibling = false;
                subUl = null;
            }
        }
        tocOl.append(tocFragment);
        toc.append(tocOl);

        const tocClone = tocOl.cloneNode(true);
        if (tocSidebar) {
            tocSidebar.appendChild(tocClone);
        }
    } else {
        toc.classList.add('hidden');
        leftSidebar.classList.add('hidden');
    }

    // Close article ToC accordion and the left sidebar for small screen sizes
    if (window.innerWidth < 480) {
        toc.removeAttribute("open");
        leftSidebar.classList.add("hidden");
    } else {
        toc.setAttribute("open", true);
    }

    // Remove the stickiness of the sidebar ToC if it is larger than screen height
    function preventSidebarOverflow() {
        if (document.documentElement.clientHeight < tocSidebar.offsetHeight + 50) {
            tocSidebar.style.marginTop = "0";
            tocSidebar.style.position = "static";
        }
    }
    preventSidebarOverflow();
});