import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dev.to/api/articles/me/all", {
    headers: {
      "api-key": process.env.DEV_TO_API_KEY!,
    },
    cache: "no-store", // or "force-cache" if you want caching
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch Dev.to posts" },
      { status: 500 }
    );
  }

  const posts = await res.json();

  return NextResponse.json(posts);
}
