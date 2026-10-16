# Migration TODO

What's still needed after moving the old Google Sites site to this one. Part 1 is the single list of facts marked `TODO: confirm`. Part 2 is files and links someone needs to supply.

When an item is resolved, make the change described and delete the item from this file.

## Part 1: TODO: confirm

Items marked **on site** show a yellow `TODO: confirm` marker on the live pages until they are fixed. The others are only listed here.

Items 1–6 (meeting day and time, venue, Home page wording, language, format and length, and children) were resolved on 2026-10-14: Fridays at 7:30 pm at Valley Christian Church, in Chinese and English, with fellowship and Bible study for 1.5 hours, plus a youth class and a class for young children. Item 7 (email updates) was also resolved: visitors email the group to join its mailing list. Item 9 (the sermons link) was resolved the same day: it now points to https://cn.rrvccc.org/证道. On 2026-10-16, item 12 was resolved: "Pastor Dude" is Pastor Dude Garrett of Temple Baptist Church in Fargo, named in Brother Shaowu Zhao's 2022 talk, so the 2018 table is correct. Item 15 was resolved the same day: 18 posts from 2016–2026 were added from forwarded emails and the CBSG活动归档 Google Drive folder. The numbers of the remaining items are unchanged.

| # | What | Where | How to fix |
|---|---|---|---|
| 8 | **Is the group's Google Calendar public?** If not, the calendar on the Events page shows nothing to visitors. | Events | In Google Calendar (signed in as `chinese.biblestudy.group@gmail.com`): Settings → the calendar → Access permissions → tick "Make available to public". |
| 10 | **Date and occasion of the group photo** | About (photo caption). The marker was removed on request; the caption shows no date for now. | Add the date to the caption in `src/pages/about.astro`. |
| 11 | **Two name spellings in the 2002 minutes:** "Shu-Fen Shih" vs "Shih-Fen Shih", and "Shen Yang" vs "Yang Shen". | About: the minutes section is hidden for now (`showMinutes` in `src/pages/about.astro`), so this marker doesn't show | Correct `src/data/minutes-2002.md` and update or remove the editor's note in `src/pages/about.astro`. |
| 13 | **"17:30 pm"** in the 2017 Christmas post: 5:30 pm, or a typo for 7:30 pm? | Post of 2017-12-20 | Edit `src/content/posts/2017-12-20-christmas-party-potluck.md` if needed. |
| 14 | **Links that couldn't be checked from the build environment:** the YouTube video in the 2012-03-08 post, and the Google Photos album in the 2017-11-13 post. Also the YouTube videos in the 2020-05-01, 2022-08-01, 2026-07-26 and 2026-09-17 posts, and the Google Drive players in the 2026-01-26 and 2026-05-08 posts. | Those posts | Open each link. If it's dead, remove it or replace it with an archived copy. |
| 20 | **Permission for the 2019 group photo** (Dr. Yeung's visit, 2019-11-01). About 15 children's faces are clear, and the photo was only shared privately. Parents were asked in the WeChat group. | Not on the site. The file is in the private `gf-cbsg/gfcbsg-inbox` repository, under `upload-to-drive/_暂不上传 Hold/`. | Once every parent agrees, add a post for 2019-11-01 with the photo. |
| 21 | **Permission to publish Brother Shaowu Zhao's full talk** on the history of the Red River Valley Chinese Christian Church. It mentions a late brother's illness. | Post of 2022-10-22 shows a summary and timeline only. The full text is in the private `gfcbsg-inbox` repository. | If he agrees, add the full text to `src/content/posts/2022-10-22-rrvccc-history.md`. |
| 22 | **Two scripture references:** Pastor Liang's 2026-05-09 audio file is named "尼21-16" (Nehemiah 2:1–16?); the post says only 尼希米记. Pastor Wei's 2022-10-09 manuscript is titled Colossians 1:15–23 in its file name but 1:12–23 in its heading; the post uses 1:12–23. | Posts of 2026-05-08 and 2022-10-09 | Correct the references in those posts. |
| 23 | **Dates and names that the sources don't state.** Dr. Kwok's 2016 talks were on the weekend of April 8–10 (post dated April 11, when he sent the files). His 2026 gospel series and the 2020 Ruth study are dated by the emails that shared them. The speaker in the first 2026-05-08 photo isn't named in its description. | Posts of 2016-04-11, 2026-01-26, 2020-05-01 and 2026-05-08 | Change the `date:` or the photo `alt:` text if anyone knows. |

## Part 2: Files and links to supply

| # | What | Original location | What's needed |
|---|---|---|---|
| 16 | **Picasa album "GFCBSG"**, linked from the group photo on the old Home page. Picasa has shut down; the link was removed and the photo kept. | Old Home page | Photos from the album, if anyone still has them. |
| 17 | **Picasa album** linked from the photo in "Dr. Kwok visited GF". Shut down; the link was removed and the photo kept. | Post of 2018-01-29 | Photos from the album, if anyone still has them. |
| 18 | **Speaker arrangement for the 2017 spring.** The post's content (probably an attachment) was lost when Google converted the old site. The post now shows a note saying so. | Post of 2017-01-18 | The original file, if anyone has it. |
| 19 | **Six Google Drive folders** that visitors can no longer open (sign-in required). Each post now shows a note saying the folder is unavailable. | See the list below | Re-share each folder as "Anyone with the link", or send the files to add to the site. |
| 24 | **Pastor Zhang Yuanlai's slides for 2025-10-17**, "如何跨越人生的风暴". The Google Drive link in the email is private. | Post of 2025-10-17 (title only) | Ask Pastor Zhang to share the file as "Anyone with the link", or upload a copy to CBSG活动归档, then add the link to the post. |
| 25 | **Files stored in Dr. Kwok's own Google Drive:** the 2022-04 slides folder and the three 2026 gospel videos. The links break if he deletes them or changes sharing. | Posts of 2022-04-01 and 2026-01-26 | In Google Drive, use "Make a copy" and move the copies into CBSG活动归档, then update the links. |
| 26 | **Pastor Lu's worship programme** (`20260720_主日礼拜程序.pages`). Google Drive can't display Apple Pages files, so it isn't linked. | CBSG活动归档 | Export it to PDF and upload it, if it should be on the site. |

Drive folders for item 19:

| Post | Folder |
|---|---|
| Guest Speaker and Potluck on Friday Night (2017-10-25) | https://drive.google.com/drive/folders/0B_yhzNexo7jWLW9JZ3ZHWlJrQWM |
| Some PPTs from Pastor Tsu-Kung Chuang (2017-11-05) | https://drive.google.com/drive/folders/0B_yhzNexo7jWM3VlLUo3aDF1SHM |
| Dr. Kwok visited GF (2018-01-29) | https://drive.google.com/drive/folders/0B_yhzNexo7jWYko3dUg5NThxclk |
| 布道分享 (2018-05-29) | https://drive.google.com/drive/folders/0B_yhzNexo7jWUG5oWmU1WEtZOUU |
| 杨医生布道 2018/7/6-8 (2018-07-09) | https://drive.google.com/drive/folders/0B_yhzNexo7jWMDliT1JkaUtOdUU |
| 杨医生布道 2018/8/24-25 (2018-08-27) | https://drive.google.com/drive/folders/0B_yhzNexo7jWRHRUREs1eWI0bWc |

All 8 images from the old site were recovered and are in `src/assets/legacy/`; none are missing.
