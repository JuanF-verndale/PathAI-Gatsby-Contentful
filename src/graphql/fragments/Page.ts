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
        name
        tabHeadings {
          name
          animatedImage {
            url
            height
            width
            title
          }
          title {
            raw
          }
          description {
            raw
          }
          ctaLink {
            title
            url
            element
          }
        }
      }
    }
  }
`;