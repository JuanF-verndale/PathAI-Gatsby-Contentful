import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { RichText } from '../components/RichText';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import { media } from '../styles/media';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

interface IHomepageMasthead {
  heading: string | null;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
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
    title: string;
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
      <LeftImage src={images[0].url} alt={images[0].title} width={images[0].width} height={images[0].height}/>
      <InnerContainer>
        <h1>{heading}</h1>
        <Description>{description}</Description>
        <Button>{ctaButton?.title}</Button>
      </InnerContainer>
      <BackgroundImage src={images[1].url} alt={images[1].title} width={images[1].width} height={images[1].height} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block: 20px 33px;
  margin-inline:auto;
  position: relative;
  max-inline-size:1440px;
  overflow:hidden;
  ${media.greaterThan('tabletLandscape')`
        margin-block: 35px 100px;
        padding-block-start:164px;
        padding-inline-start:120px;
        margin-inline:0;
        width:100%;
        overflow:visible;
    `}
`;

const InnerContainer = styled.div`
  width: 75%;
  margin-inline-start: 40px;
  ${media.greaterThan('tabletLandscape')`
        max-width:568px;
        margin-inline-start:0;
    `}
`;

const LeftImage = styled.img`
  position: absolute;
  margin-inline: 12px 0;
  height: calc(100% - 30px);
  ${media.greaterThan('tabletLandscape')`
        margin-block-start:24px;
        max-height: 393px;
        left: 50px;
    `}
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: -101px;
  right: -154px;
  z-index: -1;
  height: 511px;
  ${media.greaterThan('tabletLandscape')`
        width: auto;
        height: auto;
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
