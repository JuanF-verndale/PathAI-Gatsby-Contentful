import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { RichText } from '../components/RichText';
import { media } from '../styles/media';
import { graphql } from 'gatsby';

interface IHomepageMasthead {
  heading: string | null;
  description: {
    raw: string | null;
  };
  ctaButton: {
    title: string | null;
    url: string | null;
  } | null;
  images: Array<{
    id: string;
    url: string;
    filename: string;
    width: string;
    height: string;
  }>;
}

export const HomepageMastHead: React.FC<IHomepageMasthead> = ({
  heading,
  description,
  ctaButton,
  images,
}) => {
  return (
    <Wrapper>
      <LeftImage
        src={images[0].url}
      /> 
      <InnerContainer>
        <h1>{heading}</h1>
        <Description>{description}</Description>
        <Button>{ctaButton?.title}</Button>
      </InnerContainer>
      <BackgroundImage
        src={images[1].url}
      /> 
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block: 20px 33px;
  position: relative;
  overflow: hidden;
  ${media.greaterThan('tabletLandscape')`
        margin-block: 35px 100px;
        padding-block-start:164px;
        height:100vh;
        width:100%;
    `}
`;

const InnerContainer = styled.div`
  width: 75%;
  margin-inline-start: 40px;
  ${media.greaterThan('tabletLandscape')`
        max-width:568px;
        margin-inline-start:192px;
    `}
`;

const LeftImage = styled.img`
  position: absolute;
  margin-inline: 12px 0;
  height: calc(100% - 30px);
  ${media.greaterThan('tabletLandscape')`
        margin-inline-start: 120px;
        margin-block-start:24px;
        max-height: 393px;
    `}
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: -101px;
  right: -154px;
  z-index: -1;
  height: 511px;
  ${media.greaterThan('tabletLandscape')`
        width: 100%;
        height: 100%;
        top:0;
        right:0;
    `}
`;

const Description = styled(RichText)`
  margin-block: 20px 40px;
  ${media.greaterThan('tabletLandscape')`
        line-height: 180%;
        margin-block-end: 20px;
    `}
`;
