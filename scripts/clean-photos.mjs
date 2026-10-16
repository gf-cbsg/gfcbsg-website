// Prepares the photos in src/assets/posts/ for this public repository:
// removes hidden metadata (phones record the GPS location where a photo was
// taken), turns photos the right way up, and shrinks very large ones.
// Photos that are already clean are left alone, so it's safe to run any time.
import { readdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const dir = 'src/assets/posts';
const maxSide = 2400;
let problems = 0;

for (const file of readdirSync(dir).sort()) {
  const path = `${dir}/${file}`;

  if (/\.(heic|heif)$/i.test(file)) {
    console.error(`请先把 HEIC 照片转成 JPG · Convert this HEIC photo to JPG first: ${file}`);
    problems++;
    continue;
  }
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  if (!/^[a-z0-9]+(-[a-z0-9]+)*\.[a-z]+$/.test(file)) {
    console.warn(`文件名最好只用小写英文、数字和连字符 · Better file name: lowercase letters, numbers and hyphens only: ${file}`);
  }

  const image = sharp(path);
  const meta = await image.metadata();
  const hasMetadata = Boolean(meta.exif || meta.xmp || meta.iptc);
  const tooLarge = Math.max(meta.width ?? 0, meta.height ?? 0) > maxSide;
  if (!hasMetadata && !tooLarge) continue;

  // rotate() applies the phone's orientation; output keeps no metadata.
  const resized = image
    .rotate()
    .resize({ width: maxSide, height: maxSide, fit: 'inside', withoutEnlargement: true });
  const output =
    meta.format === 'png'
      ? resized.png()
      : meta.format === 'webp'
        ? resized.webp({ quality: 85 })
        : resized.jpeg({ quality: 85, mozjpeg: true });
  writeFileSync(path, await output.toBuffer());
  console.log(`已处理 · Cleaned: ${file}`);
}

if (problems) process.exit(1);
