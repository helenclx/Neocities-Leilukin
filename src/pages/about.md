---
layout: main/content
title: About
desc: About this website and its owner.
isContentDivided: true
toc: true
eleventyNavigation:
    key: About
    order: 2
---

{% container "article", "content__section" %}
## The Site

This is a literal queer-coded website (as in, this website is coded by a queer person) that serves as a personal hub for my interests and self-expression, as well as my own corner on the internet outside social media platforms.

On this site, you can find various stuff I have created or curated, as well as articles dedicated to my interests.

Feel free to drop a message and say hi on [my guestbook](/guestbook)!

You can link to my website with the following button. I would recommend you to host my site button in your own website instead of hotlinking it.

![Button of Leilukin's Hub](/assets/leilukin/Leilukins-Hub-button.png)

If you also have a Neocities account, you can follow this site through its [Neocities profile](https://neocities.org/site/leilukin).

![A website button with Penelope the cat, the mascot of Neocities, and the text 'hosted by neocities'](/assets/banners/hosted-by-neocities.png "Hosted by Neocities")

### Accessibility

Even though this website is primarily meant to be my own space of self-expression, I also want every visitor to my website have the best possible experience of browsing my website. Therefore, I strive to design this website to be accessible.

Currently, this site includes the following accessibility features:

* Fully responsive and mobile-friendly layout
* Semantic HTML
* Alt text for all non-decorative images
* No autoplaying music or video
* Proper color contrast for backgrounds, text, and links
* Font sizes, margins and paddings use relative units such as rem/em instead of absolute units such as px for scalability
* Site is functional up to 200% text zoom
* Allows reader mode to be enabled enabled for articles and blog posts
* Keyboard navigation-friendly; visible outline when an interactable element is focused

I use the following tools to test my site for accessibility:
* WebAIM's [WAVE Browser Extension](https://wave.webaim.org/extension/)
* [NVDA](https://www.nvaccess.org/about-nvda/) screen reader for Windows

In addition, I manually test my website with keyboard navigation

Feedbacks for improving the accessibility of this site are welcome.

### Technical Information

This website is built with the static site generator [Eleventy](https://www.11ty.dev/). Nunjucks and Markdown are the templating languages used for creating pages of this site.

This website is deployed to Neocities from a GitHub repository through the GitHub action [deploy-to-neocities](https://deploy-to-neocities.neocities.org/).
{% endcontainer %}

{% container "article", "content__section" %}
## The Site Owner

![Avatar of a drawing of Leilukin bee](/assets/leilukin/leilukin-bee.png){style="border-radius: 50%; width: 15rem; margin: 0.5em auto;"}

You can call me Leilukin. I am a Malaysian Chinese, queer, non-binary lesbian born in the early 90s. My pronouns are they/she/他/她.

I speak Mandarin, English, Cantonese and Malay, though I am most fluent in Mandarin and English.

I am also autistic, so I use this website as a platform to catalogue my interests.

Social media platforms you can find me on:

* <i class="fa-brands fa-tumblr"></i> [Tumblr](https://lesbiannova.tumblr.com/)
* <i class="fa-brands fa-youtube"></i> [YouTube](https://www.youtube.com/Leilukin)
* <i class="fa-brands fa-twitter"></i> [Twitter](https://twitter.com/Leilukin)
* <i class="fa-brands fa-mastodon"></i> [Mastodon](https://mstdn.social/@leilukin)
* <i class="fa-brands fa-mastodon"></i> [Mastodon (for gaming)](https://elekk.xyz/@leilukin)
* <i class="fa-brands fa-bluesky"></i> [Bluesky](https://bsky.app/profile/leilukin.bsky.social)
* <i class="fa-brands fa-instagram"></i> [Instagram](https://www.instagram.com/leilukin)

However, I am most active on Tumblr, so if you want to interact with me on a social media platform, Tumblr would be the best option.

I also have media catalogues online on the following platforms:

* <i class="fa-brands fa-steam-symbol"></i> [Steam](https://steamcommunity.com/id/leilukin/)
* <i class="fa-solid fa-book-open"></i> [The StoryGraph](https://app.thestorygraph.com/profile/leilukin)

You can contact me via email: [leilukin@outlook.com](mailto:leilukin@outlook.com).

[Check out my Now page](/now) to learn what I am doing right now.

{% include "main/support-me.njk" %}
{% endcontainer %}
