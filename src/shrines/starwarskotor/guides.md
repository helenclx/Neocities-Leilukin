---
layout: starwarskotor/content
title: Guides
pageTitle: "Star Wars: Knights of the Old Republic Guides"
desc: "List of guides for the Star Wars: Knights of the Old Republic series I have written or found useful. This page also includes lists of cheats."
tags: kotor shrine page
toc: true
eleventyNavigation:
    key: KotOR Guides
    parent: KotOR Shrine
    title: Guides
    order: 2
---

## My KotOR Guides
<ul>
    {%- for article in collections["kotor guides"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | formatDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## KotOR 1 Guides by Others
* [{% cite "Star Wars: Knights of the Old Republic" %} section](https://strategywiki.org/wiki/Star_Wars:_Knights_of_the_Old_Republic) on StrategyWiki

## KotOR 2: TSL Guides by Others
* [Influence Walkthrough](https://web.archive.org/web/20190104130924/www.starwarsknights.com/influence.php) by by Achilles — This guide was written for the vanilla game. The Unofficial Dialog Patch on the page is not compatible with The Sith Lords Restored Content Mod (TSLRCM).
* [TSLRCM Influence Guide](https://www.reddit.com/r/kotor/comments/ruofg1/kotor_2_tslrcm_influence_guide/) by u/XDarkStrikerX
* [TSLRCM Influence Guide Collaboration](https://www.reddit.com/r/kotor/comments/vmhn73/kotor_2_tslrcm_influence_guide_collaboration/), organised by u/Egg-MacGuffin. [Here is the direct link to the spreadsheet](https://docs.google.com/spreadsheets/d/1SppuhOhl3AU-EAKjSji1EIJm41OTjeRGfVHbnmRwqio/edit?usp=sharing).

## KotOR Cheats
* [KotOR1 Warp Code List](https://deadlystream.com/blogs/entry/414-blog-112-the-kotor1-warp-code-list/) by by Sith Holocron
* [TSL Warp Code List](https://deadlystream.com/blogs/entry/413-blog-111-the-tsl-warp-code-list/) by by Sith Holocron