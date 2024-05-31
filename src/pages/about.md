---
layout: main/content
title: About
desc: About this website and its webmaster.
isContentDivided: true
eleventyNavigation:
    key: About
    order: 2
---

{% container "article", "content__section" %}
## The Site

{{ sitemeta.siteName }} is a literal queer-coded website (as in, this website is coded by a queer person) that serves as a personal hub for my interests and self-expression, as well as my own corner on the internet outside social media platforms.

On this site, you can find various stuff I have created or curated, as well as articles dedicated to my interests.

Feel free to drop a message and say hi on [my guestbook](/guestbook)!

This site is currently hosted on Netlify and Neocities. If you also have a Neocities account, you can follow this site through its [Neocities profile](https://neocities.org/site/leilukin).

![A website button with Penelope the cat, the mascot of Neocities, and the text 'hosted by neocities'](/assets/banners/hosted-by-neocities.png "Hosted by Neocities")

### Link to This Site

{% include "main/site-btn.njk" %}

### Accessibility Information

While this website is primarily meant to be my own space of self-expression, I also strive to make my website accessible to provide the best possible user experience. You can read my [accessibility statement](/accessibility) for more information.

### Technical Information

This website is built with the static site generator [Eleventy](https://www.11ty.dev/). Nunjucks and Markdown are the templating languages used for creating pages of this site.

This website is deployed to Neocities from a GitHub repository through the GitHub action [deploy-to-neocities](https://deploy-to-neocities.neocities.org/).
{% endcontainer %}

{% container "article", "content__section" %}
## The Webmaster

![Avatar of a drawing of Leilukin bee](/assets/leilukin/leilukin-bee.png){style="border-radius: 50%; width: 15rem; margin: 0.5em auto;"}

You can call me {{ sitemeta.siteAuthor.name }}. I am a Malaysian Chinese, queer, non-binary lesbian born in the early 90s. My pronouns are they/she/他/她.

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

You can contact me via email: [{{sitemeta.siteAuthor.email}}](mailto:{{sitemeta.siteAuthor.email}}).

[Check out my Now page](/now) to learn what I am doing right now.

{% include "main/support-me.njk" %}
{% endcontainer %}
