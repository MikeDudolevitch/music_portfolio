"use client";

import { Box, Container, Typography, Stack, Paper, Chip } from '@mui/material';
import { MusicNote, RecordVoiceOver, Headset } from '@mui/icons-material';

const skills = ['Electronic Music', 'Sound Design', 'Mixing', 'Mastering', 'Live Performance', 'Music Theory'];

export default function AboutSection() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography variant="h3" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Passionate about creating unique sonic experiences that move people
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            alignItems="stretch"
          >
            {/* Main About Text */}
            <Box sx={{ flex: 2 }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                With over [X] years of experience in music production, I specialize in creating 
                immersive electronic soundscapes that blend organic and synthetic elements. 
                My work spans multiple genres, from ambient experimental pieces to high-energy 
                dance tracks.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                I believe music is a universal language that can transport listeners to new 
                emotional territories. Through careful attention to texture, rhythm, and melody, 
                I craft experiences that resonate on both intellectual and visceral levels.
              </Typography>
            </Box>

            {/* Skills & Highlights */}
            <Box sx={{ flex: 1 }}>
              <Paper elevation={2} sx={{ p: 3, height: 'fit-content' }}>
                <Typography variant="h6" gutterBottom>
                  Skills & Expertise
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {skills.map((skill) => (
                    <Chip key={skill} label={skill} variant="outlined" size="small" />
                  ))}
                </Box>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MusicNote color="primary" />
                    <Typography variant="body2">50+ Original Compositions</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <RecordVoiceOver color="primary" />
                    <Typography variant="body2">Professional Studio Setup</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Headset color="primary" />
                    <Typography variant="body2">Live Performance Experience</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}