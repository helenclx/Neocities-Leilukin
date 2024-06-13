---
title: Now
updated: 2024-06-13
eleventyNavigation:
    key: Now
    order: 3
eleventyComputed:
    desc: What {{ sitemeta.siteAuthor.name }} is doing now.
---

*This page was last updated on {{ updated | formatDate }}.*

This is my [/now page](https://nownownow.com/about). You can find more pages like this at [nownownow.com](https://nownownow.com/).

You can also check out my [status.cafe profile](https://status.cafe/users/leilukin) for my latest short status updates.

## What I am Working on

### Reduce Website's JavaScript Reliance

In order to accommodate visitors who have disabled JavaScript, I have been working on reducing this website's dependence on JavaScript to perform basic functions.

Previously, the navigation bar's hamburger menu on mobile needed JavaScript to open and close, while the "Back to top" button used JavaScript to hide or display based on the visitor's scroll position. Now I have removed JavaScript from being needed to perform these functions, though the hamburger menu still uses JavaScript to enable pressing the Escape key to close to improve accessibility for keyboard navigation.

For components that still require JavaScript, such as my status.cafe widget and the Website Carbon badge on the home page, I have added `<noscript>` elements to notify visitors who have JavaScript disabled that JavaScript is required for those components.

You can learn more about how JavaScript is used on this site on the [JavaScript section of the colophon page](/colophon/#javascript).

### Website Performance Improvement

After setting up a [custom domain name and migrating this website to Netlify](/blog/posts/2024-05-31-domain-name-hosting-change-leilukins-hub), I have been working on improving the performance of this website to make visitors' experience with browsing this site better.

Important steps to improve this site's performance include preloading assets of the default font (Lexend), removing unneeded Font Awesome assets, and converting most images of this site to AVIF format to reduce file size and bandwidth.

As a result, {{ sitemeta.siteName }} is finally able to score 100 in all categories (Performance, Accessibility, Best practice and SEO on both mobile and desktop views) on [PageSpeed Insights](https://pagespeed.web.dev/).

### Updating my {% cite "Star Wars: Knights of the Old Republic" %} mods

As part of my ongoing collaboration with [KOtOR Community Portal's mod builds](https://kotor.neocities.org/modding/), I have updated [KotOR 1 Twi'lek Male NPC Diversity](/projects/kotor1mods/#kotor-1-twilek-male-npc-diversity), [PartySwap](/projects/kotor2mods/#partyswap) and [PartySwap and Extended Enclave Compatibility Patch](/projects/kotor2mods/#partyswap-and-extended-enclave-compatibility-patch) to ensure my mods are bug-free and compatible with other mods in the mod builds, and to prepare for the next iteration of the mod builds.