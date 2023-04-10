import {ExtendedTheme} from '@react-navigation/native';
import {ViewStyle, StyleSheet} from 'react-native';
import {normalize} from '../../utils/constants';

interface Style {
  container: ViewStyle;
  headerview: ViewStyle;
  footer: ViewStyle;
  logo: ViewStyle;
  slogan: ViewStyle;
  version: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerview: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: -130,
    },
    footer: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    logo: {
      width: 130,
      height: 77,
      resizeMode: 'contain',
    },
    slogan: {
      color: 'black',
      fontSize: normalize(12),
      marginTop: 10,
    },
    version: {
      color: 'black',
      fontSize: normalize(10),
      marginBottom: 40,
    },
  });
};
