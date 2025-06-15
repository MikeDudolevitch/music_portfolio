
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      {/* Add more sections as needed */}
    </Box>
  );
}

export const metadata = {
  title: 'Your Name - Music Producer & Artist',
  description: 'Electronic music producer creating immersive soundscapes and unique sonic experiences.',
};
