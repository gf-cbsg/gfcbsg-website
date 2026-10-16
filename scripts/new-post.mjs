// Creates a new post from src/content/posts/_template.md.
//
//   npm run new-post -- 2026-12-20-christmas-potluck
//
// The name becomes the file name and the post's address, and its date fills
// in the post's date.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const name = (process.argv[2] ?? '').replace(/\.md$/, '');
const postsDir = 'src/content/posts';

if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
  console.error(`
请在命令后面写文章名：日期 + 几个英文小写单词，用连字符连接。
Give the post a name: the date, then a few lowercase English words, joined by hyphens.

  npm run new-post -- 2026-12-20-christmas-potluck
`);
  process.exit(1);
}

const date = name.slice(0, 10);
if (Number.isNaN(Date.parse(date))) {
  console.error(`日期不对 · Not a real date: ${date}`);
  process.exit(1);
}

const target = `${postsDir}/${name}.md`;
if (existsSync(target)) {
  console.error(`已经有这篇文章了 · This post already exists: ${target}`);
  process.exit(1);
}

const template = readFileSync(`${postsDir}/_template.md`, 'utf8');
writeFileSync(target, template.replace(/^date:[ \t]*$/m, `date: ${date}`));

console.log(`
已创建 · Created: ${target}

打开这个文件，填写标题和其他空白，再运行 npm run check。
Open the file, fill in the title and the other blanks, then run npm run check.

发布后的地址 · Address once published: https://www.gfcbsg.com/posts/${name}/
`);
