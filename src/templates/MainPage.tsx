import * as React from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import BaseLayout from '../components/layout/BaseLayout';
import { HomepageMastHead } from '../modules/HomepageMasthead';
import { TabbedImageCallout } from '../modules/TabbedImageCallout';

interface IDTemplate {
  data: Queries.MainPageTemplate;
}

const MainPageTemplate: React.FC<IDTemplate & PageRendererProps> = ({
    data: { page, lineAsset, dotsAsset, tabAsset },
    ...props
}) => {
    if (!page) {
        return (
            <>
                <h1>Error 404! Page not found</h1>
            </>
        );
    }
    return (
      <BaseLayout>
        <HomepageMastHead
          {...page.content[0]}
          images={[lineAsset, dotsAsset]}
        />
        <TabbedImageCallout {...page.content[1]} tabBackground={tabAsset} />
      </BaseLayout>
    );
};

export default MainPageTemplate;

export const query = graphql`
  query MainPageTemplate($id: String!) {
    page: contentfulPages(id: { eq: $id }) {
      ...Page
    }
    lineAsset: contentfulAsset(filename: { eq: "line.png" }) {
      ...Image
    }
    dotsAsset: contentfulAsset(filename: { eq: "dots.png" }) {
      ...Image
    }
    tabAsset: contentfulAsset(filename: { eq: "TabBackground.png" }) {
      ...Image
    }
  }
`;
