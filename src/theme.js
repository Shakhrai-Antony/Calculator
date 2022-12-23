const baseTheme = {
  colors: {
    dark: '#1c1c1c',
    defaultWhite: '#fff',
    defaultBlack: '#000',
    lightGrey: '#a9a9a9',
    darkGrey: '#696969',
    sienna: '#A0522D',
    tomato: '#FF6347',
    lightSlateGray: '#778899',
    lavender: '#E6E6FA',
    grayishBlue: '#282c34',
  },
  sizes: {
    width: 42 | 70 | 350 | 400 | 700,
    height: 42 | 120,
  },
};

export const lightTheme = {
  ...baseTheme,
  body: baseTheme.colors.defaultWhite,
};
export const darkTheme = {
  ...baseTheme,
  body: baseTheme.colors.defaultBlack,
};
