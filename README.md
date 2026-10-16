# 大福克斯中文查经班网站 · GFCBSG website

The website of the Grand Forks Chinese Bible Study Group, **www.gfcbsg.com**. It's a small static site built with [Astro](https://astro.build) and hosted on Cloudflare. Every change saved to the `main` branch on GitHub is published automatically within a few minutes.

## What do you want to do?

| I want to… | Go to |
|---|---|
| Add a news post or event | [Add a post](#add-a-post) |
| Add a photo to a post | [Add a photo to a post](#add-a-photo-to-a-post) |
| Add a YouTube video or a grid of photos | [Add a video](#add-a-video) · [Add several photos as a grid](#add-several-photos-as-a-grid) |
| Link slides, PDFs or recordings from Google Drive | [Link slides, PDFs and recordings](#link-slides-pdfs-and-recordings) |
| 用中文看发文步骤 | [快速指南：发布新文章](#快速指南发布新文章) |
| Change the meeting time or place | [Update the meeting details](#update-the-meeting-details) |
| Fix a yellow "TODO: confirm" marker | [`MIGRATION_TODO.md`](MIGRATION_TODO.md) |
| Change other text on a page | [Change other text](#change-other-text) |
| Work on the site on my computer | [Run the site locally](#run-the-site-locally) |
| Put the site online or move the domain | [Deploy](#deploy) |

All of these need a GitHub account with write access to `gf-cbsg/gfcbsg-website`. Ask an owner of the `gf-cbsg` organization to add you.

## Add a post

You can do all of this in your web browser. No software is needed.

1. Open the posts folder: https://github.com/gf-cbsg/gfcbsg-website/tree/main/src/content/posts
2. Click **Add file**, then **Create new file**.
3. In the name box, type a file name: the date, then a few English words, joined by hyphens and ending in `.md`. For example: `2026-12-20-christmas-potluck.md`. Use only lowercase letters, numbers and hyphens; no spaces or Chinese characters. The file name becomes the post's address: `www.gfcbsg.com/posts/2026-12-20-christmas-potluck/`.
4. Paste one of the templates below into the large box and fill it in.
5. Click **Commit changes…**, leave **Commit directly to the `main` branch** selected, and click **Commit changes**.
6. Wait about two minutes, then open www.gfcbsg.com/archive/. Your post is listed there, and on the Home page under "Latest posts".

**Template for a Chinese post:**

```markdown
---
title: 2026 年圣诞节聚餐
date: 2026-12-20
lang: zh-Hans
---

正文写在这里。

空一行就是新的一段。
```

**Template for an English post:**

```markdown
---
title: Christmas potluck 2026
date: 2026-12-20
lang: en
---

Write the post here.

Leave a blank line to start a new paragraph.
```

The lines between the two `---` lines are the post's settings. Keep both `---` lines exactly as they are.

| Setting | What to write |
|---|---|
| `title` | The post's title. If it contains an English colon (`:`), put the whole title in double quotes: `title: "Potluck: December 20"` |
| `date` | The date as year-month-day, for example `2026-12-20` |
| `lang` | `zh-Hans` for Simplified Chinese, `zh-Hant` for Traditional Chinese, `en` for English |
| `description` (optional) | One sentence that search engines and link previews show |
| `sermon` (optional) | Write `sermon: true` for a sermon or talk. The post then also appears on the Sermons page. |
| `videos` (optional) | YouTube links to show as players at the top of the post. See [Add a video](#add-a-video). |
| `photos` (optional) | Photos to show as a grid at the end of the post. See [Add several photos as a grid](#add-several-photos-as-a-grid). |

**Formatting the text** (this is called Markdown):

| To get | Write |
|---|---|
| A new paragraph | Leave a blank line |
| **Bold text** | `**Bold text**` |
| A link | `[Text to show](https://example.com)` |
| A bulleted list | Start each line with `- ` |
| A subheading | Start the line with `## ` |

**If something goes wrong:** if a post has a mistake, the site doesn't update, and the live site stays exactly as it was. The usual causes are a missing `---` line, a date that isn't in `2026-12-20` form, or a title with an English colon that isn't in quotes. Fix the file and commit again. The error message is in the build log in Cloudflare (see [Deploy](#deploy)).

**Privacy:** don't put anyone's personal phone number or email address in a post without their permission. Ask before posting photos of people, especially children.

### Add a photo to a post

1. Open the photo folder: https://github.com/gf-cbsg/gfcbsg-website/tree/main/src/assets/posts
2. Before uploading, rename the photo on your computer to lowercase words joined by hyphens, for example `2026-12-christmas-group.jpg`. JPG and PNG both work. Any size straight from a phone is fine; the site resizes photos automatically.
3. Click **Add file**, then **Upload files**, and drag the photo in. Commit directly to the `main` branch.
4. In your post, on a line of its own, write:

   ```markdown
   ![A short description of what the photo shows](../../assets/posts/2026-12-christmas-group.jpg)
   ```

   The description between `[` and `]` is read aloud to people who can't see the photo, so describe what's in it. Keep the `../../assets/posts/` part exactly as shown.

Upload the photo **before** saving the post that uses it. If the post comes first, the site won't update until the photo is there.

### Add a video

To show a YouTube video as a player at the top of a post, add a `videos` setting between the `---` lines, with the link copied from YouTube:

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

1. Upload the photos to https://github.com/gf-cbsg/gfcbsg-website/tree/main/src/assets/posts, as in [Add a photo to a post](#add-a-photo-to-a-post).
2. Add a `photos` setting between the `---` lines. Each photo needs its file (`src`) and a short description (`alt`); a caption is optional:

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

## 快速指南：发布新文章

全部操作都可以在浏览器里完成。

1. 打开文章文件夹：https://github.com/gf-cbsg/gfcbsg-website/tree/main/src/content/posts
2. 点击 **Add file**，再点 **Create new file**。
3. 填写文件名：日期 + 几个英文单词，用连字符连接，以 `.md` 结尾，例如 `2026-12-20-christmas-potluck.md`。只能用小写字母、数字和连字符，不要用空格或中文。
4. 把上面的“Template for a Chinese post”整段复制进大输入框，修改标题（title）、日期（date）和正文。`lang` 写 `zh-Hans`（简体）或 `zh-Hant`（繁体）。
5. 点击 **Commit changes…**，保持选中 **Commit directly to the `main` branch**，再点 **Commit changes**。
6. 大约两分钟后，打开 www.gfcbsg.com/archive/ 就能看到新文章，首页的“最新文章”里也会显示。

**添加照片：** 先把照片改成英文小写文件名（例如 `2026-12-christmas-group.jpg`），上传到 https://github.com/gf-cbsg/gfcbsg-website/tree/main/src/assets/posts （**Add file** → **Upload files**），然后在文章里另起一行写：

```markdown
![照片内容的简短说明](../../assets/posts/2026-12-christmas-group.jpg)
```

请先上传照片，再保存文章。

**添加 YouTube 视频：** 在两行 `---` 之间加上 `videos`，下面每行写一个视频链接（行首是两个空格、一个连字符和一个空格）。视频会以播放器的形式显示在文章最上面：

```markdown
videos:
  - https://www.youtube.com/watch?v=VIDEO_ID
```

**多张照片排成照片墙：** 先上传照片，然后在两行 `---` 之间加上 `photos`。每张照片写文件路径（`src`）和简短说明（`alt`），`caption`（图片说明文字）可写可不写。注意缩进要和例子完全一样：

```markdown
photos:
  - src: ../../assets/posts/2026-12-christmas-dumplings.jpg
    alt: 大家一起包饺子
    caption: 包饺子
  - src: ../../assets/posts/2026-12-christmas-children.jpg
    alt: 孩子们表演节目
```

**注意隐私：** 未经本人同意，不要在文章中公开他人的电话号码或电子邮件；发布有人物（特别是儿童）的照片前请先征得同意。

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
| `npm run dev` | Runs the site locally at http://localhost:4321 and updates it as you edit. |
| `npm run build` | Builds the production site into `dist/`. Run this before pushing to `main`. |
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
