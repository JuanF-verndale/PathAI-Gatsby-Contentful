import styled from "styled-components";
import { media } from "../styles/media";

export const Container = styled.section`
    margin-inline: auto;
    max-width: 1440px;
    padding-inline: 20px;
    ${media.greaterThan('tabletLandscape')`
        padding-inline: 80px;
    `};

    ${media.greaterThan('desktop')`
        padding-inline: 120px;
    `};

    ${media.greaterThan('wide')`
        padding-inline: 192px;
    `};
`;