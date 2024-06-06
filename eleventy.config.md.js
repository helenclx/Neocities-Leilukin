/* CONFIGURATION FOR MARKDOWN TEMPLATES */

// Installed Plugins
const pluginTOC = require('@uncenter/eleventy-plugin-toc');
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

    // Configure markdown-it-anchor plugins
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor))
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "heading-anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });
    const markdownItAnchorOptions = {
        level: [2, 3, 4, 5],
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
        linkify: true,
    })
        .use(markdownItAnchor, markdownItAnchorOptions)
        .use(require("markdown-it-attribution"))
        .use(require("markdown-it-attrs"))
        .use(require("markdown-it-bracketed-spans"))
        .use(require("markdown-it-deflist"))
        .use(require('markdown-it-footnote'));

    // Configure markdown-it-footnote
    markdownLibrary.renderer.rules.footnote_block_open = () => (
        '<section class="footnotes">\n' +
        `<div class="heading-wrapper h2">
            <h2 id="footnotes" class="footnotes__title">Footnotes</h2>
            <a class="heading-anchor" href="#footnotes" aria-labelledby="footnotes"><span hidden="">#</span></a>
        </div>\n` +
        '<ol class="footnotes-list">\n'
    );

    const renderRules = {
        footnote_caption: ['[', '[<span class="visually-hidden">Footnote </span>'],
        footnote_anchor: ['<a', '<a aria-label="Back to content"'],
    };
    Object.keys(renderRules).map(rule => {
        let defaultRender = markdownLibrary.renderer.rules[rule];
        markdownLibrary.renderer.rules[rule] = (tokens, idx, options, env, self) => {
            return defaultRender(tokens, idx, options, env, self).replace(...renderRules[rule]);
        }
    });

    // Paired shortcode: custom container
    eleventyConfig.addPairedShortcode('container', (children, el, className) => {
        const classMarkup = className ? ` class="${className}"` : "";
        const content = markdownLibrary.render(children);
        return `<${el}${classMarkup}>${content}</${el}>`;
    });

    // Paired shortcode: image figure and figcaption
    eleventyConfig.addPairedShortcode('imgFigure', (caption, img, alt=caption, enableLazyLoading=true) => {
        const figcaption = markdownLibrary.renderInline(caption);
        return `<figure>
            <img src="${img}" alt="${alt}"${enableLazyLoading ? ' loading="lazy"' : ''}>
            <figcaption>${figcaption}</figcaption>
        </figure>`;
    });

    // Paired shorcode: Spoiler accordion
    eleventyConfig.addPairedShortcode('spoiler', (content, hint) => {
        const hintMarkup = markdownLibrary.renderInline(hint);
        const contentMarkup = markdownLibrary.render(content);
        return `<details class="spoiler-accordion">
            <summary class="spoiler-accordion__hint">${hintMarkup}</summary>
            <div class="spoiler-accordion__spoiler">${contentMarkup}</div>
        </details>`;
    });

    // Paired shorcode: Content warning accordion
    eleventyConfig.addPairedShortcode('contentWarning', (content, warning) => {
        const warningMarkup = markdownLibrary.renderInline(warning);
        const contentMarkup = markdownLibrary.render(content);
        return `<details class="contnet-warning">
            <summary class="contnet-warning__warning"><strong>⚠️ Content Warning:</strong> ${warningMarkup}</summary>
            <div class="contnet-warning__content">${contentMarkup}</div>
        </details>`;
    });

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);
}
