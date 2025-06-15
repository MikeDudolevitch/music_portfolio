"use client";

import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import Link from 'next/link';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps): JSX.Element {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ 
        maxWidth: 345, 
        cursor: 'pointer', 
        transition: 'transform 0.2s',
        '&:hover': { transform: 'translateY(-4px)' } 
      }}>
        {post.image && (
          <CardMedia
            component="img"
            height="200"
            image={post.image}
            alt={post.title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {post.excerpt}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {new Date(post.date).toLocaleDateString()}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {post.tags?.map((tag: string) => (
              <Chip key={tag} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}