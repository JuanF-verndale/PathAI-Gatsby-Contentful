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
      <HexContainer>
        <HexIcon />
      </HexContainer>
    </Link>
  );
};

/* When using styled components i can send props or values like conditionals like down here */
const CtaArrow = styled.span<{ isExternal?: boolean }>`
  display: inline-flex;
  opacity: 1;
  transition: all 0.3s ease-in-out;
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

const HexContainer = styled.span`
  opacity: 0;
  transform: translateX(0);
  display: inline-flex;
  transition: all 0.3s ease-in-out;
  svg {
    width: 20px;
    height: 30px;
    margin-left: 13px;
  }
`;

const Link = styled.a`
  color: ${theme.colors.spaceCadet};
  font-weight: 500;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-block: 20px;
  &:hover {
    ${CtaArrow} {
      transform: translateX(30px);
    }
    ${HexContainer} {
      transform: translateX(-20px);
      opacity:1;
    }
  }
`;