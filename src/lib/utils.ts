import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DevToPost } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllPosts(): Promise<DevToPost[]> {
  const res = await fetch(`https://dev.to/api/articles?username=nshnt`);

  if (!res.ok) throw new Error('Failed to fetch Dev.to articles');

  const posts: DevToPost[] = await res.json();

  return posts;
}
