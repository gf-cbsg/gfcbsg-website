# Migration TODO

What's still needed after moving the old Google Sites site to this one. Part 1 is the single list of facts marked `TODO: confirm`. Part 2 is files and links someone needs to supply.

When an item is resolved, make the change described and delete the item from this file.

## Part 1: TODO: confirm

Items marked **on site** show a yellow `TODO: confirm` marker on the live pages until they are fixed. The others are only listed here.

| # | What | Where | How to fix |
|---|---|---|---|
| 1 | **Meeting day and time.** The old site said Fridays, 7:30 pm. The group says there are no meetings at present. | **On site:** Home (meeting card), Contact, footer on every page | Fill in `day` and `time` in `src/config/site.ts` (see the README). |
| 2 | **Meeting venue and address.** The old site said Faith Evangelical Free Church, 1400 24th Ave S, Grand Forks, ND 58201. | **On site:** Home, Contact (address and map) | Fill in `venue` in `src/config/site.ts`. The map, the map link and the search-engine data (JSON-LD `location`) then appear automatically. |
| 3 | **What the Home page should lead with** while there are no regular meetings. Today the meeting card shows TODO markers. Once items 1 and 2 are filled in, its heading becomes "Join us this Friday, 7:30 pm". | Home | Fill in items 1–2, or ask for different hero wording. |
| 4 | **Language(s) used at meetings** (Mandarin? Cantonese? English?) | **On site:** Home, "What to expect" | Edit the "Language" card in `src/pages/index.astro`. |
| 5 | **Meeting format and length** | **On site:** Home, "What to expect" | Edit the "Format and length" card in `src/pages/index.astro`. |
| 6 | **Bringing children:** are children welcome, and is anything provided for them? | **On site:** Home, "What to expect" | Edit the "Bringing children" card in `src/pages/index.astro`. |
| 7 | **How visitors can get updates by email** | **On site:** Events | Edit the "Getting updates by email" section in `src/pages/events.astro`. |
| 8 | **Is the group's Google Calendar public?** If not, the calendar on the Events page shows nothing to visitors. | Events | In Google Calendar (signed in as `chinese.biblestudy.group@gmail.com`): Settings → the calendar → Access permissions → tick "Make available to public". |
| 9 | **Is the sermons link still valid?** `http://cn.rrvccc.org/p/blog-page_77.html` was last captured by the Internet Archive in 2019. The church's main site is `https://www.rrvccc.org/`. | Sermons; post of 2017-10-30 | If the link is dead, replace `rrvcccUrl` in `src/pages/sermons.astro` (and the link in `src/content/posts/2017-10-30-rrvccc-sermons.md`). |
| 10 | **Date and occasion of the group photo** | **On site:** About (photo caption) | Edit the caption in `src/pages/about.astro`. |
| 11 | **Two name spellings in the 2002 minutes:** "Shu-Fen Shih" vs "Shih-Fen Shih", and "Shen Yang" vs "Yang Shen". | **On site:** About (editor's note under the minutes) | Correct `src/data/minutes-2002.md` and update or remove the editor's note in `src/pages/about.astro`. |
| 12 | **"Pastor Dude"** appears twice in the 2018 speaker table. Is that the right name? | Post of 2017-12-27 | Edit `src/content/posts/2017-12-27-guest-speakers-2018.md` if needed. |
| 13 | **"17:30 pm"** in the 2017 Christmas post: 5:30 pm, or a typo for 7:30 pm? | Post of 2017-12-20 | Edit `src/content/posts/2017-12-20-christmas-party-potluck.md` if needed. |
| 14 | **Links that couldn't be checked from the build environment:** the YouTube video in the 2012-03-08 post, and the Google Photos album in the 2017-11-13 post. | Those posts | Open each link. If it's dead, remove it or replace it with an archived copy. |

## Part 2: Files and links to supply

| # | What | Original location | What's needed |
|---|---|---|---|
| 15 | **Recent years' events.** The group's newer event records are in Google Drive and haven't been provided. | Google Drive (not shared) | Share the folder, or add them as new posts (see the README). |
| 16 | **Picasa album "GFCBSG"**, linked from the group photo on the old Home page. Picasa has shut down; the link was removed and the photo kept. | Old Home page | Photos from the album, if anyone still has them. |
| 17 | **Picasa album** linked from the photo in "Dr. Kwok visited GF". Shut down; the link was removed and the photo kept. | Post of 2018-01-29 | Photos from the album, if anyone still has them. |
| 18 | **Speaker arrangement for the 2017 spring.** The post's content (probably an attachment) was lost when Google converted the old site. The post now shows a note saying so. | Post of 2017-01-18 | The original file, if anyone has it. |
| 19 | **Six Google Drive folders** that visitors can no longer open (sign-in required). Each post now shows a note saying the folder is unavailable. | See the list below | Re-share each folder as "Anyone with the link", or send the files to add to the site. |

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
