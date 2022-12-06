import * as React from 'react';
import { graphql } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import GlobalStyle from '../styles/GlobalStyle';
import { HomepageMastHead } from '../modules/HomepageMasthead';

type IAllQuery = {
  allContentfulHomepageMasthead: IMastHead;
  allContentfulAsset: contentAssets;
};

export type IMastHead = {
  nodes: Array<{
    heading: string;
    description: {
      raw: string;
    };
    ctaButton: {
      title: string;
      url: string;
    };
  }>;
};
export type contentAssets = {
  nodes: Array<{
    id: string;
    url: string;
    filename: string;
    width: string;
    height: string;
  }>;
};


const IndexPage: React.FC<PageProps<IAllQuery>> = ({ data }) => {
  return (
    <main>
      <GlobalStyle />
      <HomepageMastHead {...data['allContentfulHomepageMasthead'].nodes[0]} images={data['allContentfulAsset'].nodes}/>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;