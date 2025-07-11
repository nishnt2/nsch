export type DevToPost = {
  id: number;
  title: string;
  description: string;
  slug: string;
  body_html: string;
  published_at: string;
  user: { name: string; profile_image: string };
  tag_list: string[];
  reading_time_minutes: number;
  url: string;
  body_markdown: string;
};
