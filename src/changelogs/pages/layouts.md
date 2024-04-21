---
layout: main/changelogs
title: Website Layout Archive
desc: An archive for the page layout designs mt website has used.
changelogNav: Website Layouts
templateEngineOverride: njk, md
toc: true
eleventyNavigation:
    order: 1
---

{%- macro siteLayout(params) -%}
    ## {{ params.title }}
    {% for screenshot in params.screenshots %}
        <img src="/assets/layouts/{{ screenshot.imgFile }}" alt="{{ screenshot.imgAlt }}">
    {% endfor %}
{%- endmacro -%}

{{ siteLayout({
    title: "20 April 2024",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2024-04.png",
            imgAlt: "Leilukin's Hub home page on 11 September 2023"
        },
        {
            imgFile: "Leilukins-Hub-blog-layout-2024-04.png",
            imgAlt: "Leilukin's Hub blog on 11 September 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "11 September 2023 Blog Layout",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-blog-layout-2023-09.png",
            imgAlt: "Leilukin's Hub blog on 11 September 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "23 June 2023",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2023-06.png",
            imgAlt: "Leilukin's Hub home page on 23 June 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "26 January 2023",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2023-01.png",
            imgAlt: "Leilukin's Hub home page on 26 January 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "11 September 2022 (Site Launch)",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2022-index.png",
            imgAlt: "Leilukin's Hub index page during the site's launch on 11 September 2022"
        },
        {
            imgFile: "Leilukins-Hub-layout-2022-page.png",
            imgAlt: "Leilukin's Hub My Creation page during the site's launch on 11 September 2022"
        }
    ]
}) }}
