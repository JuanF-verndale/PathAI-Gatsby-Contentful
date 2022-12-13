import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = (): Queries.SiteMetadataQuery =>
  useStaticQuery<Queries.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

export default useSiteMetadata;
