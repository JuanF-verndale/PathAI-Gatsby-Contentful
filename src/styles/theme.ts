type ThemeType = {
  fonts: {
    [key: string]: string;
  },
  colors: {
    [key: string]: string;
  };
};

export const theme:ThemeType = {
  fonts: {
    primary: 'Allotrope, sans-serif',
  },
  colors: {
    black: '#000000',
    white: '#ffffff',
    persianGreen: '#2AA095',
    blueViolet: '#793EF8',
    spaceCadet: '#2D2849',
    lightGray1: '#EEEEEE',
    lightGray2: '#EFEFEF',
    lightGray3: '#F6F6F6',
    darkGray2: '#494949',
    darkGray4: '#D1D1D1',
    frenchRaspberry: '#C5304B',
    java: '#13D2C9',
    royalBlue: '#7542ED',
    eagleGreen: '#195866',
    turquoise: '#4CEAD3',
    red: '#D83400',
    successGreen: '#00BC78',
  },
};