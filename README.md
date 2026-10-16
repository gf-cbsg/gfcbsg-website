# 大福克斯中文查经班网站 · GFCBSG website

The website of the Grand Forks Chinese Bible Study Group, **www.gfcbsg.com**. It's a small static site built with [Astro](https://astro.build) and hosted on Cloudflare. Every change saved to the `main` branch on GitHub is published automatically within a few minutes.

## What do you want to do?

| 我想… · I want to… | Go to |
|---|---|
| 发布新文章或活动 · Publish a post or event | [Publish a post](#publish-a-post) |
| 看填好的例子 · See a filled-in example | [A filled-in example](#a-filled-in-example) |
| 发布出错了 · Fix an error when publishing | [Common errors](#common-errors) |
| 了解每一项怎么填 · Look up a setting, photos, videos or Drive links | [Post reference](#post-reference) |
| 修改聚会时间地点 · Change the meeting time or place | [Update the meeting details](#update-the-meeting-details) |
| Fix a yellow "TODO: confirm" marker | [`MIGRATION_TODO.md`](MIGRATION_TODO.md) |
| Change other text on a page | [Change other text](#change-other-text) |
| Work on the site on my computer | [Run the site locally](#run-the-site-locally) |
| Put the site online or move the domain | [Deploy](#deploy) |

All of these need a GitHub account with write access to `gf-cbsg/gfcbsg-website`. Ask an owner of the `gf-cbsg` organization to add you.

## Publish a post

**发布新文章：复制模板 → 填空 → 检查 → 推送。大约两分钟后上线。**
Copy the template, fill in the blanks, check, push. The post is live about two minutes later.

### One-time setup

**第一次使用前（每台电脑一次）。** Once per computer. Skip this if you already have the `gfcbsg-website` folder.

```
git clone git@github.com:gf-cbsg/gfcbsg-website.git
cd gfcbsg-website
nvm use
npm ci
```

No `nvm`? See [Run the site locally](#run-the-site-locally) for installing Node.

### Each time

**1. 资料放进 Google Drive（有才做）· Files go in Google Drive (if any)**

在 Google Drive 的 **CBSG活动归档** 里新建一个文件夹，名字像 `20261220讲员 - 题目`，把 PPT、PDF、录音、录像传进去。在文件上点右键 → **共享** → **复制链接**，留着第 4 步用。录像如果也在 YouTube 上，就用 YouTube 链接，手机上播放更流畅。

In the **CBSG活动归档** Drive folder, make a folder named like `20261220speaker - title` and upload slides, PDFs, recordings and videos. Right-click each file → **Share** → **Copy link**. If a video is also on YouTube, use the YouTube link instead.

**2. 照片放进网站文件夹（有才做）· Photos go in the site folder (if any)**

挑几张照片，复制到 `src/assets/posts/` 文件夹。文件名只用小写英文、数字和连字符，例如 `2026-12-christmas-group.jpg`。JPG、PNG 都可以；iPhone 的 HEIC 照片要先转成 JPG。不用缩小，也不用自己删除定位信息，第 5 步会自动处理。

Copy a few photos into `src/assets/posts/`. Name them with lowercase letters, numbers and hyphens, like `2026-12-christmas-group.jpg`. JPG and PNG work; convert iPhone HEIC photos to JPG first. Step 5 shrinks them and removes their hidden location data.

**3. 新建文章 · Create the post**

在 `gfcbsg-website` 文件夹里运行（文章名 = 日期 + 几个英文小写单词，用连字符连接）：

In the `gfcbsg-website` folder, run this, with the date and a few lowercase English words as the name:

```
git pull
npm run new-post -- 2026-12-20-christmas-potluck
```

This creates `src/content/posts/2026-12-20-christmas-potluck.md` from the template, with the date already filled in. The name becomes the post's address: `www.gfcbsg.com/posts/2026-12-20-christmas-potluck/`.

**4. 填空 · Fill in the blanks**

用 VS Code 之类的文本编辑器打开这个文件。每一项上面都有中英文说明。至少要填 `title`（标题），然后在文件最后的说明下面写正文。用不到的项目留空就行。

Open the file in a text editor such as VS Code. Every setting has instructions above it in Chinese and English. Fill in at least `title`, and write the text below the note at the end. Leave anything you don't need blank.

If you use TextEdit on a Mac, choose **Format → Make Plain Text** first, and turn off smart quotes (**Edit → Substitutions**).

**5. 检查 · Check**

```
npm run check
```

它会先处理照片（删除定位信息、转正方向、缩小太大的照片），再试着生成整个网站。最后出现 `Complete!` 就说明没问题。如果出错，信息里会写明是哪个文件、哪一项，见下面的 [Common errors](#common-errors)。

This cleans the photos (removes location data, turns them the right way up, shrinks very large ones), then builds the whole site. If it ends with `Complete!`, everything is fine. If not, the message names the file and the problem; see [Common errors](#common-errors).

想先在自己电脑上看看效果，可以运行 `npm run dev`，打开 http://localhost:4321/posts/2026-12-20-christmas-potluck/ ，看完按 Ctrl+C 停止。

To preview first, run `npm run dev`, open http://localhost:4321/posts/2026-12-20-christmas-potluck/, and press Ctrl+C when done.

**6. 发布 · Publish**

```
git add .
git commit -m "Add Christmas potluck post"
git push
```

大约两分钟后，文章出现在网站上：首页“最新文章”、历年活动；如果 `sermon: true`，也会出现在证道分享页。

About two minutes later the post is live: on the Home page under "Latest posts", in the Archive, and on the Sermons page if `sermon: true`.

**隐私 · Privacy:** 不要写他人的电话号码或电子邮件；有儿童正脸的照片，请先征得家长同意。Don't include anyone's phone number or email address, and ask parents before posting photos that show children's faces.

### Common errors

`npm run check` 出错时，在信息里找下面这些字。· When `npm run check` fails, look for these words in the message.

| 信息里有 · Message contains | 原因和改法 · Cause and fix |
|---|---|
| `title: Expected type "string"` | 标题没填。· The title is blank. |
| `date: Expected type "date"` | 日期没填，或者不是 `2026-12-20` 这种格式。· The date is blank or not in `2026-12-20` form. |
| `lang: Invalid option` | `lang` 只能写 `zh-Hans`、`zh-Hant` 或 `en`。· `lang` must be `zh-Hans`, `zh-Hant` or `en`. |
| `bad indentation of a mapping entry` | 多半是标题里有英文冒号 `:`，给整个标题加上英文双引号；也可能是视频或照片那几行前面的空格不对。信息里有行号。· Usually an English colon in the title: put the whole title in "double quotes". Otherwise, the spaces before a videos or photos line are wrong. The message gives the line number. |
| `Could not find requested image` | 照片没放进 `src/assets/posts/`，或者 `src:` 里的文件名和照片文件名不一样（大小写也要一样）。· The photo isn't in `src/assets/posts/`, or the name after `src:` doesn't match the file exactly, including capital letters. |
| `alt: Required` | 每张照片都要写 `alt`。· Every photo needs an `alt` line. |
| `Convert this HEIC photo to JPG first` | 把 iPhone 的 HEIC 照片转成 JPG，再删掉 HEIC 文件。· Convert the iPhone HEIC photo to JPG and delete the HEIC file. |
| `Cannot find package`, `command not found` | 网站用到的软件有更新：运行 `npm ci`，再运行一次 `npm run check`。· The site's tools were updated: run `npm ci`, then `npm run check` again. |

改好后再运行一次 `npm run check`。· Fix it and run `npm run check` again.

如果没检查就推送了、而且有错：网站不会坏，只是不更新，继续显示原来的内容。改好后再推送一次即可。错误信息在 Cloudflare 的 **Workers & Pages** → `gfcbsg-website` → **Deployments** → **View build**。

If a mistake was pushed without checking, the live site doesn't break: it stays as it was until a fixed version is pushed. The error is in Cloudflare under **Workers & Pages** → `gfcbsg-website` → **Deployments** → **View build**.

### Without a computer setup

**只用浏览器发一篇简单的文字文章。** For a quick text-only post from a web browser:

1. Open the template: https://github.com/gf-cbsg/gfcbsg-website/blob/main/src/content/posts/_template.md and click **Copy raw file** (the copy icon above the file).
2. Open the posts folder: https://github.com/gf-cbsg/gfcbsg-website/tree/main/src/content/posts, click **Add file** → **Create new file**, and name it like `2026-12-20-christmas-potluck.md`.
3. Paste, fill in the blanks, **including the date**, and click **Commit changes…** → **Commit directly to the `main` branch** → **Commit changes**.

There's no check before publishing this way; if something is wrong, the site simply doesn't update. Photos are better added from a computer: photos uploaded through the browser keep their hidden location data. On an iPhone you can remove it when sharing: **Share** → **Options** → turn off **Location**.

### A filled-in example

A finished post with a video, two photos and Drive links. The note lines from the template are left out to keep it short.

```markdown
---
title: 2026 年圣诞节聚餐
date: 2026-12-20
lang: zh-Hans
sermon: false
description: 2026 年圣诞节，查经班在 Valley Christian Church 聚餐、唱诗、分享信息。
videos:
  - url: https://youtu.be/VIDEO_ID
    title: 圣诞信息
photos:
  - src: ../../assets/posts/2026-12-christmas-group.jpg
    alt: 大家在教会大厅合影
    caption: 圣诞聚餐合影
  - src: ../../assets/posts/2026-12-christmas-dinner.jpg
    alt: 大家围着圆桌吃饭
---

12 月 20 日周五晚，查经班在 Valley Christian Church 举办圣诞聚餐。

- [讲道 PPT](https://drive.google.com/file/d/FILE_ID/view)
- [收听录音（Google Drive）](https://drive.google.com/file/d/FILE_ID/view)
```

## Post reference

Details of each part of a post, for when the template's notes aren't enough.

The lines between the two `---` lines are the post's settings. Keep both `---` lines exactly as they are.

| Setting | What to write |
|---|---|
| `title` | The post's title. If it contains an English colon (`:`), put the whole title in double quotes: `title: "Potluck: December 20"` |
| `date` | The date as year-month-day, for example `2026-12-20` |
| `lang` | `zh-Hans` for Simplified Chinese, `zh-Hant` for Traditional Chinese, `en` for English |
| `sermon` | `true` for a sermon or talk: the post then also appears on the Sermons page. `false` or blank for an event. |
| `description` (optional) | One sentence that search engines and link previews show |
| `videos` (optional) | YouTube or Google Drive links to show as players at the top of the post. See [Add a video](#add-a-video). |
| `photos` (optional) | Photos to show as a grid at the end of the post. See [Add several photos as a grid](#add-several-photos-as-a-grid). |

Optional settings can be left blank or deleted.

**Formatting the text** (this is called Markdown):

| To get | Write |
|---|---|
| A new paragraph | Leave a blank line |
| **Bold text** | `**Bold text**` |
| A link | `[Text to show](https://example.com)` |
| A bulleted list | Start each line with `- ` |
| A subheading | Start the line with `## ` |

### Add a photo to a post

Photos usually go in the template's `photos` list, which shows them as a grid at the end of the post (see [Add several photos as a grid](#add-several-photos-as-a-grid)). To place one photo inside the text instead:

1. Put the photo in `src/assets/posts/`, named with lowercase words joined by hyphens, for example `2026-12-christmas-group.jpg`. JPG and PNG both work. Any size straight from a phone is fine; `npm run check` shrinks it and removes its location data.
2. In your post, on a line of its own, write:

   ```markdown
   ![A short description of what the photo shows](../../assets/posts/2026-12-christmas-group.jpg)
   ```

   The description between `[` and `]` is read aloud to people who can't see the photo, so describe what's in it. Keep the `../../assets/posts/` part exactly as shown.

Commit the photo together with the post, or before it. If the post arrives first, the site won't update until the photo is there.

### Add a video

To show a YouTube video as a player at the top of a post, put the link copied from YouTube under `videos` between the `---` lines. The template already has this setting:

```markdown
---
title: 2026 年圣诞节聚会
date: 2026-12-20
lang: zh-Hans
videos:
  - https://www.youtube.com/watch?v=VIDEO_ID
---

正文写在这里。
```

- Copy the link from the browser's address bar or YouTube's **Share** button. `youtube.com/watch?v=…`, `youtu.be/…`, Shorts and live links all work, and a start time (`&t=90`) is kept.
- For more than one video, add one line per video. Each line starts with **two spaces, a hyphen and a space** (`  - `).
- To show a title under a player, write that video as two lines instead:

  ```markdown
  videos:
    - url: https://youtu.be/VIDEO_ID
      title: 圣诞信息 · Christmas message
  ```

- A Google Drive video link (shared as "Anyone with the link") also works. Any other link is shown as a plain "Watch the video" link.
- The archive and Sermons lists mark the post with a "视频 Video" tag.

The player uses YouTube's privacy-enhanced mode, so no YouTube cookies are set until someone presses play.

### Link slides, PDFs and recordings

Keep slides, PDFs, audio recordings and long videos in the group's Google Drive folder **CBSG活动归档**, one folder per gathering named like `20261220讲员 - 题目`. The site links to them instead of storing them.

1. Upload the files to the Drive folder. Files inherit the folder's "Anyone with the link" sharing.
2. In Drive, right-click a file → **Share** → **Copy link**.
3. In the post, add one line per file:

   ```markdown
   - [讲道 PPT](https://drive.google.com/file/d/FILE_ID/view)
   - [收听录音（Google Drive）](https://drive.google.com/file/d/FILE_ID/view)
   ```

If a video is also on YouTube, put the YouTube link under `videos` instead: it plays more smoothly on phones. Photos are the exception: upload them to the site as in [Add several photos as a grid](#add-several-photos-as-a-grid), so they load fast and open in the photo viewer.

### Add several photos as a grid

For more than one or two photos, a grid looks tidier than photos placed one under another in the text.

1. Put the photos in `src/assets/posts/`, as in [Add a photo to a post](#add-a-photo-to-a-post).
2. List them under `photos` between the `---` lines. The template already has this list: delete the `# ` at the start of its example lines and change them. Each photo needs its file (`src`) and a short description (`alt`); a caption is optional:

   ```markdown
   ---
   title: 2026 年圣诞节聚会
   date: 2026-12-20
   lang: zh-Hans
   photos:
     - src: ../../assets/posts/2026-12-christmas-dumplings.jpg
       alt: 大家一起包饺子
       caption: 包饺子
     - src: ../../assets/posts/2026-12-christmas-children.jpg
       alt: 孩子们表演节目
   ---
   ```

   Keep the indentation exactly as shown: two spaces before each `-`, and four spaces before `alt` and `caption`.

The grid appears at the end of the post. Clicking a photo opens it large on the same page, with a "返回 Back" button and previous/next buttons. The archive and Sermons lists mark the post with a "照片 Photos" tag.

## Update the meeting details

The meeting time and place are kept in one file, `src/config/site.ts`. Everything that shows them reads from there: the Home page, the Contact page, the footer, the map, and the information search engines see.

1. Open https://github.com/gf-cbsg/gfcbsg-website/blob/main/src/config/site.ts and click the pencil icon (**Edit this file**).
2. Find the `meeting` block. It currently looks like this:

   ```ts
   export const meeting: Meeting = {
     day: { zh: '周五', en: 'Friday' },
     time: { zh: '晚上 7:30', en: '7:30 pm' },
     venue: {
       name: 'Valley Christian Church',
       street: '3920 Cherry St',
       city: 'Grand Forks',
       region: 'ND',
       postalCode: '58201',
     },
   };
   ```

3. Change only the text inside the quotes. `zh` is the Chinese wording and `en` the English. Keep the quotes, commas and curly brackets exactly as they are. To hide a detail that isn't confirmed, replace its whole value with `null` (for example `venue: null,`); the site then shows a yellow "TODO: confirm" marker instead.

4. Click **Commit changes…** and commit directly to the `main` branch.

The Home page card's heading is built from these values ("欢迎周五晚上 7:30 来参加 · Join us this Friday, 7:30 pm"). The Apple Maps and Google Maps buttons, the map on the Contact page, and the footer all update automatically.

## Change other text

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| About | `src/pages/about.astro`; the 2002 minutes are in `src/data/minutes-2002.md` and are hidden for now. To show them, change `const showMinutes = false;` to `true` near the top of `about.astro`. |
| Events | `src/pages/events.astro` |
| Sermons | `src/pages/sermons.astro` |
| Contact | `src/pages/contact.astro` |
| Navigation menu | `src/config/nav.ts` |
| Group name, email, calendar | `src/config/site.ts` |
| Colours and layout | `src/styles/global.css` |
| Redirects from old addresses | `public/_redirects` |

These files mix text with code. Change only the words, and keep the `lang="zh-Hans"` and `lang="en"` markers around each language: they tell screen readers which language they're reading. If you're unsure, ask someone who knows HTML.

## Run the site locally

For people who want to work on the code. You need [Node.js](https://nodejs.org) 22.22.0 (the version in `.nvmrc`) and git.

First time:

```bash
git clone git@github.com:gf-cbsg/gfcbsg-website.git
cd gfcbsg-website
nvm use
npm ci
npm run dev
```

Then open http://localhost:4321. The page reloads when you save a file. Press `Ctrl+C` to stop.

| Command | What it does |
|---|---|
| `nvm use` | Switches to the Node version in `.nvmrc`. Without nvm, install Node 22.22.0 another way (for example `brew install node@22` on a Mac). |
| `npm ci` | Installs the exact dependency versions from `package-lock.json`. Run it again after pulling changes. |
| `npm run new-post -- 2026-12-20-name` | Creates a new post from `src/content/posts/_template.md`, with the date filled in. See [Publish a post](#publish-a-post). |
| `npm run check` | Cleans the photos in `src/assets/posts/` (`npm run photos`), then builds the site. Run this before pushing to `main`. |
| `npm run photos` | Only cleans the photos: removes hidden metadata such as GPS location, turns them the right way up, and shrinks any longer than 2400 pixels. Photos that are already clean are left alone. |
| `npm run dev` | Runs the site locally at http://localhost:4321 and updates it as you edit. |
| `npm run build` | Builds the production site into `dist/`. This is what Cloudflare runs. |
| `npm run preview` | Serves the built `dist/` folder locally, to check exactly what will be published. |
| `npx wrangler dev` | Serves `dist/` the way Cloudflare does, using `wrangler.jsonc`, including the redirects in `public/_redirects` (run `npm run build` first). |

Two things behave differently locally: an address without its final slash (`/about` instead of `/about/`) shows "page not found", and old Google Sites addresses aren't redirected. Both work on Cloudflare.

How the project is laid out:

```
src/
  config/site.ts        group name, email, calendar, meeting details
  config/nav.ts         main navigation
  content/posts/        one Markdown file per post
  content.config.ts     the settings a post may have (title, date, lang, …)
  data/minutes-2002.md  the archived 2002 meeting minutes
  assets/legacy/        photos recovered from the old site
  assets/posts/         photos for new posts
  components/           header, footer, meeting card, post list, map
  layouts/Base.astro    page shell: <head>, metadata, header and footer
  pages/                one file per page; posts/[id].astro and
                        archive/[year].astro generate one page per post / year
  styles/global.css     all styles: colour tokens, dark mode, layout
public/
  _redirects            301 redirects from the old Google Sites addresses
  robots.txt            search engine rules and sitemap location
docs/                   content inventory and QA report from the rebuild
MIGRATION_TODO.md       everything still to confirm or supply
```

Ground rules the site was built to: no client-side JavaScript, no web fonts, no analytics or trackers, text contrast at WCAG AA in light and dark mode, and a `lang` attribute on every piece of Chinese or English text.

## Deploy

The site runs on Cloudflare as a Worker named `gfcbsg-website` that serves the built site as plain files. Cloudflare builds and publishes it straight from GitHub:

- **A commit to `main`** updates the live site within a few minutes.
- **A failed build** leaves the live site on its previous version. The error is in Cloudflare under **Workers & Pages** → `gfcbsg-website` → **Deployments** → **View build**.

Each deploy runs two commands: `npm run build`, which builds the site into `dist/`, then `npx wrangler deploy`, which uploads `dist/`. The deploy settings live in [`wrangler.jsonc`](wrangler.jsonc) in this repository. Keep that file: without it, Wrangler (Cloudflare's deploy tool) tries to guess how to deploy and fails. Wrangler's version is pinned in `package.json`, so a new Wrangler release can't change how the site deploys.

### Connect Cloudflare (one-time setup)

This is already done for the current site. These steps are for setting it up again, for example under a different Cloudflare account. Use an account the group controls (such as one registered with `chinese.biblestudy.group@gmail.com`), so access doesn't depend on one volunteer.

1. Sign in at https://dash.cloudflare.com. The free plan is enough.
2. Go to **Workers & Pages** → **Create** → **Import a repository** (Cloudflare renames these menus from time to time).
3. Connect GitHub. When GitHub asks, install Cloudflare's app on the `gf-cbsg` organization and give it access to `gfcbsg-website` only.
4. Choose `gfcbsg-website` and enter these settings:

   | Setting | Value |
   |---|---|
   | Project name | `gfcbsg-website` (must match `name` in `wrangler.jsonc`) |
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Root directory | leave empty |
   | Environment variables | none needed; the Node version comes from `.nvmrc` |

5. Click **Deploy**. When the first deploy finishes, the site is live at the `.workers.dev` address Cloudflare shows. Check it before connecting the domain.

### The www.gfcbsg.com domain

**Done in October 2026.** The domain's DNS is hosted by Cloudflare, `www.gfcbsg.com` is attached to the `gfcbsg-website` Worker, and `gfcbsg.com` redirects to `https://www.gfcbsg.com/`. The old Google Site is unpublished, and the domain is verified in [Google Search Console](https://search.google.com/search-console) with the sitemap submitted.

If the domain ever needs attaching again (for example after recreating the Worker):

1. In Cloudflare, open **Workers & Pages** → `gfcbsg-website` → **Settings** → **Domains & Routes** → **Add** → **Custom domain**.
2. Enter `www` as the subdomain, so it reads `www.gfcbsg.com`. Don't attach the bare `gfcbsg.com`: its records run the redirect to `www`.
3. If Cloudflare says `www.gfcbsg.com` already has DNS records, delete the old `www` record under your domain → **DNS** → **Records**, then try again. Leave records named `gfcbsg.com` or `@`, and all TXT and MX records, alone.
4. Wait a few minutes, then open https://www.gfcbsg.com and an old address such as https://www.gfcbsg.com/history, which should redirect to `/about/`.

## Background documents

- [`docs/CONTENT_INVENTORY.md`](docs/CONTENT_INVENTORY.md): what was on the old site, and the decisions made when moving it
- [`docs/QA_REPORT.md`](docs/QA_REPORT.md): the checks run before launch
- [`MIGRATION_TODO.md`](MIGRATION_TODO.md): open items
