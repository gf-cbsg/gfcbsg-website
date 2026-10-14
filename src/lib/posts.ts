import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All posts, newest first. Posts on the same day are ordered by file name. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id),
  );
}

/** Posts marked `sermon: true`, newest first. */
export async function getSermonPosts(): Promise<Post[]> {
  return (await getPosts()).filter((post) => post.data.sermon);
}

/** Posts grouped by year, newest year first. */
export function groupByYear(posts: Post[]): { year: number; posts: Post[] }[] {
  const groups = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getUTCFullYear();
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, yearPosts]) => ({ year, posts: yearPosts }));
}

/** Dates are stored as UTC midnight, so slicing the ISO string is timezone-safe. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function postUrl(post: Post): string {
  return `/posts/${post.id}/`;
}
