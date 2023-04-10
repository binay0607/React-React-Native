import {useSelector} from 'react-redux';

/**
 * Define Const color use for whole application
 */
export const BaseColor = {
  grayColor: '#9B9B9B',
  dividerColor: '#BDBDBD',
  whiteColor: '#FFFFFF',
  fieldColor: '#F5F5F5',
  yellowColor: '#FDC60A',
  navyBlue: '#3C5A99',
  kashmir: '#5D6D7E',
  orangeColor: '#E54335',
  blueColor: '#2B6DFF',
  pinkColor: '#A569BD',
  greenColor: '#58D68D',
  cardColorCheckOut: '#94e2f4',
  cardButtonColorCheckOut: '#04b9e6',
  cardCheckBoxColorCheckOutPage: '#009688',
  fbButtonColor: '#0071ff',
  logoColor: '#0071ff',
  border: '#c7c7cc',
  placeholderTextColor: '#bebebe',
};

/**
 * Define Const list theme use for whole application
 */
export const ThemeSupport = [
  {
    themes: 'orange',
    light: {
      dark: false,
      colors: {
        primary: '#E5634D',
        primaryDark: '#C31C0D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        border: '#c7c7cc',
        buttonColor: '#FF8A65',
        borderColor: '#eeeeee', //light side of gray
        tabTextColor: '#9e9e9e',
        headerTextColor: '#111111',
        bodyTextColor: 'black',
        logoColor: '#0071ff',
        textgrayColor: 'rgba(17, 17, 17, 0.5)',
        insidebuttonTextWhiteColor: '#fff',
        greenColor: '#38a158',
        violetColor: '#a264da',
        pinkColor: '#ef1da9',
        bodybackground: 'white',
        textColorblackOrwhite: 'rgba(0,0,0, 0.8)',
        textinputbackground: 'lightgray',
        placeholderTextColor: 'black',
        lightborderbuttom: '#cfcfcf',
        searchBarBackground: '#F8F8F8',
        exerciseBackground: '#7bc5ff',
        lessonborderColor: '#E8E8E8',
        settingsborderColor: '#F8F8F8',
        exerciseOptionTxtbg: 'white',
        exerciseInputTxt: '#B1DFFF',
        logtext: 'rgba(52, 52, 52, 0.0)',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#E5634D',
        primaryDark: '#C31C0D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: '#050825',
        card: '#F5F5F5',
        text: '#e5e5e7',
        border: '#FF8A65',
        buttonColor: '#FF8A65',
        borderColor: '#465177',
        tabTextColor: '#9e9e9e',
        headerTextColor: '#0071ff',
        bodyTextColor: 'white',
        logoColor: '#0071ff',
        textgrayColor: 'rgba(17, 17, 17, 0.5)',
        insidebuttonTextWhiteColor: '#fff',
        greenColor: '#38a158',
        violetColor: '#a264da',
        pinkColor: '#ef1da9',
        bodybackground: 'black',
        textColorblackOrwhite: 'rgba(255,255,255, 0.3)',
        textinputbackground: 'gray',
        placeholderTextColor: '#bebebe',
        lightborderbuttom: '#cfcfcf',
        searchBarBackground: '#1a1e4b',
        exerciseBackground: 'black',
        lessonborderColor: '#4d597f',
        settingsborderColor: '',
        exerciseOptionTxtbg: '#0e103b',
        exerciseInputTxt: '#0e103b',
        logtext: 'rgba(52, 52, 52, 0.1)',
      },
    },
  },
  {
    themes: 'blue',
    light: {
      dark: false,
      colors: {
        primary: '#5DADE2',
        primaryDark: '#1281ac',
        primaryLight: '#68c9ef',
        accent: '#FF8A65',
        background: 'white',
        card: '#F5F5F5', //whitesmoke
        textblack: '#212121', //black
        border: '#c7c7cc', //light gray
        buttonColor: '#0071ff', //dodger blue
        borderColor: '#eeeeee', //light side of gray
        tabTextColor: '#9e9e9e',
        headerTextColor: '#111111', //gray
        bodyTextColor: 'black',
        logoColor: '#0071ff',
        textgrayColor: 'rgba(17, 17, 17, 0.5)',
        insidebuttonTextWhiteColor: '#fff',
        greenColor: '#38a158',
        violetColor: '#a264da',
        pinkColor: '#ef1da9',
        bodybackground: 'white',
        textColorblackOrwhite: 'rgba(0,0,0, 0.8)',
        textinputbackground: 'white',
        placeholderTextColor: 'black',
        lightborderbuttom: '#cfcfcf',
        searchBarBackground: '#F8F8F8',
        exerciseBackground: '#7bc5ff',
        lessonborderColor: '#E8E8E8',
        settingsborderColor: '#F8F8F8',
        exerciseOptionTxtbg: 'white',
        exerciseInputTxt: '#B1DFFF',
        logtext: 'rgba(52, 52, 52, 0.0)',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#5DADE2',
        primaryDark: '#1281ac',
        primaryLight: '#68c9ef',
        accent: '#FF8A65',
        background: '#050825',
        card: '#F5F5F5',
        text: '#e5e5e7',
        border: '#0071ff',
        textblack: '#fff', //black
        buttonColor: '#0071ff',
        borderColor: '#465177',
        tabTextColor: '#9e9e9e',
        headerTextColor: '#0071ff',
        bodyTextColor: 'white',
        logoColor: '#0071ff',
        textgrayColor: 'rgba(17, 17, 17, 0.5)',
        insidebuttonTextWhiteColor: '#fff',
        greenColor: '#38a158',
        violetColor: '#a264da',
        pinkColor: '#ef1da9',
        bodybackground: 'black',
        textColorblackOrwhite: 'rgba(255,255,255, 0.3)',
        textinputbackground: 'white',
        placeholderTextColor: '#bebebe',
        lightborderbuttom: '#cfcfcf',
        searchBarBackground: '#1a1e4b',
        exerciseBackground: 'black',
        lessonborderColor: '#4d597f',
        settingsborderColor: '',
        exerciseOptionTxtbg: '#0e103b',
        exerciseInputTxt: '#0e103b',
        logtext: 'rgba(52, 52, 52, 0.1)',
      },
    },
  },
];

/**
 * Define default theme use for whole application
 */
export const DefaultTheme = {
  themes: 'blue',
  light: {
    dark: false,
    colors: {
      primary: '#5DADE2',
      primaryDark: '#1281ac',
      primaryLight: '#68c9ef',
      accent: '#FF8A65',
      background: 'white',
      card: '#F5F5F5', //whitesmoke
      textblack: '#212121', //black
      border: '#c7c7cc', //light gray
      buttonColor: '#0071ff', //dodger blue
      borderColor: '#eeeeee', //light side of gray
      tabTextColor: '#9e9e9e',
      headerTextColor: '#111111', //gray
      bodyTextColor: 'black',
      logoColor: '#0071ff',
      textgrayColor: 'rgba(17, 17, 17, 0.5)',
      insidebuttonTextWhiteColor: '#fff',
      greenColor: '#38a158',
      violetColor: '#a264da',
      pinkColor: '#ef1da9',
      bodybackground: 'white',
      textColorblackOrwhite: 'rgba(0,0,0, 0.8)',
      textinputbackground: 'white',
      placeholderTextColor: 'black',
      lightborderbuttom: '#cfcfcf',
      searchBarBackground: '#F8F8F8',
      exerciseBackground: '#7bc5ff',
      lessonborderColor: '#E8E8E8',
      settingsborderColor: '#F8F8F8',
      exerciseOptionTxtbg: 'white',
      exerciseInputTxt: '#B1DFFF',
      logtext: 'rgba(52, 52, 52, 0.0)',
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: '#5DADE2',
      primaryDark: '#1281ac',
      primaryLight: '#68c9ef',
      accent: '#FF8A65',
      background: '#050825',
      card: '#F5F5F5',
      text: '#e5e5e7',
      border: '#0071ff',
      buttonColor: '#0071ff',
      borderColor: '#465177',
      tabTextColor: '#9e9e9e',
      headerTextColor: '#0071ff',
      bodyTextColor: 'white',
      logoColor: '#0071ff',
      textgrayColor: 'rgba(17, 17, 17, 0.5)',
      insidebuttonTextWhiteColor: '#fff',
      greenColor: '#38a158',
      violetColor: '#a264da',
      pinkColor: '#ef1da9',
      bodybackground: 'black',
      textColorblackOrwhite: 'rgba(255,255,255, 0.3)',
      textinputbackground: 'white',
      placeholderTextColor: '#bebebe',
      lightborderbuttom: '#cfcfcf',
      searchBarBackground: '#1a1e4b',
      exerciseBackground: 'black',
      lessonborderColor: '#4d597f',
      settingsborderColor: '',
      exerciseOptionTxtbg: '#0e103b',
      exerciseInputTxt: '#0e103b',
      logtext: 'rgba(52, 52, 52, 0.1)',
    },
  },
};

/**
 * Define list font use for whole application
 */
export const FontSupport = ['Raleway', 'Roboto', 'Merriweather'];

/**
 * Define font default use for whole application
 */
export const DefaultFont = 'Raleway';

/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const isDarkMode = useDarkMode();
  const forceDark = useSelector(state => state.application.force_dark);
  const themeStorage = useSelector(state => state.application.theme);
  const listTheme = ThemeSupport.filter(item => item.themes === themeStorage);
  const theme = listTheme.length > 0 ? listTheme[0] : DefaultTheme;

  if (forceDark) {
    return {theme: theme.dark, colors: theme.dark.colors};
  }
  if (forceDark === false) {
    return {theme: theme.light, colors: theme.light.colors};
  }
  return isDarkMode
    ? {theme: theme.dark, colors: theme.dark.colors}
    : {theme: theme.light, colors: theme.light.colors};
};

/**
 * export font for application
 * @returns font
 */
export const useFont = () => {
  const font = useSelector(state => state.application.font);
  return font ?? DefaultFont;
};
