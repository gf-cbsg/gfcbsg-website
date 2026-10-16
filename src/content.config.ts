import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts live in src/content/posts/ as Markdown files.
// The file name (without .md) becomes the post's address: /posts/<file-name>/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      // Language of the post: 'zh-Hans' (Simplified), 'zh-Hant' (Traditional) or 'en'.
      lang: z.enum(['zh-Hans', 'zh-Hant', 'en']),
      // Address of the post on the old Google Sites site, for migrated posts only.
      legacy_url: z.string().optional(),
      // Optional one-sentence summary for search engines and link previews.
      description: z.string().optional(),
      // Set to true when the original post linked to files that are no longer
      // publicly available. The page then shows a standard note saying so.
      missing_attachment: z.boolean().default(false),
      // Set to true for sermons, talks and their recordings or slides.
      // These posts are also listed on the Sermons page.
      sermon: z.boolean().default(false),
      // YouTube (or Google Drive) links to embed as players at the top of the post.
      // Each item is a link, or { url, title } to show a title under the player.
      videos: z
        .array(z.union([z.string(), z.object({ url: z.string(), title: z.string().optional() })]))
        .default([]),
      // Photos shown as a grid at the end of the post. Put the files in
      // src/assets/posts/ and refer to them as ../../assets/posts/<file>.
      photos: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
    }),
});

export const collections = { posts };
