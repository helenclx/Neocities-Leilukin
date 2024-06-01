---
articleTitle: Custom Domain Name and Hosting Change for Leilukin's Hub
desc: Leilukin's Hub now has a custom domain name and a new host.
date: 2024-05-31
categories: ["site updates"]
toc: true
---

Major news: Leilukin's Hub has a custom domain name: `leilukin.com`! In addition, Leilukin's Hub is now  hosted on Netlify, with the leilukin.com domain name pointing to the Netlify host.

## Moving Beyond Neocities

Leilukin's Hub has grown significantly since its launch on Neocities in September 2022, not just in how many pages it has, but also the fact that the site includes various resources I have shared across the internet (most notably, some of my {% cite "Star Wars: Knights of the Old Republic" %} [articles](/shrines/starwarskotor/articles) and [guides](/shrines/starwarskotor/guides)).

Furthermore, web development has become more than a hobby to me — after starting to build my own website and relearning HTML and CSS, my interest in web development has grown enough to the point I started taking online web development courses and aspiring to become a serious web developer, by taking online courses on platforms such as freeCodeCamp and Scrimba. While Leilukin's Hub is still a hobby website, I have been using this site to practice and grow my web development skills, including using a static site generator, namely Eleventy, to [rebuild and overhaul this site in April 2024](/blog/posts/2024-04-21-april-2024-leilukins-hub-overhaul-with-eleventy).

As much I appreciate Neocities for being a good platform for beginner and hobbyist webmasters to get their start in creating their own websites for free, throughout my journey in learning web development more seriously, I have also discovered other static site hosting platforms, such as GitHub Pages and Netlify, and looked into them as alternatives to Neocities.

Meanwhile, I have been considering purchasing a domain name for Leilukin's Hub. A custom domain name makes my website address easier to remember. Also, I have been using Leilukin as my internet pseudonym for about 17 years at this point, so it feels right to finally own a domain name with that name for my own website.

## New Host for Leilukin's Hub

Neocities provides a [Supporter subscription plan](https://neocities.org/supporter) with benefits including larger storage, custom domain support and removing file type restrictions, but 50 GB storage is overkill for me when 1GB storage is already more than enough for Leilukin's Hub at its current stage.

Not to mention, the above-mentioned GitHub Pages and Netlify already provide custom domain support and no file upload type restriction for free. Getting a custom domain name already requires money, so I need to carefully consider if it is worth for me to spend 5 USD per month on top of my domain name to host my hobby website.

After much deliberation, I settled for Netlify as the new hosting platform for Leilukin's Hub. I am already using GitHub Pages to host my developer portfolio website (with a custom domain name too) as well as some of my other developer projects, and I already have a Netlify account to deploy some of my developer projects. In addition, Netlify allows you to import and deploy a project from a GitHub repository, so I may as well make use of Netlify.

The process of deploying Leilukin's Hub from its GitHub repository went smoothly, so it was time to proceed to the next step: buying and setting up a custom domain.

## Custom Domain for Leilukin's Hub

After comparing various domain name registrars, I chose to buy my domain name from Porkbun for its competitive price for domain names. The `leilukin.com` domain name was not taken, so I seized the opportunity to place an order for it, and later succeeded in purchasing and registering it as my own.

Upon owning `leilukin.com`, I followed Netlify's instructions to set up DNS records to point `leilukin.com` to my website on Netlify. I lacked experience in such things, so it took a bit longer for me to set it up properly, but I eventually did it. Visiting `leilukin.com` will lead you to Leilukin's Hub on Netlify.

Since Porkbun provides an email forwarding feature for its domain names for free, I also decided to make use of it and set up a new email address with the `leilkin.com` domain name, `contact@leilukin.com`, and forward emails sent to this address to my Outlook mailbox. This means now you can email me at contact@leilukin.com.

## Redirect to New Domain Name

There was one last piece of the puzzle to make the Leilukin's Hub's transition from Neocities to Netlify seamless: a way to redirect the `leilukin.neocities.org` address to `leiulkin.com`.

I want a way to redirect my Neocities site address instead of placing a web page to announce the hosting change, because I have shared my Neocities site and some of its content on multiple platforms on the internet. Redirect eliminates the need for visitors to `leilukin.neocities.org` to click a link just to go to the new address.

After researching ways to redirect web pages, I used JavaScript, specifically the [`location.replace()` method](https://www.w3schools.com/jsref/met_loc_replace.asp), for two reasons: it removes `leilukin.neocities.org` from page history, and using JavaScript allows me to write custom code to ensure only the domain gets changed, while the rest of the URL's path remains intact. For example, if you visit `leilukin.neocities.org/blog`, you will get redirected to `leilukin.com/blog`.

With the redirect function set up, `leilukin.com` was officially ready!

## What Happens Now with My Neocities Account

What happens now with my Neocities account and the Neocities version of Leilukin's Hub? I am still using my Neocities account and logging in almost daily. A couple of fellow webmasters and I have been following each other on Neocities, so I am not abandoning my Neocities account any time soon, and Neocities users are still welcome to follow me and post messages on [my Neocities profile page](https://neocities.org/site/leilukin).

As for the website itself, currently I am still deploying Leilukin's Hub to Neocities with the [deploy-to-neocities GitHub action](https://github.com/bcomnes/deploy-to-neocities), while deploying to Netlify at the same time. This is done to notify my followers on Neocities of updates to Leilukin's Hub, although now visiting `leilukin.neocities.org` will redirect you to `leiulkin.com`.

Welcome to `leilukin.com`! 🥳 Not going to lie, I am excited that this major news for my website is officially announced just a day before Pride Month starts! 🏳️‍🌈
