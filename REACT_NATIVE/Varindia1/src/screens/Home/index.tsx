/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {Header, SafeAreaContainer, Text} from '../../components';
import createStyles from './Home.style';
import {useTheme} from '../../utils';
import {Metrics} from '../../utils';
import {useTranslation} from 'react-i18next';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {normalize} from '../../utils/constants';
import LatestNews from '../TabScreens/LatestNews/index';
import NewArrivals from '../TabScreens/NewArrivals/index';
import Facetoface from '../TabScreens/Facetoface/index';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {newsLatest} from '../../redux/actions';

const renderScene = SceneMap({
  first: LatestNews,
  second: NewArrivals,
  third: Facetoface,
});
const initialLayout = {width: Metrics.screenWidth};

const Home = () => {
  const [index, setIndex] = useState(0);
  const routes = [
    {key: 'first', title: 'Latest News', data: 1},
    {
      key: 'second',
      title: 'New Arrivals',
      data: 2,
    },
    {key: 'third', title: 'Face to face', data: 3},
  ];
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const homeStyles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        renderLabel={({focused, route}) => {
          return (
            <Text
              style={{
                fontSize: normalize(12),
                fontWeight: 'bold',
                color: focused
                  ? theme.colors.buttonColor
                  : theme.colors.lightborderbuttom,
              }}>
              {route.title}
            </Text>
          );
        }}
        indicatorStyle={{backgroundColor: theme.colors.buttonColor, height: 4}}
        style={{backgroundColor: theme.colors.background}}
        scrollEnabled
        tabStyle={{width: 'auto', paddingLeft: 23}}
      />
    );
  };

  return (
    <SafeAreaContainer>
      {/* <Header
        title={'VarIndia'}
        heardertype={true}
        leftButtonPress={() => navigation.openDrawer()}
        rightButtonPress={function (): void {}}
        imagename={''}
        rightIcon={true}
        rightButtonText={''}
        rightButton={true}
        userName={''}
        leftButton={true}
      /> */}
      <View
        style={{
          width: Metrics.screenWidth,
          height: Metrics.screenHeight,
          backgroundColor: theme.colors.background,
        }}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={homeStyles.container}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default Home;
