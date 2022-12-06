import { GatsbyNode } from 'gatsby';
import fs from 'fs';
import path from 'path';

interface ContentfulPage{
    node:{
        id:string;
        template:string;
        uri:string;
    }
}

interface IAllContentfulPagesQuery {
  allContentfulPages:{
    edges:Array<ContentfulPage>;
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
    actions,
    graphql
}) => {
  const { data } = await graphql<IAllContentfulPagesQuery>(`
    query AllContentfulPagesQuery {
      allContentfulPages {
        edges {
          node {
            id
            template
            uri
          }
        }
      }
    }
  `);
  const createPage = (node: ContentfulPage) => {
    const {id,template,uri} = node.node;
    let component = path.resolve(`./src/templates/${template}.tsx`);
    console.log(id)
    if(uri){
        actions.createPage({
            path:uri,
            component,
            context:{id,pagePath:uri}
        })
    }
  }
  data?.allContentfulPages.edges.forEach(node => createPage(node));
}