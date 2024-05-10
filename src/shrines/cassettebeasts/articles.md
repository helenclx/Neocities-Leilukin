---
layout: cassettebeasts/content
title: Articles
pageTitle: Cassette Beasts Articles
desc: List of articles written by me or other people that I recommend for Cassette Beasts.
tags: cassette beasts shrine page
toc: true
templateEngineOverride: njk, md
eleventyNavigation:
    key: Cassette Beasts Articles
    parent: Cassette Beasts Shrine
    title: Articles
    order: 1
---

## My {% cite "Cassette Beasts" %} Articles
<ul class="item-list">
    {%- for article in collections["cassette beasts articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | formatDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## {% cite "Cassette Beasts" %} Articles I Recommend

<ul class="item-list">
    <li><a href="https://www.pillowfort.social/posts/3642949" target="_blank">Cassette Beasts Level-Up Dialogue Summaries (Meredith)</a> by ArgentDandelion on Pillowfort — An analysis of Meredith's character.</li>
    <li><a href="https://www.pillowfort.social/posts/3792935" target="_blank">Cassette Beasts Level-Up Dialogue Summaries (Viola)</a> by ArgentDandelion on Pillowfort — An analysis of Viola's character.</li>
    <li><a href="https://www.youtube.com/watch?v=jFJ6tMeGsLg" target="blank">A Case Of Autism: Meredith (Cassette Beasts)</a> by Optical Drop — A video essay analysing Meredith's autistic coding.</li>
</ul>
