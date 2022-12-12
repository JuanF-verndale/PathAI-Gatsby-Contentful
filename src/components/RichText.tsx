import React from 'react';
import styled from 'styled-components';
import { ContentfulRichTextGatsbyReference, renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';

type RichTextValue = {
  children: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  className?: string;
};

const options:Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
  },
};

export const RichText = (props:RichTextValue) => {
    const { children, className } = props;
    return (
      <Container className={className}>
        {renderRichText(children, options)}
      </Container>
    );
}

const Container = styled.div`
    p {
        font-weight: 350;
        line-height: 28.8px;
    }
    em {
        font-style: italic;
    }
    b{
        font-weight: 500;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-block: 40px 20px;
    }
`;