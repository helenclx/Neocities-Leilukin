---
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
<ul class="item-list">
    {%- for article in collections["my articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | formatDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## My Articles for Video Games with Their Own Pages
* My {% cite "Cassette Beasts" %} shrine [Articles](/shrines/cassettebeasts/articles/) page
* My {% cite "Star Wars: Knights of the Old Republic" %} shrine [Articles](/shrines/starwarskotor/articles/) page
{.item-list}

## Featured Articles
Articles featuring other people's interview with me.
<ul class="item-list">
    {%- for article in collections["featured articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | formatDate }}</time>
        </li>
    {%- endfor -%}
</ul>
