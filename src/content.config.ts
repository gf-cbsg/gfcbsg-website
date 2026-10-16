import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A setting left empty in the template (for example "description:") reads as
// null. These treat it as not given, so unused settings can stay blank.
const blank = (value: unknown) => (value === null || value === '' ? undefined : value);
const optionalText = () => z.preprocess(blank, z.string().optional());
const flag = () => z.preprocess(blank, z.boolean().default(false));

// Posts live in src/content/posts/ as Markdown files.
// The file name (without .md) becomes the post's address: /posts/<file-name>/
// Files starting with "_", such as _template.md, are not published.
const posts = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // An empty date must fail rather than become 1 January 1970.
      date: z.preprocess(blank, z.coerce.date()),
      // Language of the post: 'zh-Hans' (Simplified), 'zh-Hant' (Traditional) or 'en'.
      lang: z.enum(['zh-Hans', 'zh-Hant', 'en']),
      // Address of the post on the old Google Sites site, for migrated posts only.
      legacy_url: optionalText(),
      // Optional one-sentence summary for search engines and link previews.
      description: optionalText(),
      // Set to true when the original post linked to files that are no longer
      // publicly available. The page then shows a standard note saying so.
      missing_attachment: flag(),
      // Set to true for sermons, talks and their recordings or slides.
      // These posts are also listed on the Sermons page.
      sermon: flag(),
      // YouTube (or Google Drive) links to embed as players at the top of the post.
      // Each item is a link, or { url, title } to show a title under the player.
      videos: z.preprocess(
        blank,
        z
          .array(z.union([z.string(), z.object({ url: z.string(), title: optionalText() })]))
          .default([]),
      ),
      // Photos shown as a grid at the end of the post. Put the files in
      // src/assets/posts/ and refer to them as ../../assets/posts/<file>.
      photos: z.preprocess(
        blank,
        z.array(z.object({ src: image(), alt: z.string(), caption: optionalText() })).default([]),
      ),
    }),
});

export const collections = { posts };
