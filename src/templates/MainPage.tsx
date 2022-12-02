import * as React from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import BaseLayout from '../components/layout/BaseLayout';

interface IDTemplate {
    data: Queries.MainPageTemplateQuery;
}

const MainPageTemplate: React.FC<IDTemplate & PageRendererProps> = ({
    data: {page},
    ...props
}) => {
    console.log(page)
    if(!page){
        return(
            <>
                <h1>Error 404! Page not found</h1>
            </>
        )
    }
    return ( 
        <BaseLayout>
            <h1>Hey its Main page</h1>
        </BaseLayout>
    )
}

export default MainPageTemplate;

export const query = graphql`
  query MainPageTemplate($id: String!) {
    page: contentfulPages(id: { eq: $id }) {
      ...Page
    }
  }
`;