# Content inventory: www.gfcbsg.com (checkpoint 1)

This lists every page on the current Google Sites site, what is on it, and what the rebuild will do with it. Nothing has been migrated yet. Approve or correct this list before Phase 2 starts.

- **Fetched:** 2026-10-13, from `https://www.gfcbsg.com` (the site is still live; all 28 pages returned HTTP 200).
- **Method:** HTML downloaded with `curl`, text extracted locally. Images were saved through a headless browser, because direct requests to Google's image server are refused (HTTP 403).
- **Hosting:** the site is a *new* Google Sites site (`sites.google.com/view/gfcbsg`) mapped to `www.gfcbsg.com`. It was converted from a classic Google Sites blog, which is why each post's body begins with a `Post date:` line.

## Decisions on record

| Item | Decision |
|---|---|
| Repo visibility | Public. Nothing personal goes into git history. |
| Script for site UI and new text | Simplified Chinese (`zh-Hans`). Migrated posts keep their original script. The brief's Traditional nav labels become 关于我们, 活动, 证道分享, 历年活动, 联络我们. |
| Meeting details current? | **No.** The group says there are no meetings at present. Meeting day, time and venue show `TODO: confirm` everywhere. |
| Personal contacts | None. Only `chinese.biblestudy.group@gmail.com` and the church address are published, plus a commented-out slot for named contacts. |
| Recent events on Google Drive | Not provided. Listed under `TODO: confirm`. |

## Summary

- **28 pages:** 5 top-level pages (Home, History, Contact Us, Calendar, 证道分享) and 23 posts.
- **Post dates** run from 2012-01-12 to 2018-08-27: 7 in 2012, 10 in 2017, 6 in 2018. There is nothing between April 2012 and January 2017.
- **Language:** 12 posts are English, 5 are Chinese, and 6 mix English with Chinese. Most of the Chinese is Simplified; 3 posts (#11, #15, #21) use Traditional characters in whole or in part.
- **Images:** 8 photos, all recovered (see [Images](#images)). All show people; 3 are group photos with many children.
- **Embeds:**
  - 6 Google Drive folders. All of them now refuse anonymous visitors (HTTP 401), so they are already broken for the public on the current site.
  - 2 Drive files, both still public.
  - 2 links to the shut-down Picasa service.
  - 1 Google Photos album (not checked; host blocked here).
  - 2 Google Maps embeds and 1 Google Calendar embed.
- **Content volume is small:** about 1,850 English words and 1,150 Chinese characters in total. Over half of the English is the 2002 meeting minutes, and most of the Chinese is three speaker biographies.

## Proposed URL scheme

| Section | New URL |
|---|---|
| Home | `/` |
| About / History · 关于我们 | `/about/` |
| Events · 活动 | `/events/` |
| Sermons · 证道分享 | `/sermons/` |
| Archive · 历年活动 | `/archive/`, with one static page per year: `/archive/2012/`, `/archive/2017/`, `/archive/2018/` (no JavaScript needed) |
| A post | `/posts/<YYYY-MM-DD-slug>/` |
| Contact · 联络我们 | `/contact/` |

Post slugs start with the original post date so that similar titles cannot collide (for example, the two "Potluck with Dr. Kwok" posts from 2012 and 2017).

## Top-level pages

| Legacy URL | Title | Lang | Size | Media | Plan | New URL |
|---|---|---|---|---|---|---|
| `/` and `/home` | Grand Forks Chinese Bible Study Group | en, plus 大福克斯中文查經班 (Traditional) | 2 sentences + list of 23 posts | 1 group photo, linked to a Picasa album | Rebuild as the new Home page. Keep the welcome line's meaning. The meeting line ("Join us every Friday night 7:30 pm at Faith Evangelical Free Church!") becomes `TODO: confirm`. Remove the Picasa link. Move the group photo to the About page, since the brief asks for a typographic hero. | `/` |
| `/history` | History | en | 969 words | none | Becomes the About page: a short introduction (new text, both languages), a readable founding story (new text, both languages, using only facts in the minutes and the brief), then the original minutes kept verbatim as an archived document. Name fixes are listed under [The 2002 minutes](#the-2002-minutes). | `/about/` |
| `/contact-us` | Contact Us | en | 56 words | Google Maps embed | Keep the group email. **Remove the two named personal contacts and their personal emails and mobile numbers.** Meeting time and venue become `TODO: confirm`. The map embed is shown only once the venue is confirmed. | `/contact/` |
| `/calendar` | Calendar | n/a | embed only | Google Calendar (agenda view; group calendar plus a US holidays overlay) | Responsive embed of `chinese.biblestudy.group@gmail.com` in agenda view. Propose dropping the US holidays overlay. Add a note on getting updates by email (mechanism is `TODO: confirm`). | `/events/` |
| `/share` | 证道分享 | zh-Hans | 24 characters | none | Link to the Red River Valley Chinese Christian Church sermon page, as the brief asks, plus links to the archived sermon posts. **The link may be stale; see `TODO: confirm` item 4.** | `/sermons/` |

## Posts

Size counts body text only: **w** means English words and **c** means Chinese characters.

| # | Legacy URL | Original title | Post date | Lang | Size | Media / links | New URL |
|---|---|---|---|---|---|---|---|
| 1 | `/home/newwebsite` | New Website | 2012-01-12 | en | 8 w | none | `/posts/2012-01-12-new-website/` |
| 2 | `/home/chinesenewyearsong` | Chinese New Year Song | 2012-01-29 | en | 17 w | none | `/posts/2012-01-29-chinese-new-year-song/` |
| 3 | `/home/brotherhanyingstestimony` | Brother Hanying's Testimony | 2012-02-07 | en | 30 w | none | `/posts/2012-02-07-brother-hanying-testimony/` |
| 4 | `/home/corrietenboom` | Corrie Ten Boom | 2012-03-08 | en | 60 w | 4 outside links | `/posts/2012-03-08-corrie-ten-boom/` |
| 5 | `/home/potluckwithpastorko` | Potluck with Pastor Ko | 2012-03-21 | en + zh-Hans | 80 w + 217 c | none | `/posts/2012-03-21-potluck-with-pastor-ko/` |
| 6 | `/home/blogpostbyalcollver` | Blog Post by Al Collver | 2012-03-30 | en | 24 w | 1 outside link | `/posts/2012-03-30-blog-post-by-al-collver/` |
| 7 | `/home/potluckwithdrkwok` | Potluck with Dr. Kwok (04-06-2012) | 2012-04-04 | en + zh-Hans | 81 w + 377 c | 1 outside link (in bio) | `/posts/2012-04-04-potluck-with-dr-kwok/` |
| 8 | `/home/page` | 春节联欢包饺子活动通知 | 2017-01-17 | zh-Hans | 51 c | none | `/posts/2017-01-17-spring-festival-dumplings/` |
| 9 | `/home/speakerarrangementforthe2017spring` | Speaker arrangement for the 2017 spring | 2017-01-18 | en | **0 (empty)** | none | `/posts/2017-01-18-speaker-arrangement-spring-2017/` |
| 10 | `/home/potluckonfridayjan20` | Potluck on Friday (Jan.20) | 2017-01-19 | en | 33 w | none | `/posts/2017-01-19-potluck-with-dr-kwok/` |
| 11 | `/home/guestspeakerandpotluckonfridaynight10272017` | Guest Speaker and Potluck on Friday Night (10/27/2017) | 2017-10-25 | en + zh-Hant | 105 w + 368 c | Maps embed, Drive folder (private) | `/posts/2017-10-25-pastor-chuang-potluck/` |
| 12 | `/home/cbsgphoto` | Dr. Clement Yeung visited GFCBSG | 2017-10-25 | en | 0 w | 1 photo | `/posts/2017-10-25-dr-clement-yeung-visit/` |
| 13 | `/home/page-1` | 红河谷华人基督教会分享 | 2017-10-30 | zh-Hans | 13 c | 1 link (RRVCCC sermons) | `/posts/2017-10-30-rrvccc-sermons/` |
| 14 | `/home/somepptsfrompastortsu-kungchuang` | Some PPTs from Pastor Tsu-Kung Chuang | 2017-11-05 | en | 28 w | 4 photos, Drive folder (private) | `/posts/2017-11-05-pastor-chuang-slides/` |
| 15 | `/home/page-2` | 基督之家第五短宣隊来访 | 2017-11-13 | zh, mixed script (隊 Traditional, 来 Simplified) | 11 c | 1 photo, Google Photos album link | `/posts/2017-11-13-short-term-mission-team/` |
| 16 | `/home/specialchristmascelebratepartyandpotluck` | Special Christmas Celebrate Party and Potluck | 2017-12-20 | en | 56 w | none | `/posts/2017-12-20-christmas-party-potluck/` |
| 17 | `/home/2018guestspeakers` | 2018 Guest Speakers | 2017-12-27 | en + zh-Hans | 11 w + table (12 rows) | embedded HTML table | `/posts/2017-12-27-guest-speakers-2018/` |
| 18 | `/home/speakerseminarandpotluckdrchuckkwok01192018` | Speaker seminar and Potluck/Dr. Chuck Kwok (01/19/2018) | 2018-01-16 | en + zh-Hans | 83 w + 9 c | none | `/posts/2018-01-16-dr-chuck-kwok-seminar/` |
| 19 | `/home/drkwokvisitedgf` | Dr. Kwok visited GF | 2018-01-29 | en | 6 w | 1 photo (linked to Picasa), Drive folder (private) | `/posts/2018-01-29-dr-kwok-visit/` |
| 20 | `/home/dryeungsrecentsermononholyspirit` | Dr. Yeung's recent Sermon on Holy Spirit | 2018-03-23 | en | link only | Drive file (public video, `WCAC 2018-03-11.flv`) | `/posts/2018-03-23-dr-yeung-holy-spirit/` |
| 21 | `/home/page-3` | 布道分享 | 2018-05-29 | zh-Hant (袁奇恩牧師) | 9 c | Drive folder (private) | `/posts/2018-05-29-pastor-yuan-sermons/` |
| 22 | `/home/page-4` | 杨医生布道 2018/7/6-8 | 2018-07-09 | zh-Hans | 7 c | Drive folder (private) | `/posts/2018-07-09-dr-yeung-july-2018/` |
| 23 | `/home/page-5` | 杨医生布道 2018/8/24-25 | 2018-08-27 | zh-Hans title, en body | 5 w | Drive file (public MP3, `Dr.Yeung_2018_08_24.MP3`), Drive folder (private) | `/posts/2018-08-27-dr-yeung-august-2018/` |

Every post will become `src/content/posts/<slug>.md` with front matter `title`, `date`, `lang` and `legacy_url`. Where a post mixes languages, `lang` is the language of the title, and blocks in the other language get their own `lang` attribute.

### Cleanup plan per post

Formatting fixes apply everywhere and need no approval: drop the `Post date:` line (it moves to front matter), turn Google redirect wrappers (`google.com/url?q=…`) into direct links, rebuild agendas as lists, and rebuild the 2018 speaker table as a Markdown table. Wording changes beyond formatting are proposed under [Proposed text corrections](#proposed-text-corrections) and wait for your approval.

| # | Cleanup |
|---|---|
| 1 | Keep as is. |
| 2 | Keep as is. The page contains no lyrics, only one sentence, so there is no third-party text to remove. |
| 3 | Keep as is. "Wittenberg Chapel" is a historical venue and stays. |
| 4 | Keep the group's text. Keep the YouTube, CBN and tenboom.com links if they still resolve, otherwise link to an archived copy. Remove the Yahoo Taiwan blog link: that service shut down and the page was never archived. Possible name error: see the corrections list. |
| 5 | Keep the announcement and agenda. The 高德荣牧师 biography is likely third-party text (see [Third-party material](#third-party-material)); replace it with a one-line description. |
| 6 | Keep the text. The linked blog was last archived in 2017 and the site appears to be offline, so link to the Wayback Machine copy instead. |
| 7 | Keep the announcement, agenda and talk title (经济危机,就业前景,人生反思). The talk abstract and 郭振游 biography are likely third-party (see below). The biography also names the speaker's wife and son. Replace both with a one-line description. |
| 8 | Keep the text, in Simplified. One obvious typo (中午 → 中文) is proposed under corrections. |
| 9 | **The body is empty.** Its content was probably an attachment lost when Google converted the site. Proposal: a stub post that says the original attachment is no longer available, plus an item in `MIGRATION_TODO.md`. Alternative: no post, with the legacy URL redirecting to `/archive/2017/`. |
| 10 | Keep as is. |
| 11 | Keep the announcement and the two session agendas (time typos proposed under corrections). Replace the embedded map with the address text plus a map link. The 莊祖鯤 biography is likely third-party: replace it with a one-line description. The Drive folder is private: remove the embed and add an item to `MIGRATION_TODO.md`. |
| 12 | Image-only post. Keep the photo and add alt text and a caption taken from the title. |
| 13 | Keep it, but it duplicates the Sermons page link. Keep the post for history and point it to `/sermons/`. |
| 14 | Keep the group's text and the 4 photos. The slides are other people's material and the folder is private, so there is nothing to republish. Keep the title and description, and link the folder only if its owner re-shares it publicly. |
| 15 | Keep the photo. Keep the Google Photos album link if it still resolves (not checked; host blocked here). |
| 16 | Keep as is. "17:30 pm" is ambiguous and is flagged, not corrected. |
| 17 | Rebuild the table. **Propose dropping the "Host family" column**: it names private households and isn't useful now. "Pastor Dude" appears twice and is flagged. |
| 18 | Keep it. Fix the duplicated phrase and spelling (proposed under corrections). |
| 19 | Keep the photo and remove the Picasa link around it. The Drive folder is private: same handling as #11. |
| 20 | Keep the link to the public Drive video. Add a one-line description from the title. |
| 21–22 | Keep the text. Drive folders are private: same handling as #11. |
| 23 | Keep the text and the public MP3 link. The Drive folder is private: same handling as #11. |

## Images

All 8 can be downloaded, but only through a browser session; plain requests return HTTP 403. They will be saved in `src/assets/legacy/` under the names below. Alt text will be English with a Chinese caption where the post is Chinese. Order matches the order on the original page.

| Source post | Size | Proposed filename | Draft alt text |
|---|---|---|---|
| Home | 400×268 | `gfcbsg-group-photo-living-room.jpg` | Group photo of about 45 adults and children gathered in a living room. (Date and event unknown; caption is `TODO: confirm`.) |
| #12 Dr. Clement Yeung visited | 1280×960 | `2017-10-dr-clement-yeung-visit-group.jpg` | Group photo of about 50 adults and children in a church fellowship hall, taken during Dr. Clement Yeung's visit. |
| #14 Pastor Chuang (1 of 4) | 1280×960 | `2017-pastor-chuang-visit-group.jpg` | Group photo of about 35 adults and children in a church lobby during Pastor Tsu-Kung Chuang's visit. |
| #14 Pastor Chuang (2 of 4) | 1080×1440 | `2017-pastor-chuang-small-group.jpg` | Pastor Tsu-Kung Chuang talking with a small group seated at round tables. |
| #14 Pastor Chuang (3 of 4) | 1080×1440 | `2017-pastor-chuang-speaking.jpg` | Pastor Tsu-Kung Chuang speaking beside a projected slide in Chinese. |
| #14 Pastor Chuang (4 of 4) | 1280×960 | `2017-pastor-chuang-dream-butterfly-talk.jpg` | Pastor Tsu-Kung Chuang presenting; the slide reads 夢蝶—生命的蛻變, 莊祖鯤 牧師. |
| #15 Short-term mission team | 1280×960 | `2017-11-short-term-mission-team.jpg` | Five people at microphones and lecterns in front of a screen showing 我知誰掌管明天, with attendees at round tables. |
| #19 Dr. Kwok visited | 400×300 | `2018-01-dr-kwok-seminar.jpg` | A speaker presenting to an audience at round tables; the slide reads 平衡美满的人生. |

**Privacy note:** all 8 photos show identifiable people, and 3 of them (Home, #12, and the first #14 photo) are group photos with many children. They are already public on the current site. Republishing them in a public repo makes them permanent in git history. Please confirm you want them kept (decision C below).

## Embeds and links

| What | Where | Status from this environment | Plan |
|---|---|---|---|
| Picasa album (Home photo link) | Home | Picasa shut down in 2016 | Remove the link; item in `MIGRATION_TODO.md` |
| Picasa album (photo link) | #19 | Shut down | Remove the link; item in `MIGRATION_TODO.md` |
| 6 Google Drive folder embeds | #11, #14, #19, #21, #22, #23 | **HTTP 401 for anonymous visitors** (old-style `0B…` folder IDs; they need re-sharing or a resource key) | Remove the embeds; list each in `MIGRATION_TODO.md` so the owner can re-share or supply files |
| Drive file `Dr.Yeung_2018_08_24.MP3` | #23 | Public | Keep the link |
| Drive file `WCAC 2018-03-11.flv` | #20 | Public | Keep the link |
| Google Photos album | #15 | Not checked (host blocked here) | Check in QA |
| Google Maps embeds | Contact, #11 | n/a | Contact: new embed once the venue is confirmed. #11: address text plus map link. |
| Google Calendar embed | Calendar | Not checked (host blocked here) | New responsive agenda embed. Calendar must be public: `TODO: confirm` |
| `cn.rrvccc.org/p/blog-page_77.html` | /share, #13 | Not checked (host blocked). **Last Wayback capture: 2019.** The church's main site (`www.rrvccc.org`) was captured in 2025. | Use it as instructed, but flagged: `TODO: confirm` |
| wmltblog.org post | #6 | Last archived 2017; site appears offline | Wayback link |
| youtube.com video | #4 | Not checked (host blocked) | Check in QA |
| cbn.com transcript | #4 | Last archived 2013 | Wayback link if dead |
| tenboom.com/zh/ | #4 | Last archived 2016 | Wayback link if dead |
| tw.myblog.yahoo.com post | #4 | Service closed; never archived | Remove |
| cccchurch.us | #7 (inside bio) | Live as www.cccchurch.us (archived 2025) | Goes away if the bio becomes one line |

## Third-party material

Per the brief, third-party text isn't republished in full: each case keeps a title, a one-line description and a source link where one exists. Proposed handling:

| Post | Material | Proposed handling |
|---|---|---|
| #11 | Three-paragraph Traditional Chinese biography of 莊祖鯤 (368 characters), very likely copied from his ministry's materials | One line describing him, taken from the bio (Pastor of Boston's 真理堂 at the time; founder of 真光協會). Source link `TODO: confirm` |
| #7 | Talk abstract plus two-paragraph biography of 郭振游 (377 characters); names his wife and son | Keep the talk title; one-line description (Professor of International Business, University of South Carolina, per the bio) |
| #5 | Biography of 高德荣牧师 (217 characters) | One-line description (Senior Pastor, Columbia Chinese church in Missouri; director of 基督工人中心, per the bio) |
| #14, #19 | Other people's slides, in private Drive folders | Title plus description only; link if re-shared publicly |
| #20–#23 | Other people's sermon recordings and slides | Links only (already the case) |
| #4 | Third-party video and transcript | Links only (already the case) |

If you consider the speaker biographies fair to keep (speakers usually supply them for event publicity), say so and they'll be migrated in full (decision A).

## Personal data found

| Where | What | Handling |
|---|---|---|
| `/contact-us` | Two named individuals, each with a personal email and a mobile number | **Removed.** Not reproduced anywhere in this repo. A commented-out slot for named contacts goes in the Contact page source. |
| #17 | "Host family" column naming private households | Propose removing the column (decision D) |
| #7 | Speaker's wife's and son's names (inside the bio) | Removed if the bio becomes one line |
| `/history` | Names of the 2002 attendees and officers | Kept, since the brief asks for the minutes as an archived document. No contact details appear. |
| Home, #19 | Picasa account ID inside album URLs | Removed with the links |

## The 2002 minutes

The minutes will appear verbatim apart from formatting and the name fixes below.

| Spelling in the minutes | Count | Proposed |
|---|---|---|
| "Rev. Hsush" vs "Rev. Hsueh" | 2 vs 9 | **Correct to Hsueh** (obvious) |
| "Shu-Fen Shih" (attendee list) vs "Shih-Fen" / "Shih-Fen Shih" (sharing order, Secretary) | 1 vs 2 | **Flag, don't change.** Both spellings are plausible. `TODO: confirm` |
| "Shen Yang" (attendee list) vs "Yang Shen" (Treasurer) | 1 vs 1 | **Flag, don't change.** Given name and surname are swapped in one place, and it isn't clear which. `TODO: confirm` |

All other names in the minutes are spelled consistently. Separately, the minutes say "14 people" shared, while the attendee list adds up to 15. That is left as written.

## Proposed text corrections

These go beyond formatting, so they wait for your approval (decision B). Each is unambiguous except where noted.

| Post | Original | Proposed |
|---|---|---|
| #8 | 大福克斯**中午**查经班 | 大福克斯**中文**查经班 |
| #19 | Dr. **Kowk** | Dr. **Kwok** |
| #18 | "invited to our potluck to our potluck get-together dinner" | "invited to our potluck get-together dinner" |
| #18 | speach | speech |
| #11 | Saturday: "11:00pm-12:00pm", "12:00am - 1:00pm" | "11:00am–12:00pm", "12:00pm–1:00pm" |
| #4 | "Pat **Robinson** interviewing her in 1974" | "Pat **Robertson**". The 1974 700 Club interview with Corrie ten Boom was hosted by Pat Robertson. I'm confident, but it's a name change, so it waits for approval. |
| #16 | "begin from 17:30 pm" | **Not corrected.** It could mean 5:30 pm or a typo for 7:30 pm. `TODO: confirm` |

## Redirects planned (`public/_redirects`)

All `301`.

```
/home                                                   /
/history                                                /about/
/contact-us                                             /contact/
/calendar                                               /events/
/share                                                  /sermons/
/home/newwebsite                                        /posts/2012-01-12-new-website/
/home/chinesenewyearsong                                /posts/2012-01-29-chinese-new-year-song/
/home/brotherhanyingstestimony                          /posts/2012-02-07-brother-hanying-testimony/
/home/corrietenboom                                     /posts/2012-03-08-corrie-ten-boom/
/home/potluckwithpastorko                               /posts/2012-03-21-potluck-with-pastor-ko/
/home/blogpostbyalcollver                               /posts/2012-03-30-blog-post-by-al-collver/
/home/potluckwithdrkwok                                 /posts/2012-04-04-potluck-with-dr-kwok/
/home/page                                              /posts/2017-01-17-spring-festival-dumplings/
/home/speakerarrangementforthe2017spring                /posts/2017-01-18-speaker-arrangement-spring-2017/
/home/potluckonfridayjan20                              /posts/2017-01-19-potluck-with-dr-kwok/
/home/guestspeakerandpotluckonfridaynight10272017       /posts/2017-10-25-pastor-chuang-potluck/
/home/cbsgphoto                                         /posts/2017-10-25-dr-clement-yeung-visit/
/home/page-1                                            /posts/2017-10-30-rrvccc-sermons/
/home/somepptsfrompastortsu-kungchuang                  /posts/2017-11-05-pastor-chuang-slides/
/home/page-2                                            /posts/2017-11-13-short-term-mission-team/
/home/specialchristmascelebratepartyandpotluck          /posts/2017-12-20-christmas-party-potluck/
/home/2018guestspeakers                                 /posts/2017-12-27-guest-speakers-2018/
/home/speakerseminarandpotluckdrchuckkwok01192018       /posts/2018-01-16-dr-chuck-kwok-seminar/
/home/drkwokvisitedgf                                   /posts/2018-01-29-dr-kwok-visit/
/home/dryeungsrecentsermononholyspirit                  /posts/2018-03-23-dr-yeung-holy-spirit/
/home/page-3                                            /posts/2018-05-29-pastor-yuan-sermons/
/home/page-4                                            /posts/2018-07-09-dr-yeung-july-2018/
/home/page-5                                            /posts/2018-08-27-dr-yeung-august-2018/
```

In QA I'll test the trailing-slash variants (for example `/home/page/`) against Cloudflare Pages, and add explicit rules if they don't match.

After the DNS move, the old site stays reachable at `sites.google.com/view/gfcbsg` unless it is unpublished. The handoff README will cover this.

## TODO: confirm

This is the single list of unknowns. Each will appear on the site as a visible `TODO: confirm` marker until resolved.

1. **Meeting day and time.** The brief says Fridays 7:30 pm, but there are no meetings at present. This affects the Home hero, Contact and footer.
2. **Meeting venue.** Faith Evangelical Free Church, 1400 24th Ave S, Grand Forks, ND 58201 is unconfirmed as a current venue. This affects Home, Contact, the map embed and the JSON-LD `Place`. Also: should the church address appear while there are no meetings?
3. **What the Home hero should say** while there are no regular meetings. The brief's "Join us this Friday, 7:30 pm" would be untrue.
4. **The sermons link** `http://cn.rrvccc.org/p/blog-page_77.html` was last archived in 2019. Please confirm the current URL; the church's main site is `www.rrvccc.org`.
5. **The Google Calendar must be public** or the embed shows nothing to visitors. I couldn't check this from here. Also confirm dropping the US holidays overlay.
6. **How visitors receive updates by email** (for the Events page). No mechanism is described anywhere.
7. **"What to expect" for first-time visitors.** Nothing in the sources says which language(s) the meetings use (Mandarin? Cantonese? English?), the format, how long they last, whether children are welcome or catered for, or whether to bring a Bible. The section will be built with `TODO: confirm` for each.
8. **Recent years' events in Google Drive.** Not provided yet.
9. **Six private Drive folders** (#11, #14, #19, #21, #22, #23). Re-share publicly or supply the files.
10. **Speaker arrangement for 2017 spring** (#9). The original attachment is missing.
11. **Picasa albums.** Do any copies of these photos survive elsewhere?
12. **Home group photo.** Date and event, for its caption.
13. **Name spellings in the 2002 minutes:** Shu-Fen vs Shih-Fen Shih; Shen Yang vs Yang Shen.
14. **"Pastor Dude"** in the 2018 speaker table (#17). Is this the correct name?
15. **"17:30 pm"** in the Christmas post (#16).
16. **Source link for the 莊祖鯤 biography** (#11), if it is reduced to one line.

## Decisions needed at this checkpoint

- **A. Speaker biographies and abstracts** (#5, #7, #11): reduce to one line (default, per the brief) or keep in full?
- **B. Text corrections:** approve the list above, all or in part?
- **C. Photos of identifiable people, including children:** keep all 8 in the public repo and site? Recommended: keep. They are already public, and they are the only visual record of the group.
- **D. "Host family" column** in the 2018 table: drop it? Recommended: drop.
- **E. Empty 2017 post** (#9): stub post (default) or redirect to `/archive/2017/`?
- **F. Bilingual layout.** Recommended: one page per topic, with English and Chinese side by side and nav labels shown in both languages ("About · 关于我们"). That needs no JavaScript or language toggle, gives volunteers one file to edit per page, and suits mixed-language visitors. The alternative is separate `/zh/` pages with a toggle, which doubles the writing and upkeep. Posts stay in their original language either way.
