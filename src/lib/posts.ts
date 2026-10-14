import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Dates are stored as UTC midnight, so slicing the ISO string is timezone-safe. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function postUrl(post: Post): string {
  return `/posts/${post.id}/`;
}
