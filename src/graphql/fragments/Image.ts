import { graphql } from "gatsby";

export const fragment = graphql`
  fragment Image on ContentfulAsset {
    id
    url
    filename
    width
    height
  }
`;