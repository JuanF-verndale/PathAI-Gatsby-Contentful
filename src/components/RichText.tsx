import React from 'react';
import styled from 'styled-components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

type RichTextValue = {
    children:{raw:string};
    className?: string;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <b>{text}</b>,
    [MARKS.ITALIC]: (text: string) => <em>{text}</em>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: string) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: string) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node: any, children: string) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node: any, children: string) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node: any, children: string) => <h5>{children}</h5>,
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