/* CONFIGURATION FOR MARKDOWN FILES */

// Installed Plugins
const pluginTOC = require('eleventy-plugin-nesting-toc');
const embedEverything = require("eleventy-plugin-embed-everything");

// Configure slug filter
const slugify = require("slugify");

// Configure markdown-it plugins
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
    // Installed Plugins
    eleventyConfig.addPlugin(pluginTOC, { tags: ['h2', 'h3', 'h4', 'h5'] });
    eleventyConfig.addPlugin(embedEverything, { add: ['soundcloud'] });

    // Configure slug filter
    eleventyConfig.addFilter("slug", (str) => {
        if (!str) {
            return;
        }

        return slugify(str, {
            lower: true,
            remove: /["]/g,
        });
    });

    // Configure markdown-it plugins
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor))
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "heading-anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });
    const markdownItAnchorOptions = {
        level: [1, 2, 3, 4, 5],
        slugify: (str) =>
            slugify(str, {
                lower: true,
                strict: true,
                remove: /["]/g,
            }),
        tabIndex: false,
        permalink(slug, opts, state, idx) {
            state.tokens.splice(idx, 0,
                Object.assign(new state.Token("div_open", "div", 1), {
                    // Add class "header-wrapper [h1 or h2 or h3]"
                    attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
                    block: true,
                })
            );

            state.tokens.splice(idx + 4, 0,
                Object.assign(new state.Token("div_close", "div", -1), {
                    block: true,
                })
            );

            linkAfterHeader(slug, opts, state, idx + 1);
        },
    };

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
    })
        .use(markdownItAnchor, markdownItAnchorOptions)
        .use(require("markdown-it-attrs"))
        .use(require("markdown-it-bracketed-spans"))
        .use(require("markdown-it-deflist"));

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);

    // Paired shortcode: custom container
    eleventyConfig.addPairedShortcode('container', (children, el, className) => {
        const classMarkup = className ? ` class="${className}"` : "";
        const content = markdownIt().render(children);
        return `<${el}${classMarkup}>${content}</${el}>`;
    });
}
