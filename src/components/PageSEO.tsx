import * as React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../graphql/hooks/siteMetadata';

export interface IPageSeo {
    lang?: string;
    title?: string;
}

export const SEO: React.FC<IPageSeo> = ({
    lang='en',
    title
}) => {
    const siteMetadata = useSiteMetadata();
    const _title = title ? `${title}` : `${siteMetadata.site.siteMetadata.title}`

    return <Helmet title={_title} htmlAttributes={{lang}}/>
}