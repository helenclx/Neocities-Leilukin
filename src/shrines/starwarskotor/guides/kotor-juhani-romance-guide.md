---
articleTitle: "Juhani Romance Guide"
date: 2016-03-05
updated: 2024-04-22
desc: "Walkthrough of how to successfully romance Juhani in Star Wars: Knights of the Old Republic."
tags: kotor 1 guides
categories: ["star wars kotor"]
toc: true
---

[This guide is also available on [Google Docs](https://docs.google.com/document/d/1X_EUsoKVpaCfbbi-t5NNqMsoPeAoFsxvIRMcv5rHFBQ/edit)]{.center-text}

## Introduction

Since I could not find a solid and detailed guide for Juhani's romance anywhere, and many players (I used to be one of them as well) have troubles with triggering Juhani's final romance conversation, I have decided to write a guide myself. Even though there is very little content for Juhani's romance, if you want to experience the very first canon same-gender romance option in BioWare games first hand, this guide is for you.

For this guide, I have done a lot of research and investigation to find out the conditions required to trigger Juhani's conversations, including tons of web searching, using KotOR Tool to browse and examine the game files related to Juhani's conversations, as well as using KotOR SaveGame Editor (KSE) to compare my save files.

**NOTE:** Even if you use KotOR 1 Restoration (K1R) mod, the conditions to progress Juhani's romance remains the same as vanilla KotOR 1. However, I recommend using [KOTOR 1 Community Patch](https://deadlystream.com/files/file/1258-kotor-1-community-patch/) (K1CP) instead of K1R due to the fact K1CP fixes more bugs than K1R does, including bugs related to Juhani.

## Important Notes

First and foremost, since Juhani was written to be a lesbian, **your player character must be female if you want to romance Juhani**. The game activates Juhani's romance ONLY IF your player character is female.

As long as your player character is female, even if you romance Carth, Bastila (if you use mods that allow the female player character to romance Bastila, such as the [Biromantic Bastila mod](https://deadlystream.com/files/file/1548-jcs-romance-enhancement-biromantic-bastila-for-k1/)) or even both, you can still romance Juhani.

In order to advance your progress with Juhani's conversations, it is highly recommended to **talk to Juhani and go through all her available conversations every time you level up.** The progression with Juhani's conversations is tied in with the ability to level up, not just being at a certain level. Some Juhani's conversations will only be triggered after you gain 1 level after a previous conversation (see the Walkthrough section below for details). Given the limited level cap in KotOR 1 (the maximum level is 20), if you do not talk to Juhani often before you reach the level cap, it is very likely you will miss out on the chance to get her later conversations, including her final romance conversation.

**You also need to complete Juhani's personal quest, "Threat From Xor", to make her final romance conversation available.**

**You need to be nice to Juhani during your conversations with her**, because mean dialogue choices will set the global boolean `T_JUHANIROM` to 0, ending the romance, and apparently it is impossible to restart the romance afterwards.

Before you start a new KotOR playthrough, I highly recommend you to download and install the [KOTOR 1 Community Patch](https://deadlystream.com/files/file/1258-kotor-1-community-patch/), because the mod fixes many bugs with KotOR, including bugs that may block you from progressing Juhani's quest and conversations.

**(WARNING: this guide contains spoilers for both Juhani's personal story and KotOR's main plot)**

## Walkthrough

There are two paths in Juhani's conversations: History and Personal. The History path explores Juhani's past and will lead to Juhani's personal quest "Threat from Xor", while the Personal path explores Juhani's relationship with the player character and will lead to Juhani's love confession if her romance is active.

You can check your progress with Juhani's conversations by using the [KotOR SaveGame Editor](http://deadlystream.com/files/file/503-kotor-savegame-editor/) (KSE). Once you launch KSE, and it successfully loads your KotOR save files, expand a save file, and look for Globals > Numerics, `G_JUHANIH_STATE` refers to the History path, while `G_JUHANIP_STATE` refers to the Personal path. The walkthrough below contains details on how to trigger all the conversations required to make the final romance conversation available, the global values in KSE, and links to YouTube videos for these conversations.

In addition, you can check if Juhani's romance is still active by using KSE: look for Globals > Booleans, and make sure `T_JUHANIROM` is set to 1.

### History Conversation Path

#### History #1

This conversation is available once Juhani joins your party, which happens after you collect your first Star Map on Dantooine, and you're tasked by the Jedi Council to search for the Star Forge. You can ask Juhani how did she become a Jedi. After this conversation, the global value of `G_JUHANIH_STATE` will be set to 1.

https://youtu.be/cmY7dQJH93Y

#### History #2

Available when you gain 1 level after History #1. Juhani talks about meeting the Jedi back in her homeworld. After this conversation, the global value of `G_JUHANIH_STATE` will be set to 2.

https://youtu.be/4itTaqLKQPQ

#### History #3

Available when you gain 1 level after History #2. Juhani reveals that she was from Taris, and she expresses anger over the destruction of Taris. After this conversation, the global value of `G_JUHANIH_STATE` will be set to 3.

https://youtu.be/Foj1nmouoIU

{% container "div", "text-box" %}
**BUG WARNING:** There is a bug that may block you from progressing Juhani's Personal Conversation path after you complete History #3, and thus preventing you from triggering Juhani's final romance conversation. See the "Personal Conversation Path" section below for more details about this bug. This bug is fixed by the [KOTOR 1 Community Patch](https://deadlystream.com/files/file/1258-kotor-1-community-patch/), which is a major reason I highly recommend this mod.

If you are unable to install mods for some reason, I would suggest that once you complete History #3, stop leveling up your character. Once you get your second Star Map (the Dantooine Star Map counts as the first Star Map), complete Personal #3 _AND_ Personal #4 at once. After all that is done, you can now level up to trigger History #4.
{% endcontainer %}

#### History #4

Available when you gain 1 level after History #3. Juhani apologizes for her outburst over Taris' destruction, and recalls her life on Taris. After this conversation, the global value of `G_JUHANIH_STATE` will be set to 4.

https://youtu.be/x8Q5bXWXwKU

#### History #5

Available when you gain 1 level after History #4. Juhani talks about how her parents and her ended up on Taris. After this conversation, the global value of `G_JUHANIH_STATE` will be set to 5.

https://youtu.be/ZFzIbtScsus

#### History #6

Available when you gain 1 level after History #5. Juhani talks about her being sold into slavery after her parents died. After this conversation, the global value of `G_JUHANIH_STATE` will be set to 6. This conversation will also make Juhani's personal quest, "Threat From Xor" available.

https://youtu.be/2GJW_mBVADs

#### "Threat From Xor" quest

This quest will be available after you have completed History #6, where Juhani talks about her being sold into slavery. Have Juhani in your party and walk around the spaceport on Tatooine, Kashyyyk, Manaan or Korriban. A character named Xor will approach Juhani and reveal that he was the slaver who attempted to buy Juhani on Taris before the latter was freed by the Jedi. Xor leaves, but he threatens to come back later.

The second encounter with Xor happens when you come back just outside the Ebon Hawk by using the Rapid Transit system. Xor will ambush you and Juhani. Once you defeat Xor, you can either let him die or encourage Juhani to kill him.

After you have dealt with Xor, if you have completed Personal #6 (detailed below), the global value of `G_JUHANIP_STATE` will be set to 10.

https://youtu.be/Px1JTr7vf9Q

{% container "div", "text-box" %}
**BUG WARNING:** There is an infamous bug with the Xor quest that once you trigger the quest, even after completing it, you will not be able to encounter any other messengers for your other party members' personal quests, and for Mika Dorin's premium shop on Korriban. The fix for this bug is included in the [KOTOR 1 Community Patch](https://deadlystream.com/files/file/1258-kotor-1-community-patch/) and the KotOR 1 Restoration (K1R) mod.
{% endcontainer %}

### Personal Conversation Path

#### Personal #1

Available once Juhani joins your party. She apologizes again for attacking you back on Dantooine. Once you begin this conversation, if — and ONLY IF — your player character is female, the global boolean `T_JUHANIROM` will be set to 1, which means Juhani's romance will become active. After this conversation, the global value of `G_JUHANIP_STATE` will be set to 1.

https://youtu.be/jzqfXoOvGrw

#### Personal #2

Available after completing Personal #1. Juhani talks about Quatra and her fall to the dark side. After this conversation, the global value of `G_JUHANIP_STATE` will be set to 2.

https://youtu.be/minhfrQhCQI

#### Personal #3

Available after completing Personal #2 and getting 2 Star Maps (including the Dantooine one). Juhani expresses gratitude to you for accepting her throughout your journey. After this conversation, the global value of `G_JUHANIP_STATE` will be set to 3.

https://youtu.be/y_rM2l83HDo

#### Personal #4

Available once you complete History #3 _and_ Personal #3. Juhani describes the life of being an alien on Taris is like hell. After this conversation, the global value of `G_JUHANIP_STATE` will be set to 4.

https://youtu.be/BOq0fehoYkg

{% container "div", "text-box" %}
**BUG WARNING:** Personal #4 is by far the trickiest to trigger of all Juhani's conversations. There is a bug that once you complete History #3, if you level up even just once, History #4 will override Personal #4, making Personal #4 unavailable, and you will be unable to get the later conversations in the Personal Conversation path (except Personal #7 below), including the final romance conversation. In fact, I found that missing out Personal #4 was _the_ reason I was unable to get Juhani's final romance conversation in my old playthrough. This bug is fixed by the [KOTOR 1 Community Patch](https://deadlystream.com/files/file/1258-kotor-1-community-patch/), which is a major reason I highly recommend this mod.

If you are unable to install mods for some reason, I would suggest that once you complete History #3, stop leveling up your character. Once you get your second Star Map (the Dantooine Star Map counts as the first Star Map), complete Personal #3, then _immediately_ talk to Juhani again to check if Personal #4 is available. After you successfully trigger Personal #4 and complete the conversation, you can now level up your character to proceed to History #4 and beyond.
{% endcontainer %}

#### Personal #5

Available when you gain 1 level after Personal #4. Juhani asks about your past. After this conversation, the global value of `G_JUHANIP_STATE` will be set to 6.

https://youtu.be/6tFlMgigkc0

#### Personal #6

Available after completing Personal #5 and getting 3 Star Maps (including the Dantooine one). Juhani comments on your alignment (light side, dark side or neutral). After this conversation, if you have completed the "Threat From Xor" quest, the global value of `G_JUHANIP_STATE` will be set to 10; if you have not, the global value of `G_JUHANIP_STATE` will be set to 7.

https://youtu.be/O2t9qSNGzgQ

#### Personal #7

Available after completing the Leviathan level. Juhani comments on the reveal that the player character is Revan. This conversation is not required to trigger Juhani's final romance conversation, but I include it here because not only it is classified as part of the Personal conversation path by the game files, but also it is a very important element in Juhani and Revan's relationship.

https://youtu.be/vklWpPBF7mA

#### Personal #8

The final conversation, which is also Juhani's love confession, in order to make this final romance conversation available, you must meet ALL the following conditions:

1. You have completed Personal #6 _and_ the "Threat From Xor" quest. If you use KotOR SaveGame Editor to check your progress, **the global value of `G_JUHANIP_STATE` must be 10.**
2. During the confrontation with Bastila at the Rakatan temple summit on the Unknown World, **you must reject Bastila's suggestion to reclaim the title of Dark Lord of the Sith and rule the galaxy**, which gives you the light side ending of the game. If you choose to agree with Bastila's suggestion, you will be forced to kill Juhani (and Jolee), which ends the romance, and you will get the dark side ending of the game.

Provided the above conditions have been met, the final romance conversation occurs after Bastila leaves the Rakatan temple summit. When you talk to Juhani, she will confess her feelings to you. If you have installed Kexikus' Juhani Romance Enhancement mod (see the Mod Recommendation section below for details), the conversation will be triggered automatically when you are leaving the temple summit, so you do not need to initiate the conversation yourself.

YouTube video for vanilla version:

https://youtu.be/WOcXeIqpBiQ

YouTube video for Juhani Romance Enhancement mod version:

https://youtu.be/oFQDmmRUx4E

## Mod Recommendations

These mods are not required to complete Juhani's romance, but they add or enhance Juhani's content.

* [Juhani Romance Enhancement](http://deadlystream.com/files/file/772-juhani-romance-enhancement/) by Kexikus: Improves the final romance conversation with Juhani, including triggering the conversation automatically when you are about to leave the temple summit, instead of having to talk to Juhani yourself to initiate the conversation, provided you have met the conditions to make this conversation available (detailed in the Walkthrough section above), as well as adding a kiss between Juhani and the female player character.
* [KOTOR 1 Community Patch](https://deadlystream.com/files/file/1258-kotor-1-community-patch/): Even though this bug fix mod is not specifically about Juhani, it fixes many bugs and issues related to Juhani's content, including:
    * Juhani wouldn't spawn in the post-Leviathan scene on the Ebon Hawk
    * If doing certain Juhani's conversations in the wrong order, it was possible to block any further progress in Juhani's Personal Conversation path, and prevent you from accessing Juhani's final romance conversation
    * No other messengers could appear once the "Threat From Xor" quest is started
    * The second Xor encounter was impossible to start if you first meet him and his goons without Juhani in your party
    * The second Xor encounter is unavailable on Tatooine
    * Xor is a Twi'lek, despite him being a human in the Xbox version of KotOR, and him openly making anti-alien comments (NOTE: This fix was originally done by my [Human Xor Restoration](http://deadlystream.com/files/file/1091-human-xor-restoration/) mod. I have given permission to include my mod in this Community Patch)
    * Asking Juhani about the planet you were currently on was impossible due to a faulty global setting
* [Juhani Dialogue Restoration](https://deadlystream.com/files/file/2173-juhani-dialogue-restoration/) by Leilukin: My mod. Restores Juhani's conversations with the player that are unused or easy to miss in vanilla KotOR, including:
    * Asking Juhani about the planet you are on
    * Asking Juhani about why she is hostile towards Canderous
    * Juhani talking about the evils on Korriban
* [Human Xor Unique Look](https://deadlystream.com/files/file/2147-human-xor-unique-look/) by Leilukin: My mod. Changes Xor's species from a Twi'lek to a human to fit his anti-alien nature and dialogue, with a unique appearance different from other human NPCs. This mod is listed on this guide because Xor is tied to Juhani's personal quest.
* [Party on the Leviathan!](https://deadlystream.com/files/file/567-party-on-the-leviathan/) by Fair Strides: Restores Juhani's conversation, including romance conversation with a female player character, on the Leviathan, by spawning the rest of the Ebon Hawk crew on the Leviathan after you are rescued.

{.item-list}

**NOTE: I DO NOT support any mods that make Juhani a romance option for male characters under any circumstances. [Read this article on why I firmly believe Juhani's romance should remain exclusive to female characters.](/shrines/starwarskotor/articles/keep-juhani-a-lesbian) In addition, I DO NOT support any mods that make Juhani look like a human.**