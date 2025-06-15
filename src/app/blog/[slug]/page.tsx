import { getAllPostSlugs, getPostBySlug } from '../../../lib/blog';
import { Container, Typography, Chip, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../../../types/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post: BlogPost;
  
  try {
    post = getPostBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {new Date(post.date).toLocaleDateString()} • {post.author}
      </Typography>
      <Box sx={{ mb: 3 }}>
        {post.tags.map((tag: string) => (
          <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
        ))}
      </Box>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Container>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} - Music Portfolio`,
    description: post.excerpt,
  };
}