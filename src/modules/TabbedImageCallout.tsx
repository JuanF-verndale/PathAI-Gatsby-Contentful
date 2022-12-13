import React, {useState, useRef, useEffect} from 'react';
import styled, {css} from 'styled-components';
import { media } from '../styles/media';
import { theme } from '../styles/theme';
import { RichText } from '../components/RichText';
import { CTALink } from '../components/CTALink';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

interface ITabbedImageCallout {
    tabHeadings: Array<TabHeadings>;
    tabBackground: {
        id: string;
        url: string;
        filename: string;
        width: string;
        height: string;
        title: string;
    };
}

type TabHeadings = {
    name:string;
    animatedImage: {
        url: string;
        height: string;
        width: string;
        title: string;
    };
    title: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    ctaLink: Array<CTALink>;
};

type CTALink = {
    title:string;
    url:string;
    element:string;
}

type TabHeader = {
    id: string;
    title:string;
}

type Tab = {
    id: string;
    animatedImage: {
        url: string;
        height: string;
        width: string;
        title: string;
    };
    title: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    description:RenderRichTextData<ContentfulRichTextGatsbyReference>;
    ctaLink: Array<CTALink>;
};

export const TabbedImageCallout: React.FC<ITabbedImageCallout> = ({
    tabHeadings,
    tabBackground
    }) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    const activeTabRef = useRef<HTMLButtonElement>(null);
    const tabPanelContentRef = useRef<HTMLDivElement>(null);
    const tabHeadingRef = useRef<HTMLDivElement>(null);

    const tabHeaders:Array<TabHeader> = [];
    const tabContent: Array<Tab> = [];
    tabHeadings.forEach((tab,index)=> {
        tabHeaders.push({ id: `${index}`, title:tab.name});
        tabContent.push({ 
            id: `${index}`,
            title: tab.title,
            description:tab.description,
            ctaLink:tab.ctaLink,
            animatedImage:tab.animatedImage
        })
    })

    //Handle Tabs
    const handleTab = (id:string) => {
        const index = tabContent.findIndex((tab) => tab.id === id);
        setActiveTabIndex(index);
    }
    return (
      <Wrapper>
        <TabContainer>
          <TabContent ref={tabPanelContentRef}>
            <TabHeaders ref={tabHeadingRef}>
              {tabHeaders.map((h, index) => (
                <Header
                  key={index}
                  onClick={() => handleTab(h.id)}
                  ref={index === activeTabIndex ? activeTabRef : null}>
                  {h.title}
                </Header>
              ))}
            </TabHeaders>
            {tabContent.map((c, index) => (
              <Content key={index} isSelected={index === activeTabIndex}>
                <RichText>{c.title}</RichText>
                <RichText>{c.description}</RichText>
                <LinkContainer>
                  {c.ctaLink &&
                    c.ctaLink.map((l, index) => (
                      <CTALink
                        key={index}
                        title={l.title}
                        url={l.url}
                        element={l.element}
                      />
                    ))}
                </LinkContainer>
              </Content>
            ))}
          </TabContent>
          <TabImages>
            {tabContent.map((c, index) => (
              <TabImg key={index} isSelected={index === activeTabIndex}>
                <img
                  src={c.animatedImage.url}
                  width={c.animatedImage.width}
                  height={c.animatedImage.height}
                  alt={c.animatedImage.title}
                  />
              </TabImg>
            ))}
            <TabBackgroundImage
              src={tabBackground.url}
              width={tabBackground.width}
              height={tabBackground.height}
              alt={tabBackground.title}
            />
          </TabImages>
        </TabContainer>
      </Wrapper>
    );
};

const Wrapper = styled.section`
    width:90%;
    margin-inline:auto;
    ${media.greaterThan('tabletLandscape')`
        margin-block:100px 0;
    `}
`

const TabContainer = styled.div`
    display:flex;
    flex-direction:column;
    ${media.greaterThan('tabletLandscape')`
        flex-direction:row-reverse;
    `}
`

const TabContent = styled.div`
    flex-basis:50%;
    ${media.greaterThan('tabletLandscape')`
        margin-block-start: 200px;
    `}
`;

const TabImages = styled.div`
    position: relative;
    left: -6%;
    flex-shrink: 0;
    ${media.greaterThan('tabletLandscape')`
        width:100%;
        flex-basis: 50%;
        height:100%;
    `}
`;

const TabBackgroundImage = styled.img`
    width:100%;
    height:51.9%;
    ${media.greaterThan('tabletLandscape')`
        width:100%;
        height:100%;
    `}
`;

const TabImg = styled.div<{isSelected:boolean;}>`
    width: 100%;
    position: absolute;
    z-index: 1;
    top:-11px;
    left:13%;
    img {
        mask-image: url('/images/polygon-mask.svg');
        mask-repeat: no-repeat;
        height: auto;
        width:100%;
        aspect-ratio: 1/1;
    }
    ${(props) => 
        props.isSelected ? 
        css`
            opacity:1;
        `
        :
        css`
            display:none;
            opacity:0;
        `
    }
`;

const TabHeaders = styled.div`
    display: flex;
    gap: 40px;
    width:100%;
    height:40px;
    overflow-x:auto;
    margin-inline: auto 0;
    border-bottom: 1px solid ${theme.colors.darkGray4};
`;

const Header = styled.button`
  background-color: transparent;
  font-weight: 500;
  line-height: 1.2;
  font-size: 18px;
  background-color: transparent;
  border: none;
  white-space: nowrap;
  padding-block: 0 20px;
  color: ${theme.colors.spaceCadet};
`;

const Content = styled.div<{isSelected:boolean;}>`
    margin-top:40px;
    ${(props) => 
        props.isSelected ? 
        css`
            opacity:1;
        `
        :
        css`
            display:none;
            opacity:0;
        `
    }
`

const LinkContainer = styled.div`
    margin-top:10px;
`;