/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {ExtendedTheme} from '@react-navigation/native';
import {
  ViewStyle,
  StyleSheet,
  Dimensions,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {Metrics} from '../../utils';
import {normalize} from '../../utils/constants';
import font from '../../utils/fonts';
interface Style {
  textContent: StyleProp<TextStyle>;
  textByView: StyleProp<TextStyle>;
  newsCover: StyleProp<ViewStyle>;
  imageView: StyleProp<ImageStyle>;
  textView: StyleProp<ViewStyle>;
  textTitleView: StyleProp<TextStyle>;
  image4Icon: StyleProp<ViewStyle>;
  nextChapterText: StyleProp<ViewStyle>;
  chapterHeaderTxtView: StyleProp<ViewStyle>;
  activityIndicator: StyleProp<ViewStyle>;
  headerView: StyleProp<ViewStyle>;
  flatlistCardView: StyleProp<ViewStyle>;
  circleView: StyleProp<ViewStyle>;
  newWorldWine: StyleProp<ViewStyle>;
  chapterIIIText: StyleProp<ViewStyle>;
  chapterIIText: StyleProp<ViewStyle>;
  groupView: StyleProp<ViewStyle>;
}
export default (theme: ExtendedTheme) => {
  const {colors} = theme;
  return StyleSheet.create<Style>({
    textContent: {
      textAlign: 'justify',
      color: '#666666',
      position: 'relative',
      marginBottom: 0,
    },
    textByView: {
      paddingBottom: 15,
      color: '#999999',
      fontSize: 12,
    },
    newsCover: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#eaeaeaff',
      margin: 5,
      borderRadius: 10,
    },
    imageView: {
      width: Metrics.screenWidth - 10,
      height: Metrics.screenWidth / 2,
      borderRadius: 10,
      backgroundColor: 'transparent',
    },
    textView: {
      width: Metrics.screenWidth,
      padding: 10,
    },
    textTitleView: {
      fontSize: 14,
      color: '#000',
      textAlign: 'left',
      fontWeight: '800',
      marginTop: 10,
    },
    activityIndicator: {
      marginRight: 5,
      alignContent: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    nextChapterText: {
      marginTop: 18,
      marginLeft: 5,
      fontSize: normalize(18),
      // fontWeight: "500",
      fontFamily: font.Poppinsmedium,
      color: colors.bodyTextColor,
      textAlign: 'left',
    },
    headerView: {
      height: 50,
      marginVertical: 10,
      marginHorizontal: 10,
      justifyContent: 'center',
    },
    flatlistCardView: {
      backgroundColor: colors.background,
      width: '90%',
      marginLeft: 20,
      borderRadius: 10,
      height: 100,
      flexDirection: 'row',
      // marginHorizontal: 10,
      marginVertical: 4,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 8,
      borderColor: colors.lessonborderColor,

      borderStyle: 'solid',
      borderWidth: 0.5,
      //elevation: 5,
      // width: ScreenWidth - 40,
      margin: 5,
    },
    circleView: {
      borderRadius: 50,
      width: 60,
      height: 60,
      borderWidth: 1,
      // elevation: 2,
      borderColor: colors.borderColor,
      justifyContent: 'center',
    },
    groupView: {
      alignSelf: 'center',
      textAlign: 'left',
      flex: 0.8,
    },
    chapterIIText: {
      marginTop: 5,
      marginLeft: 0,
      fontSize: normalize(12),
      fontFamily: font.Poppinslight,
      // color: "rgba(17, 17, 17, 0.5)",
      color: 'gray',
      textAlign: 'left',
    },
    chapterIIIText: {
      marginTop: 5,
      marginLeft: 0,
      fontSize: normalize(12),
      fontFamily: font.Poppinslight,
      color: '#0071FF',
      textAlign: 'left',
    },
    newWorldWine: {
      fontSize: normalize(14),

      fontFamily: font.Poppinsmedium,
      color: colors.bodyTextColor,
      textAlign: 'left',
    },
    groupView1: {
      alignSelf: 'center',
    },
  });
};
