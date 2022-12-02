import { generateMedia } from 'styled-media-query';

export const breakpoints = {
  mobile: '360px',
  tabletPortrait: '768px',
  tabletLandscape: '1024px',
  desktop: '1280px',
  wide: '1600px',
  full: '1920px',
};

export const media = generateMedia(breakpoints);
