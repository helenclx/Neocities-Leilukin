---
articleTitle: April 2024 Leilukin's Hub Overhaul with Eleventy
desc: I rebuilt my website with the static site generator Eleventy in April 2024.
date: 2024-04-21
categories: ["site updates"]
toc: true
---

Leilukin's Hub just overgone a major overhaul: In April 2024, I have been rebuilding this entire website with the [static site generator](https://en.wikipedia.org/wiki/Static_site_generator) (SSG), [Eleventy](https://www.11ty.dev/), often abbreviated as 11ty, and the process was completed on 20 April 2024.

After building this website for more than a year, Eleventy finally provided the solution for me to maintain, manage and update my website in more dynamic and sufficient ways to save time.

## Challenges of Maintaining a Growing Website

Leilukin's Hub has come a long way since launch on 11 September 2022, from a small website with a few pages and a simple layout, to a full-fledged personal website with multiple [articles](/articles), a [blog](/blog), a couple of [shrines](/shrines) with additional features such as sticky navigation bar, table of contents, etc. Meanwhile, I have also been learning web development, which helped to improve this website in multiple ways.

However, more content on my website also means more work to maintain. In particular, I have been trying to find ways to render components that share across multiple pages on my site, such as the header, navigation bar and footer, without having to copy and pasting the code of these components over and over whenever I want to add a new page. I had used JavaScript for this, but it is still not the best solution because I still needed to add a link to my JavaScript file in HTML. Thankfully, I eventually discovered Eleventy as the solution.

## Why Eleventy?

There are [many static site generators](https://jamstack.org/generators/), so why I choose Eleventy over others? The main reason is Eleventy's flexibility. You can start building your website with Eleventy with something as simple as [an `index.md` Markdown file](https://hamatti.org/posts/index-md-is-valid-eleventy-project/).

In addition, Eleventy's own features, support for many [template languages](https://www.11ty.dev/docs/languages/) and plugins allow me to have control over how I build and customise my own website, some of which I will highlight as I elaborate the changes and improvements I had made to this website below.

## New Features of Leilukin's Hub

### Pagination

Leilukin's Hub [blog](/blogs) and main [changelogs](/changelogs) page now has pagination, thanks to [Eleventy's built-in support for the feature](https://www.11ty.dev/docs/pagination/).

### Estimated Reading Time for Articles and Blog Posts

Thanks to [Emoji Read Time](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-emoji-readtime), a community plugin for Eleventy, my articles and blog posts now show the piece's estimated reading time before the main content.

### Heading Anchor Links

For the articles, blog posts and some other pages that have headings, I have enabled anchor links on the headings by referring to the [11ty Slugs and Anchors guide](https://11ty.rocks/eleventyjs/slugs-anchors/#enable-anchor-links-on-content-headings) from the website 11ty Rocks!, installing and configuring the [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor) plugin.

Having a plugin that automatically generates heading anchor links also allows me to generate table of contents by installing the [eleventy-plugin-nesting-toc](https://www.npmjs.com/package/eleventy-plugin-nesting-toc) plugin.

### Content Categories

Eleventy's [collection](https://www.11ty.dev/docs/collections/) feature allows users to group site content by tags and create custom collections. This feature allows me to add categories to my articles and blog posts, and in turn allows visitors to browse my website by [categories](/categories).

### Archive for All My Articles and Blog Posts

Eleventy's collection feature also allows me to dynamically display links to my articles and posts when I make a new one, without needing to edit more pages to add the new links myself. Therefore, I took advantage of this feature by creating an [archive] page to display all my articles and blog posts.

Furthermore, my articles, blog and posts now has a right sidebar with links to my articles, blog posts as well as their archives and categories.

### Breadcrumbs

Some contents on Leilukin's Hub now has [breadcrumbs](https://www.seoptimer.com/blog/breadcrumbs-website/), which shows the locations of these contents within this website and provides another means for visitors to navigate this site.

## Improved Features of Leilukin's Hub

### Blog

Leilukin's Hub blog was [launched on 28 January 2023](https://leilukin.neocities.org/blog/posts/2023-01-28-leilukins-hub-now-has-a-blog/). Formerly, the blog was built with [Zonelets](https://zonelets.net/); now I take advantage of Eleventy's flexibility by recreating Leilukin's Hub blog with it, thus using the main site's layout for the blog instead of [using a different layout](/changelogs/layouts/#11-september-2023-blog-layout). This makes the blog actually feels like it is part of this website.

### Site Map

Visually, my [site map](/sitemap) does not change much other than tweaking the spacing, but under the hood, I use the Eleventy's official [Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin to generate the links to my pages in a hierarchical manner.

### RSS Feed

I had created an RSS feed for Leilukin's Hub's changelogs and blog posts for a while, but previously I had to create new entries in the feed manually by using [RSS Builder](https://sourceforge.net/projects/rss-builder/). Now by installing and setting up Eleventy's official [RSS](https://www.11ty.dev/docs/plugins/rss/) plugin, new feed entries will be generated automatically when I make new changelogs, articles and blog posts.

## Other Notable Changes of Leilukin's Hub

The following changes are not related to any features inherent to Eleventy or its plugins, but they were part of my process of rebuilding Leilukin's Hub.

### Direct Visit to Leilukin's Hub Home Page

I have removed the "launch page" that was used as the very first page you saw when you visited the link [leilukin.neocities.org](https://leilukin.neocities.org/). Now when you visit the link to my website, you will immediately see the home page wihout any extra step.

## My Creation Page Renamed to Projects

The page listing the things I have created has been renamed from "My Creation" to ["Projects"](/projects).

### Site Updates being Blog Posts

Previously, longer [site updates](/categories/site-updates/) were made into their own pages, since Leilukin's Hub did not have its own blog when I made the first site update post. Now these updates are converted into blog posts.

### Featured Articles being Party of Articles

Formerly, pages that featured my interviews were on their own page called "featured". Now, these [featured articles](/articles/#featured-articles) are merged into the [articles](/articles) page.

### Responsive Shrine Header Images

I have created two different resolutions of each header image of my [shrines](/shrines). Which version of the shrine header image gets displayed depends on if your screen is horizontal or vertical.

### Scroll-to-Top Function

Previously, this site's scroll-to-top function was placed in the footer. Now, I created a scroll-to-top button in the bottom right corner of the page when you scroll down.

### Site Layout

The main title of each page is now displayed above both the main content and sidebars, instead of just above the main content like in the [previous layout](/changelogs/layouts/#23-june-2023). This change was made so when this site is viewed on mobile, the table of contents of the left sidebar will be displayed above the main content but still below the page's main title. Previously, I had to place the table of contents on both the left sidebar and the main content's body, and hide the sidebar table of contents when viewed on mobile.

I also use [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) to set the page layout in that the main content's width will remain the same instead of expanding if there is no sidebar on the page.

## Use GitHub Actions to deploy Leilukin's Hub to Neocities

Eleventy is great for reducing many workloads in maintaining and updating my website, so how about publishing the website to Neocities? That is where the [GitHub actions](https://docs.github.com/en/actions) comes in.

Before I decided to use a static site generator to rebuild Leilukin's Hub, I discovered the GitHub action named [deploy-to-neocities](https://github.com/bcomnes/deploy-to-neocities), which as the name suggests, allows you to publish your website directly from a GitHub repository to Neocities. I succeeded in deploying all the files of Leilukin's Hub to Neocities with it even before starting to rebuild my website with Eleventy.

I have been using Visual Studio Code to write the code for Leilukin's Hub, and saving a copy of all the files of my website on my own computer. The combination of creating a Git repository for Leilukin's Hub and using the deploy-to-neocities GitHub action saves the time and workload needed to log in to Neocities, navigate the files and folders and open a file to edit the code every time I want to make a change to my website.

## A Week's Worth of Effort Well-Spent

I had spent a whole week in rebuilding Leilukin's Hub from scratch with Eleventy, and at last completing the process on 20 April 2024. Most of the time rebuilding this website was spent on setting up layout templates, rather than changing the format of my articles and blog posts from HTML to markdown. However, the effort and time spent was worth it, and Leilukin's Hub feels new again.

Welcome to the rebuilt Leilukin's Hub! 🥳