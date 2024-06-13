---
articleTitle: Improving Site Performance of Leilukin's Hub
desc: Steps I hae taken to improve my website's performance.
date: 2024-06-12
categories: ["site updates", "web development"]
---

Since Leilukin's Hub [migrated to Netlify and got a custom domain name](/blog/posts/2024-05-31-domain-name-hosting-change-leilukins-hub/) on 31 May 2024, I have been working on improving the performance of this website. After discovering the static site generator [Eleventy](https://www.11ty.dev/) and began to [rebuilt Leilukin's Hub with Eleventy](/blog/posts/2024-04-21-april-2024-leilukins-hub-overhaul-with-eleventy/), I found the [Eleventy Leaderboard](https://www.11ty.dev/speedlify/) which inspired me to look into [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/) more, since the Eleventy Leaderboard measures the Lighthouse score of websites built with Eleventy.

I use [PageSpeed Insights](https://pagespeed.web.dev/) to measure my website's Lighthouse score. My website achieved 100 in the categories of Accessibility, Best Practices and SEO, but the Performance score could use improvement. As a result, I studied about ways to improve website performance based on PageSpeed Insights' reports about my site.

## Optimising Custom Fonts

During the tests of Leilukin's Hub, PageSpeed Insights reported that the biggest factor in impacting the performance of this website is [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls). It took me a while to figure out using a custom font, namely the [Lexend font family](https://www.lexend.com/), was the cause of CLS of Leilukin's Hub — due to using a custom font as the default font, there was a [flash of unstyled text (FOUT)](https://fonts.google.com/knowledge/glossary/fout) for the entire page of Leilukin's Hub before the Lexend font loaded.

This prompted me to research ways to optimise web fonts. Eventually, I solved the issue of FOUT and CLS by preloading the Lexend regular and bold typeface files (I used [google-webfonts-helper](https://gwfh.mranftl.com/fonts) to obtain the font files in WOFF2 format) in the `<head>` element, and turning my CSS stylesheet for Lexend into inline CSS by placing a `<style>` block for the CSS in the `<head>` element. Leilukin's Hub Lighthouse performance score improved as a result.

By testing the site performance of Leilukin's Hub, I also learned that using Font Awesome could impact site performance, largely due to Font Awesome's large CSS files, so I decided to optimise the Font Awesome assets on Leilukin's Hub by using only the brand icons, while removing unused and unneeded font files and CSS properties.

## Converting Images to AVIF Format

The next step to improve the site performance of Leilukin's Hub was converting most images on this website to [AVIF](https://en.wikipedia.org/wiki/AVIF) format, upon PageSpeed Insight's suggestions of using next-gen image formats such as WEBP and AVIF. I used [GNU Image Manipulation Program](https://www.gimp.org/), [Shutter Encoder](https://www.shutterencoder.com/) and [ImageMagick](https://imagemagick.org/) to carry out the task of converting images to AVIF.

Converting images to AVIF reduces the images' file sizes, which in turn saves bandwidth. Being able to host images in AVIF format adds to one more reason I am glad that I decided to migrate Leilukin's Hub from Neocities to Netlify. One of the reasons for the migration is Netlify' lack of file type restriction for free, unlike Neocities which requires paying for the [Supporter plan](https://neocities.org/supporter).

The only disadvantage of[ Netlify's free plan](https://www.netlify.com/pricing/) compared to Neocities' free plan is the lower monthly bandwidth limit — Netlify limits monthly bandwidth for free tier users to 100GB across all deployed sites and projects, while Neocities' limit is 200GB for one website. However, even 100GB per month is more than enough for average users, though taking steps to save bandwidth like using AVIF images still certainly helps.

On the subject of images, I have also set all images other than the header to [lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) to reduce page load times.

## Perfect Lighthouse Score Achieved

At last, after my effort in optimising this website to improve its performance, Leilukin's Hub reached a 100 Performance score, and thus [achieved a perfect Lighthouse score](https://pagespeed.web.dev/analysis/https-leilukin-com/apte02co99)!

I have come to care about my website's performance, because not only has web development evolved into more than a hobby for me, but also it makes visitors' experience with browsing my website better with faster loading times.