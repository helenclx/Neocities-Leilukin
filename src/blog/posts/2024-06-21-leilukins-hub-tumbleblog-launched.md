---
articleTitle: Leilukin's Hub Tumbleblog Launched
desc: Leilukin's Hub now has a tumbleblog built with Chyrp Lite and hosted on InfinityFree.
date: 2024-06-21
categories: ["site updates"]
---

Leilukin's Hub now has a [tumbleblog](https://jaypeeonline.net/internet/tumbleblogs/) at [tumbleblog.leilukin.com](https://tumbleblog.leilukin.com/)!

I have been considering the idea of creating a microblog or tumbleblog for my website. The main site of [Leilukin's Hub](https://leilukin.com/) already has a [blog](https://leilukin.com/blog/), but I also want another blog for shorter or more casual posts to document my thoughts and various stuff I find interesting or inspirational, especially ones that I am not sure how or where to put in the main site of Leilukin's Hub yet.

Tumblr has served me adequately for this purpose, which is one of the reasons it remains the social media platform I am the most active on since 2011 (yes, this means I have been on Tumblr for 13 years at this point). However, one of the reasons I eventually decided to create my own website was to not relying on social media to share my creations and interests. Therefore, an ideal Tumblr-style microblog for Leilukin's Hub would be self-hosted and sharing the same domain name of `leilukin.com`. After struggling to figure out how to implement a tumbleblog for Leilukin's Hub, I finally discovered the ideal blogging engine for my needs: [Chyrp Lite](https://chyrplite.net/).

Chyrp Lite has everything I am looking for to build a self-hosted Tumblr-style blog. The website explicitly states that you can have a tumbleblog with the blogging engine, with feathers that allow you to make not only text posts, but also image posts, audio posts, video posts, quote posts, link posts and even posts with files attached to allow visitors to download. Chyrp Lite is written in PHP, so it cannot be hosted on platforms that support static sites only, such as Neocities, GitHub Pages, Netlify (which is where `leilukin.com` is currently hosted on), etc. This is where [InfinityFree](https://www.infinityfree.com/) came in.

InfinityFree is among the few hosting platforms that provides PHP and MySQL support for free, so I had created an InfinityFree account to start learning about PHP, even before discovering Chyrp Lite. In addition, InfinityFree supports custom domain without additional charges, so I have also added the `leilukin.com` domain name to my InfinityFree account, in case I need to host something with PHP and want to use a subdomain of `leilukin.com` for it. Now, I got to make use of what I learned to build this tumbleblog for Leilukin's Hub.

I started with adding a `tumbleblog.leilukin.com` custom subdomain to InfinityFree, configuring the DNS records on Porkbun (which manages the `leilukin.com` domain name), and requesting a free SSL certificate from InfinityFree to add HTTPS support to this blog. After making sure the `tumbleblog.leilukin.com` subdomain is ready, I followed the [Quick Start Guide](https://chyrplite.net/wiki/Quick-Start-Guide.html) to set up Chyrp Lite, by uploading the blogging engine's files to InfinityFree with FTP, creating a MySQL database for this tumbleblog, and installing Chyrp Lite into my InfinityFree server. At last, I successfully installed Chyrp Lite on InfinityFree.

Leilukin's Hub Tumbleblog is now officially launched! 🥳