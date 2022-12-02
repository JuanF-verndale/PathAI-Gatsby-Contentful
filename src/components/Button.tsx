import styled from 'styled-components';
import {theme} from '../styles/theme';
import { media } from '../styles/media';

const stylesP = theme;

export const Button = styled.button`
  font-family: ${stylesP.fonts.primary};
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  padding-block: 16px 12px;
  padding-inline: 30px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  border: 0;
  color: ${stylesP.colors.spaceCadet};
  background-color: transparent;
  ${media.greaterThan('tabletLandscape')`
        font-size:18px;
    `};
  &:before {
    content: '';
    z-index: -1;
    top: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(
      180deg,
      ${stylesP.colors.java},
      ${stylesP.colors.royalBlue}
    );
  }
  &:after {
    content: '';
    z-index: -1;
    top: 1px;
    right: 1px;
    position: absolute;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 4px;
    background-color: ${stylesP.colors.white};
  }
`;