import React from 'react';
import { theme } from '../styles/theme';
import styled, { css } from 'styled-components';
import { HexIcon, ArrowIcon, ExternalLink } from '../images/svg';

interface CTALink {
  title: string;
  url: string;
  element: string;
}

export const CTALink = (props: CTALink) => {
  const { title, url, element } = props;
  return (
    <Link href={url} target={element === 'Link' ? '_self' : '_blank'}>
      {title}
      <CtaArrow isExternal={element !== 'Link'}>
        {element === 'Link' ? <ArrowIcon /> : <ExternalLink />}
      </CtaArrow>
    </Link>
  );
};

const Link = styled.a`
  color: ${theme.colors.spaceCadet};
  font-weight: 500;
  line-height: 28.8px;
  display: flex;
`;

/* When using styled components i can send props or values like conditionals like down here */
const CtaArrow = styled.span<{ isExternal?: boolean }>`
  display: inline-flex;
  opacity: 1;
  svg {
    margin-inline-start: 13px;
  }
  ${(props) =>
    props.isExternal
      ? css`
          svg {
            width: 13px;
            height: 13px;
          }
        `
      : css`
          svg {
            width: 11px;
            height: 8px;
          }
        `}
`;
