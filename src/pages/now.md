---
title: Now
updated: 2024-06-09
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

### Website Performance Improvement

After setting up a [custom domain name and migrating this website to Netlify](/blog/posts/2024-05-31-domain-name-hosting-change-leilukins-hub), I have been working on improving the performance of this website to make visitors' experience with browsing this site better.

Important steps to improve this site's performance include preloading assets of the default font (Lexend), removing unneeded Font Awesome assets, and converting most images of this site to AVIF format to reduce file size and bandwidth.

As a result, {{ sitemeta.siteName }} is finally able to score 100 in all categories (Performance, Accessibility, Best practice and SEO on both mobile and desktop views) on [PageSpeed Insights](https://pagespeed.web.dev/).

### Updating my {% cite "Star Wars: Knights of the Old Republic" %} mods

As part of my ongoing collaboration with [KOtOR Community Portal's mod builds](https://kotor.neocities.org/modding/), I have updated [KotOR 1 Twi'lek Male NPC Diversity](/projects/kotor1mods/#kotor-1-twilek-male-npc-diversity), [PartySwap](/projects/kotor2mods/#partyswap) and [PartySwap and Extended Enclave Compatibility Patch](/projects/kotor2mods/#partyswap-and-extended-enclave-compatibility-patch) to ensure my mods are bug-free and compatible with other mods in the mod builds, and to prepare for the next iteration of the mod builds.