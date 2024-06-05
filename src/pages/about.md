---
title: About
desc: About this website and its webmaster.
isContentDivided: true
eleventyNavigation:
    key: About
    order: 2
---

{% container "article", "content__section" %}
## The Website

{{ sitemeta.siteName }} is a literal queer-coded website (as in, this website is coded by a queer person) that serves as a personal hub for my interests and self-expression, as well as my own corner on the internet outside social media platforms.

On this site, you can find various stuff I have created or curated, as well as articles dedicated to my interests.

Feel free to drop a message and say hi on [my guestbook](/guestbook)!

`{{ sitemeta.siteDomain }}` is hosted on [Netlify](https://www.netlify.com/). The domain name, `{{ sitemeta.siteDomain }}`, was purchased from, registered on, and is managed by [Porkbun](https://porkbun.com/).

Originally, {{ sitemeta.siteName }} was hosted on [Neocities](https://neocities.org/). Now visiting `leilukin.neocities.org` will redirect you to `leilukin.com`. That said, I still post about updates to Leilukin's Hub on my Neocities profile, so if you also have a Neocities account, you can still follow me through [my Neocities profile](https://neocities.org/site/leilukin).

### Link to This Site

{% include "main/site-btn.njk" %}

### Accessibility Information

While this website is primarily meant to be my own space of self-expression, I also strive to make my website accessible to provide the best possible user experience. You can read my [accessibility statement](/accessibility) for more information.

### Technical Information

This website is built with the static site generator [Eleventy](https://www.11ty.dev/). Nunjucks and Markdown are the templating languages used for creating pages of this site.

This site is deployed to [Netlify](https://www.netlify.com/) from its GitHub repository, and deployed to [Neocities](https://neocities.org/) from its GitHub repository through the GitHub action [deploy-to-neocities](https://deploy-to-neocities.neocities.org/).
{% endcontainer %}

{% container "article", "content__section" %}
## The Webmaster

![Avatar of a drawing of Leilukin bee](/assets/leilukin/leilukin-bee.png){style="border-radius: 50%; width: 15rem; margin: 0.5em auto;"}

You can call me {{ sitemeta.siteAuthor.name }}. I am a Malaysian Chinese, queer, non-binary lesbian born in the early 90s. My pronouns are they/them and she/her in English, [他]{lang="zh"} and [她]{lang="zh"} in Chinese.

I speak Mandarin, English, Cantonese and Malay, though I am most fluent in Mandarin and English.

I am also autistic, so I use this website as a platform to catalogue my interests.

Social media platforms you can find me on:

* <i class="fa-brands fa-tumblr"></i> [Tumblr](https://lesbiannova.tumblr.com/)
* <i class="fa-brands fa-youtube"></i> [YouTube](https://www.youtube.com/Leilukin)
* <i class="fa-brands fa-twitter"></i> [Twitter](https://twitter.com/Leilukin)
* <i class="fa-brands fa-mastodon"></i> [Mastodon](https://mstdn.social/@leilukin)
* <i class="fa-brands fa-mastodon"></i> [Mastodon (for gaming)](https://elekk.xyz/@leilukin)
* <i class="fa-brands fa-bluesky"></i> [Bluesky](https://bsky.app/profile/leilukin.com)
* <i class="fa-brands fa-instagram"></i> [Instagram](https://www.instagram.com/leilukin)

However, I am most active on Tumblr, so if you want to interact with me on a social media platform, Tumblr would be the best option.

I also have media catalogues online on the following platforms:

* <i class="fa-brands fa-steam-symbol"></i> [Steam](https://steamcommunity.com/id/leilukin/)
* <i class="fa-solid fa-book-open"></i> [The StoryGraph](https://app.thestorygraph.com/profile/leilukin)

You can contact me via email: {{sitemeta.siteAuthor.email}}.

[Check out my Now page](/now) to learn what I am doing right now.

{% include "main/support-me.njk" %}
{% endcontainer %}
