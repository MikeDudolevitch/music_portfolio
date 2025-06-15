"use client";

import { Box, IconButton, Tooltip } from '@mui/material';
import { 
  Instagram, 
  Twitter, 
  YouTube, 
  Spotify,
  SoundCloud,
  GitHub 
} from '@mui/icons-material';

const socialLinks = [
  { name: 'Spotify', icon: Spotify, url: 'https://spotify.com/artist/yourusername', color: '#1DB954' },
  { name: 'SoundCloud', icon: SoundCloud, url: 'https://soundcloud.com/yourusername', color: '#FF3300' },
  { name: 'YouTube', icon: YouTube, url: 'https://youtube.com/@yourusername', color: '#FF0000' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/yourusername', color: '#E4405F' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername', color: '#1DA1F2' },
  { name: 'GitHub', icon: GitHub, url: 'https://github.com/yourusername', color: '#333' },
];

interface SocialLinksProps {
  size?: 'small' | 'medium' | 'large';
  direction?: 'row' | 'column';
}

export default function SocialLinks({ size = 'medium', direction = 'row' }: SocialLinksProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction,
        gap: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <Tooltip key={social.name} title={social.name}>
            <IconButton
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              size={size}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: social.color,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            >
              <IconComponent />
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
}