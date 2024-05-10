---
layout: starwarskotor/content
title: Guides
pageTitle: "Star Wars: Knights of the Old Republic Guides"
desc: "List of guides for the Star Wars: Knights of the Old Republic series I have written or found useful. This page also includes lists of cheats."
tags: kotor shrine page
toc: true
templateEngineOverride: njk, md
eleventyNavigation:
    key: KotOR Guides
    parent: KotOR Shrine
    title: Guides
    order: 2
---

## My KotOR Guides
<ul class="item-list">
    {%- for article in collections["kotor guides"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | formatDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## KotOR 1 Guides by Others
<ul class="item-list">
    <li><a href="https://strategywiki.org/wiki/Star_Wars:_Knights_of_the_Old_Republic">{% cite "Star Wars: Knights of the Old Republic" %} section</a> on StrategyWiki</li>
</ul>

## KotOR 2: TSL Guides by Others
<ul class="item-list">
    <li><a href="https://web.archive.org/web/20190104130924/www.starwarsknights.com/influence.php">Influence Walkthrough</a> by by Achilles — This guide was written for the vanilla game. The Unofficial Dialog Patch on the page is not compatible with The Sith Lords Restored Content Mod (TSLRCM).</li>
    <li><a href="https://www.reddit.com/r/kotor/comments/ruofg1/kotor_2_tslrcm_influence_guide/">TSLRCM Influence Guide</a> by u/XDarkStrikerX</li>
    <li><a href="https://www.reddit.com/r/kotor/comments/vmhn73/kotor_2_tslrcm_influence_guide_collaboration/">TSLRCM Influence Guide Collaboration</a>, organised by u/Egg-MacGuffin. <a href="https://docs.google.com/spreadsheets/d/1SppuhOhl3AU-EAKjSji1EIJm41OTjeRGfVHbnmRwqio/edit?usp=sharing">Here is the direct link to the spreadsheet</a>.</li>
</ul>

## KotOR Cheats
<ul class="item-list">
    <li><a href="https://deadlystream.com/blogs/entry/414-blog-112-the-kotor1-warp-code-list/">KotOR1 Warp Code List</a> by by Sith Holocron</li>
    <li><a href="https://deadlystream.com/blogs/entry/413-blog-111-the-tsl-warp-code-list/">TSL Warp Code List</a> by by Sith Holocron</li>
</ul>
