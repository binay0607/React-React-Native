import {BaseSetting} from './localization';
import {
  enableExperimental,
  scaleWithPixel,
  heightHeader,
  heightTabView,
  getWidthDevice,
  getHeightDevice,
  scrollEnabled,
  languageFromCode,
  isLanguageRTL,
  reloadLocale,
} from './constants';
import {
  BaseColor,
  useTheme,
  useFont,
  FontSupport,
  ThemeSupport,
  DefaultFont,
} from './theme';
import helper from './helper';
import {buildURLQuery, checkNetwork, getFormData} from './network';
import {Metrics, scale, moderateScale, verticalScale} from './Metrics';

export {
  BaseColor,
  BaseSetting,
  useTheme,
  useFont,
  FontSupport,
  DefaultFont,
  ThemeSupport,
  enableExperimental,
  scaleWithPixel,
  heightHeader,
  heightTabView,
  getWidthDevice,
  getHeightDevice,
  scrollEnabled,
  languageFromCode,
  isLanguageRTL,
  reloadLocale,
  helper,
  checkNetwork,
  buildURLQuery,
  getFormData,
  Metrics,
  scale,
  moderateScale,
  verticalScale,
};
