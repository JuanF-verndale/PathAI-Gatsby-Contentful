import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `PathAI-Gatsby-Contentful`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "HFdg3jR_wM_ETExobEVlY9YsdvxpCHN34CfIwvKe-WY",
      "spaceId": "wobjenpnqdms"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components"]
};

export default config;
