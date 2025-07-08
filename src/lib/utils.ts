import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DevToPost } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllPosts(): Promise<DevToPost[]> {
  const res = await fetch(`https://dev.to/api/articles?username=nshnt`);

  if (!res.ok) throw new Error("Failed to fetch Dev.to articles");

  const posts: DevToPost[] = await res.json();

  return posts;
}

export async function fetchPostUsingSlug(slug: string): Promise<DevToPost> {
  const res = await fetch(`https://dev.to/api/articles/nshnt/${slug}`);

  if (!res.ok) throw new Error("Failed to fetch Dev.to articles");

  const post: DevToPost = await res.json();
  return post;
}

export const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);

  const options = { day: "numeric", month: "long", year: "numeric" };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const formattedDateParts = new Intl.DateTimeFormat("en-GB", options)
    .format(date)
    .split(" ");
  return `${formattedDateParts[0]} ${formattedDateParts[1]}, ${formattedDateParts[2]}`;
};
