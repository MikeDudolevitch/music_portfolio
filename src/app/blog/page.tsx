import { getAllPosts } from '../../lib/blog';
import BlogCard from '../../components/BlogCard';
import { Grid, Container, Typography } from '@mui/material';
import { BlogPost } from '../../types/blog';

export default async function BlogPage() {
  const posts = getAllPosts();
    console.log(posts);    
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post: BlogPost) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// Optional: Add metadata
export const metadata = {
  title: 'Blog - Music Portfolio',
  description: 'Read the latest posts about music, technology, and creativity.',
};