import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  Splash,
  CyberSecurity,
  MoversShakers,
  StartUp,
  Technotainment,
  VarSpeak,
  TechTrend,
  Detailspage,
  VideoDetailspage,
} from '../screens';

import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme, BaseSetting} from '../utils';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import DrawerNav from './DrawerNav';

const RootStack = createStackNavigator();

const Navigation = () => {
  const storeLanguage = useSelector(state => state.application.language);
  const {theme} = useTheme();
  const isDarkMode = useDarkMode();
  useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);
  useEffect((): any => {
    i18n.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      resources: BaseSetting.resourcesLanguage,
      lng: storeLanguage ?? BaseSetting.defaultLanguage,
      fallbackLng: BaseSetting.defaultLanguage,
    });
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={theme}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="BottomNav"
          component={DrawerNav}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="CyberSecurity"
          component={CyberSecurity}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="MoversShakers"
          component={MoversShakers}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="StartUp"
          component={StartUp}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="Technotainment"
          component={Technotainment}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="VarSpeak"
          component={VarSpeak}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="TechTrend"
          component={TechTrend}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="Detailspage"
          component={Detailspage}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen
          name="VideoDetailspage"
          component={VideoDetailspage}
          options={{gestureEnabled: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
