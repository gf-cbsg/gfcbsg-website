import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts live in src/content/posts/ as Markdown files.
// The file name (without .md) becomes the post's address: /posts/<file-name>/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
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
  }),
});

export const collections = { posts };
