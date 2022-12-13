import * as React from 'react'
import GlobalStyle from '../../styles/GlobalStyle';
import { IPageSeo, SEO } from '../../components/PageSEO';

interface IBaseLayout {
    children?:React.ReactNode;
    seo?:IPageSeo;
}

const BaseLayout: React.FC<IBaseLayout> = ({children, seo}) => {
    return(
        <>     
        {/* In SEO I pull the metadata from graphql for the title and lang */}
            <SEO {...seo}/>
            <GlobalStyle />
            <main>{children}</main>
        </>
    )
}

export default BaseLayout;