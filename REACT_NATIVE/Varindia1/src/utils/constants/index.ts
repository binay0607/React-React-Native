import {
  Platform,
  UIManager,
  LayoutAnimation,
  PixelRatio,
  Dimensions,
  I18nManager,
} from 'react-native';

const scaleValue = PixelRatio.get() / 2;
export const enableExperimental = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

export const scaleWithPixel = (size: number, limitScale = 1.2) => {
  /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
  const value = scaleValue > limitScale ? limitScale : scaleValue;
  return size * value;
};

export const heightHeader = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const landscape = width > height;

  if (Platform.OS === 'android') {
    return 45;
  }
  switch (height) {
    case 375:
    case 414:
    case 812:
    case 896:
      return landscape ? 45 : 88;
    default:
      return landscape ? 45 : 65;
  }
};

export const heightTabView = () => {
  const height = Dimensions.get('window').height;
  let size = height - heightHeader();
  switch (height) {
    case 375:
    case 414:
    case 812:
    case 896:
      size -= 30;
      break;
    default:
      break;
  }

  return size;
};

export const getWidthDevice = () => {
  return Dimensions.get('window').width;
};

export const getHeightDevice = () => {
  return Dimensions.get('window').height;
};

export const scrollEnabled = (_contentWidth: any, contentHeight: number) => {
  return contentHeight > Dimensions.get('window').height - heightHeader();
};

export const languageFromCode = (code: any) => {
  switch (code) {
    case 'en':
      return 'English';
    case 'ar':
      return 'Arabic';
    case 'por':
      return 'Portuguese';
  }
};

export const isLanguageRTL = (code: any) => {
  switch (code) {
    case 'ar':
      return true;
    default:
      return false;
  }
};

export const reloadLocale = (oldLanguage: any, newLanguage: any) => {
  const oldStyle = isLanguageRTL(oldLanguage);
  const newStyle = isLanguageRTL(newLanguage);
  if (oldStyle !== newStyle) {
    I18nManager.forceRTL(newStyle);
  }
};

export function compare(arr1: any[], arr2: any[]) {
  if (!arr1 || !arr2) return;
  let result;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
export function convertToRoman(num: number) {
  let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let RomanArr = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let result = [];

  const findElement = (e: number) => {
    return e <= num;
  };

  while (num > 0) {
    let nextHighest = numberArr.find(findElement);

    result.push(RomanArr[numberArr.indexOf(nextHighest)]);
    num -= nextHighest;
  }
  let newResult = result.join('');

  return newResult;
}
