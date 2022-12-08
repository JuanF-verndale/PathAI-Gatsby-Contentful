import React from 'react';
import { theme } from '../styles/theme';
import styled, {css} from 'styled-components';
import {HexIcon, ArrowIcon, ExternalLink} from '../images/svg'

interface CTALink { 
    title:string;
    url:string;
    element: string;
}

export const CTALink = (props: CTALink) => {
    const { title, url, element } = props;
    return (
      <Link href={url} target={element === 'Link' ? '_self' : '_blank'}>
        {title}
        <CtaArrow isExternal={element !== 'Link'}>
          {element === 'Link' ?  <: }
        </CtaArrow>
      </Link>
    );
}

const Link = styled.a`
  color: ${theme.colors.spaceCadet};
  font-weight:500;
  line-height:28.8px;
  display:flex;
`;

const CtaArrow = styled.span<{ isExternal?: boolean }>`
`