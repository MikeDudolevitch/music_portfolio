export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  image?: string;
  content: string;
}

export interface BlogPostMeta {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  image?: string;
}