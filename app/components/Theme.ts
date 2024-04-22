"use client";
import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';
import { useThemeHook } from '../contexts/ThemeContext';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Theme = () => {
  const { settings } = useThemeHook(); // Get the theme settings using the useTheme hook

  return createTheme({
    palette: {
      mode: settings.mode, // Use the mode from the theme settings
      primary: {
        main: settings.primaryColor, // Use the primaryColor from the theme settings
      },
      secondary: {
        main: '#ff4081', // You can set a default secondary color here
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });
};

export default Theme;
