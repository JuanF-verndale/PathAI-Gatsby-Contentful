import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from '../styles/theme';
import { media } from './media';
import './fonts.module.css';
const stylesP = theme;

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    body{
        font-family:${stylesP.fonts.primary};
        color:${stylesP.colors.spaceCadet};
        font-size:16px;
        ${media.greaterThan('tabletLandscape')`
            font-size:18px;
        `}
    }
    main{
        max-inline-size:1440px;
        margin-inline:auto;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        line-height: 120%;
        margin: 0 0 10px;
    }
    h1 {
        font-size:40px;
        line-height:100%;
        ${media.greaterThan('tabletLandscape')`
            font-size:60px;
            line-height:120%;
        `}
    }
    h2{
        font-size:34px;
        ${media.greaterThan('tabletLandscape')`
            font-size:44px;
        `}
    }
    h3{
        font-size:27px;
        ${media.greaterThan('tabletLandscape')`
            font-size:36px;
        `}
    }
    h4{
        font-size:22px;
        ${media.greaterThan('tabletLandscape')`
            font-size:24px;
        `}
    }
    h5{
        font-size:18px;
        ${media.greaterThan('tabletLandscape')`
                font-size:21px;
        `}
    }
    a{
        font-size: 16px;
        text-decoration:none;
        ${media.greaterThan('tabletLandscape')`
            font-size:18px;
        `}
    }
    button {
        font-family:${stylesP.fonts.primary};
    }
`;

export default GlobalStyle;
