import * as React from 'react';
import type { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/allotrope/AllotropeLight/font.woff2"
      as="font"
      crossOrigin="anonymous"
      type="font/woff2"
      key="AllotropeLight"
    />,
    <link
      rel="preload"
      href="/fonts/allotrope/AllotropeMedium/font.woff2"
      as="font"
      crossOrigin="anonymous"
      type="font/woff2"
      key="AllotropeMedium"
    />,
  ]);
};
