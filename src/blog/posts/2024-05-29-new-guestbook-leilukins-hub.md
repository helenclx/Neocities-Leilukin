---
articleTitle: The Search for a Guestbook Solution for Leilukin's Hub
desc: I spent a great deal of time in searching for a guestbook for Leilukin's hub.
date: 2024-05-29
categories: ["site updates"]
---

On 4 May 2024, the guestbook service 123Guestbook announced that [their service would be closed n 1 July 2024](https://web.archive.org/web/20240504201300/https://www.123guestbook.com/news.php?id=closure).

I created an account on 123Guestbook and started using it as Leilukin's Hub's guestbook since 25 July 2023. When my 123Guestbook guestbook was open, I received multiple nice messages expressing appreciation for my website and work, including my [{% cite "Cassette Beasts" %} shrine](/shrines/cassettebeasts) and my [{% cite "A Summer’s End — Hong Kong 1986" %} shrine](/shrines/asummersend) and [Steam review](../2023-10-30-support-for-my-steam-review-of-a-summers-end), so I am sad to see 123Guestbook go. 123Guestbook has been around since 2005, so its closure is a sad reminder that you cannot predict when your favourite website might be gone.

In light of 123Guestbook's closure, I have disabled the function to add new messages to Leilukin's Hub's previous guestbook at 123Guestbook, and archived the old guestbook at the [Internet Archive](https://web.archive.org/web/20240528231121/https%3A%2F%2Fleilukin.123guestbook.com%2F) and [archive.today](https://archive.ph/9mtpl).

123Guestbook shutting down means I need to find a replacement for Leilukin's Hub guestbook. This turned out to be a more difficult task than I expected, because I was struggling to find an alternative guestbook that satisfied my needs.

Initially, I looked into other guestbook services such as [SmartGB](https://www.smartgb.com/), [UltraGuest](https://www.ultraguest.com/) and the new [Atabook](https://atabook.org/). Dedicated guestbook services offer the ability to moderate messages and change the guestbook's style, but I ended up finding their style customisation options too limiting for my liking. It does not help that SmartGB and UltraGuest's guestbooks are not mobile-friendly either. This was also when I realised that 123Guestbook's guestbook is also not mobile-friendly.

In addition, I began to prefer to add features to my website by embedding it on my web page, so it looks like they are part of my website, instead of having to add an external link, or using the HTML `<iframe>` element, unless the website explicitly uses it for their embeds, such as YouTube. Therefore, another ideal feature for my guestbook is one that I can place into my web page's code.

Later, I discovered and tried out [HTML Comment Box](https://www.htmlcommentbox.com/), which can be used as a guestbook or a comment widget on your website, and even briefly added it to Leilukin's Hub as my guestbook on [14 May 2024](/changelogs/2024/#2024-05-14). HTML Comment Box widget suits my need for adding a guestbook by including it in my web page's code, so I also created [Leilukin's Hub's own guestbook page](/guestbook).

You can also [customise the look of HTML Comment Box with CSS](https://www.htmlcommentbox.com/css-guide.html), but (at least as far as I know) you cannot edit the widget's HTML. I found this an issue because HTML Comment Box's widget is not great in accessibility — the comment form does not have form labels (the HTML `<label>` element), and instead it relies on placeholder text to tell users the purpose of each input. [Using input placeholder text to replace form labels causes accessibility issues](https://www.boia.org/blog/is-placeholder-text-essential-for-form-accessibility).

When I tried to look for more guestbook alternatives, I suddenly remembered Firebase Realtime Database, and that I had learned to use it from [Scrimba](https://v2.scrimba.com/build-a-mobile-app-with-firebase-c0g) to create a JavaScript project with a database without SQL, and decided to code my own guestbook that uses Firebase Realtime Database to store messages. It gave me full control of the look of my guestbook, and more practice in coding things myself. I succeed in implementing it on [19 May 2024](/changelogs/2024/#2024-05-19). Unfortunately, I was not able to implement features to reply to messages and notify me when a new message was received.

I became increasingly frustrated with not being able to find a way to add a guestbook to my static website that also satisfies my needs, until I discovered the solution that leads to the current iteration of Leilukin's Hub guestbook — [Grounded Wren's guestbook code](https://groundedwren.neocities.org/pages/demo_controls/guestbookDemo).

Grounded Wren's guestbook code provides just about every guestbook feature I could ask for: message moderation, message replies, full control of the style, notifications for new messages, and making the guestbook actually part of my website. Granted, the guestbook still requires some external tools, namely Discord webhook and Google Sheets, to function, but that is the limitation of not being able to use PHP on static websites because the hosting service (including Neocities) does not support it.

Finally, I began to use Grounded Wren's guestbook code for the shiny new Leilukin's Hub's guestbook since [25 May 2024](/changelogs/2024/#2024-05-25)! I am relieved that my search for a guestbook solution for Leilukin's Hub to replace 123Guestbook was finally completed.

(That said, it is important to point out that unfortunately, [Neocities' stricter Content Security Policy since around the start of 2024](https://dabric.xyz/post/neocities-csp/) prevents widgets like HTML Comment Box and Grounded Wren's guestbook code from properly working on newly registered sites on the free tier. Leilukin's Hub's Neocities account was registered in 2022, so those widgets worked on this site despite being on the free tier, but it is important information for new Neocities users to know)
