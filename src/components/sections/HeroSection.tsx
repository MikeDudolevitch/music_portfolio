"use client";

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { PlayArrow, FileDownload } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/MikeJenGreen.jpeg)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Image Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          zIndex: 1
        }}
      >
        <Image
          src="/images/hero-image.jpg"
          alt="Music background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Mike Dudolevitch
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
            >
              Guitarist
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                }}
              >
                Listen Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<FileDownload />}
                component={Link}
                href="/projects"
                sx={{
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: 'white',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                View Projects
              </Button>
            </Stack>
          </Box>

          {/* Profile Image */}
          <Box
            sx={{
              flex: '0 0 300px',
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 300,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              <Image
                src="/images/blog/2024headshot cropped.jpg"
                alt="Your Name"
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}