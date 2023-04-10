import {ExtendedTheme} from '@react-navigation/native';
import {
  ViewStyle,
  StyleSheet,
  Dimensions,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {BaseColor} from '../../utils/theme';
import font from '../../utils/fonts';
import {Metrics, verticalScale} from '../../utils/Metrics';
interface Style {
  container: StyleProp<ViewStyle>;
  container2: StyleProp<ViewStyle>;
  leftContainer: StyleProp<ViewStyle>;
  midContainer: StyleProp<ViewStyle>;
  midContainer2: StyleProp<ViewStyle>;
  headerTitle: StyleProp<ViewStyle>;
  headerTitle2: StyleProp<ViewStyle>;
  headerTitleright: StyleProp<ViewStyle>;
  rightContainer: StyleProp<ViewStyle>;
  iconButton: StyleProp<ViewStyle>;
  icon: StyleProp<ViewStyle>;
  offline: StyleProp<ViewStyle>;
}
export default (theme: ExtendedTheme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    container: {
      height: 70,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      borderBottomWidth: 0.1,
      borderBottomColor: theme.colors.borderColor,
    },
    container2: {
      height: '10%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      borderBottomWidth: 1,
      borderBottomColor: BaseColor.blueColor,
    },
    leftContainer: {
      flex: 1.5,
      alignItems: 'flex-start',
    },
    midContainer: {
      flex: 3,
      alignItems: 'flex-start',
    },
    midContainer2: {
      flex: 3,
      alignItems: 'flex-start',
    },
    headerTitle: {
      fontSize: 18,
      color: theme.colors.text,
      textAlign: 'center',
      marginLeft: 10,
      fontWeight: '800',
      alignSelf: 'center',
    },
    headerTitle2: {
      fontSize: 16,
      color: theme.colors.text,
      textAlign: 'center',
      fontWeight: '800',
    },
    headerTitleright: {
      fontSize: 20,
      color: '#FF7E0E',
      textAlign: 'center',
      marginLeft: 5,
    },
    rightContainer: {
      flex: 1.5,
      alignItems: 'flex-end',
    },
    iconButton: {
      paddingHorizontal: 16,
      flexDirection: 'row',
      fontWeight: '600',
    },
    icon: {
      width: 40,
      height: 40,
    },
    offline: {
      height: Metrics.size.xxxl,
      backgroundColor: 'rgba(0,0,0, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });
};
