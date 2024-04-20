// Installed Plug-ins
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const metagen = require('eleventy-plugin-metagen');
const pluginTOC = require('eleventy-plugin-nesting-toc');
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");
const embedEverything = require("eleventy-plugin-embed-everything");

// Configure slug filter
const slugify = require("slugify");

// Configure markdown-it plug-ins
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
    // Copy files
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    // Installed Plug-ins
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(pluginTOC, { tags: ['h2', 'h3', 'h4', 'h5'] });
    eleventyConfig.addPlugin(emojiReadTime);
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

    // Configure markdown-it plug-ins
    eleventyConfig.setLibrary(
        'md',
        markdownIt().use(markdownItAnchor)
    )
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
            state.tokens.splice(
                idx,
                0,
                Object.assign(new state.Token("div_open", "div", 1), {
                    // Add class "header-wrapper [h1 or h2 or h3]"
                    attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
                    block: true,
                })
            );

            state.tokens.splice(
                idx + 4,
                0,
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
    }).use(markdownItAnchor, markdownItAnchorOptions);

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);

    // Add content categories to a collection
    eleventyConfig.addCollection("categories", function(collectionApi) {
        let categories = new Set();
        let contents = collectionApi.getFilteredByTag('contents');
        contents.forEach(p => {
            let cats = p.data.categories;
            cats.forEach(c => categories.add(c));
        });
        return Array.from(categories).sort();
    });

    // Filter contents by category
    eleventyConfig.addFilter("filterByCategory", function(contents, cat) {
        cat = cat.toLowerCase();
        let result = contents.filter(item => {
            let cats = item.data.categories.map(c => c.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });

    // Filter: Format dates
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const dateTimeLocale = new Intl.DateTimeFormat("en-GB", dateOptions);
    eleventyConfig.addFilter("niceDate", function(date) {
        return dateTimeLocale.format(date);
    });

    // Filter: Limit number of items displayed
    eleventyConfig.addFilter("itemLimit", function(array, itemLimit) {
        return array.slice(0, itemLimit);
    });

    return {
        dir: {
            input: "src"
        }
    };
};