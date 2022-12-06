import { graphql } from "gatsby";

export const fragment = graphql`
  fragment Page on ContentfulPages {
    id
    name
    content {
      ... on ContentfulHomepageMasthead {
        id
        heading
        ctaButton {
          title
          url
        }
        description {
          raw
        }
      }
      ... on ContentfulTabbedImageCallout {
        id
      }
    }
  }
`;