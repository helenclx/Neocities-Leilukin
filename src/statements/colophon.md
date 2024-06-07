---
title: Colophon
keyword: colophon page
updated: 2024-06-07
toc: true
eleventyNavigation:
    order: 13
---

Information about how this website is built.

## Technology
* Built with the static site generator [Eleventy](https://www.11ty.dev/)
* Templating languages: Nunjucks and Markdown
* Code written with Visual Studio Code
* JavaScript runtime: [Bun](https://bun.sh)
* Source code available on [GitHub](https://github.com/helenclx/leilukin-site)

## Host and Domain
* Deployed to [Netlify](https://www.netlify.com/) from this site's GitHub repository
* The domain name, `{{ sitemeta.siteDomain }}`, was purchased from, registered on, and is managed by [Porkbun](https://porkbun.com/)

## Plugins
* Eleventy's official [RSS](https://www.11ty.dev/docs/plugins/rss/) plugin
* Eleventy's official [Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin
* [@zachleat/details-utils](https://www.npmjs.com/package/@zachleat/details-utils)

### Eleventy Community Plugins
* [@11tyrocks/eleventy-plugin-emoji-readtime](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-emoji-readtime)
* [eleventy-plugin-embed-everything](https://www.npmjs.com/package/eleventy-plugin-embed-everything)
* [eleventy-plugin-metagen](https://www.npmjs.com/package/eleventy-plugin-metagen)
* [@uncenter/eleventy-plugin-toc](https://www.npmjs.com/package/@uncenter/eleventy-plugin-toc)

### markdown-it plugins
* [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
* [markdown-it-attribution](https://www.npmjs.com/package/markdown-it-attribution)
* [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
* [markdown-it-bracketed-spans](https://www.npmjs.com/package/markdown-it-bracketed-spans)
* [markdown-it-deflist](https://www.npmjs.com/package/markdown-it-deflist)
* [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote)

## Self-hosted Assets
* [Lexend](https://www.lexend.com/) font family
* [Intel One Mono](https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html) typeface
* [Font Awesome](https://fontawesome.com/) (brand icons only)

## JavaScript
Due to this website being a static site, JavaScript is used to create dynamic and interactive components of this site. Here is a list of how JavaScript is used on this site:

* The header of every page uses JavaScript to detect the visitor's current date and dynamically displays a top blurb and occasionally changes the header background on certain dates, including:
    * LGBTQ+ events, International Women's Day, website anniversary and my birthday;
    * Release anniversaries of [{% cite "A Summer’s End — Hong Kong 1986" %}](/shrines/asummersend), [{% cite "Star Wars: Knights of the Old Republic" %}](/shrines/starwarskotor) and [{% cite "Cassette Beasts" %}](/shrines/cassettebeasts) on their respective shrines;
    * Birthdays of characters from {% cite "A Summer’s End — Hong Kong 1986" %} on its shrine.
* When this site is viewed on mobile devices, the navigation bar uses JavaScript for the following functions:
    * Toggle the display of the navigation links when the navigation menu button is clicked;
    * Enable using the Escape key to close the navigation manu.
* Zach Leatherman's [details-utils](https://www.npmjs.com/package/@zachleat/details-utils) JavaScript package is used to automatically expand sidebar table of contents on larger screen sizes.
* Every page has a button on the bottom right corner to allow you to quickly scroll to the top of the page. This scroll-to-top button uses JavaScript to show or hide the button based on scroll position.
    * A "Back to top" link that does not use JavaScript is available on each page's bottom footer, but the JavaScript version allows visitors to quickly scroll to the top page without needing to reach the bottom footer.
* [status.cafe](https://status.cafe/) widget, which is placed on the home page, uses JavaScript to fetch data of my latest status update.
* [Website Carbon Badge](https://www.websitecarbon.com/badge/), which is placed on the home page, uses JavaScript to calculate the carbon footprint of this website.
* [Focus First Webring](https://owlsroost.xyz/webring/index.html) and its widget, which is placed on the [Links page](/links), use the JavaScript webring template [onionring.js](https://garlic.garden/onionring/).
* [Guestbook](/guestbook) uses JavaScript to send form data to my private Discord channel via Discord webhook, and fetch data from Google Sheets to display messages on the web page (guestbook code by [Vera Konigin](https://groundedwren.neocities.org/pages/demo_controls/guestbookDemo)).

You can still access most of the content of this site with JavaScript disabled, but the above components will not work as intended.
