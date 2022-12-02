import React from 'react';
import styled from 'styled-components';

//   const images = data['allContentfulAsset'];
//   const test: imageData = images.nodes[5];

type RichTextValue = {
    children:{
        raw: string | null;
    };
    className?: string;
}

export const RichText = (props:RichTextValue) => {
    const { children, className } = props;
    const { raw } = children;
    const richTextTest = JSON.parse(String(raw)).content[0].content[0].value;
    return (
        <Container className={className}>
            {richTextTest}
        </Container>
    );
}

const Container = styled.p`
    font-weight:350;
    line-height:28.8px;
`;