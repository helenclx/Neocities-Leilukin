---
layout: starwarskotor/content
title: Articles
pageTitle: "Star Wars: Knights of the Old Republic Articles"
desc: "List of articles written by me or other people that I recommend for the Star Wars: Knights of the Old Republic series."
tags: kotor shrine page
toc: true
templateEngineOverride: njk, md
eleventyNavigation:
    key: KotOR Articles
    parent: KotOR Shrine
    title: Articles
    order: 1
---

## My Articles for Both Games
<ul class="item-list">
    {%- for article in collections["kotor both articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | niceDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## My KotOR 1 Articles
<ul class="item-list">
    {%- for article in collections["kotor 1 articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | niceDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## My KotOR 2 Articles
<ul class="item-list">
    {%- for article in collections["kotor 2 articles"] -%}
        <li>
            <p><a href="{{ article.url }}">{{ article.data.articleTitle }}</a></p>
            <time>{{ article.date | niceDate }}</time>
        </li>
    {%- endfor -%}
</ul>

## KotOR Articles I Recommend
<ul class="item-list">
    <li><a href="https://somblog.tumblr.com/post/175466502069/this-isnt-a-star-wars-fandom-blog-but-ive-been" target="_blank">This essay about Juhani</a> by Tumblr user somblog is an excellent analysis of Juhani's character.</li>
    <li><a href="https://www.reddit.com/r/kotor/comments/129co74/in_defense_of_peragus_its_not_just_welldesigned/" target="_blank">In Defense of Peragus: it’s not just well-designed, it’s a uniquely good level too</a> by Snigaroo on the KotOR Subreddit — An excellent essay that goes into detail in explaining why some of us actually find Peragus a good level. I am among the minority that genuinely enjoy Peragus, to the extent that I never even considered using any mod to skip the level, and I replay all the hologram recordings throughout Peragus and the Harbinger every time I replay {% cite "KotOR 2" %}.</li>
</ul>