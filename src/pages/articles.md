---
layout: main/content
title: Articles
desc: List of articles published on my website.
metadata:
    type: article
templateEngineOverride: njk, md
toc: true
eleventyNavigation:
    order: 5
---

## My Articles
Articles I have written.
<ul class="content-list">
    {%- for article in collections["my articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | niceDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## My Articles for Video Games with Their Own Pages
<ul class="content-list">
    <li>My <cite>Cassette Beasts</cite> shrine <a href="/shrines/cassettebeasts/articles/">Articles</a> page</li>
    <li>My <cite>Star Wars: Knights of the Old Republic</cite> shrine <a href="/shrines/starwarskotor/articles/">Articles</a> page</li>
</ul>

## Featured Articles
Articles featuring other people's interview with me.
<ul class="content-list">
    {%- for article in collections["featured articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | niceDate }}</time>
        </li>
    {%- endfor -%}
</ul>
