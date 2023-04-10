/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Home, Videopage, Pdfview} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/FontAwesome';

import {BaseColor, useTheme} from '../../utils';
import {useTranslation} from 'react-i18next';
const BottomTab = createBottomTabNavigator();

const BottomNav = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        inactiveTintColor: BaseColor.grayColor,
        activeTintColor: colors.buttonColor,
        showLabel: false,
        tabStyle: {
          backgroundColor: colors.background,
          height: 60,
          paddingBottom: 12,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: t('home'),
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Videopage"
        component={Videopage}
        options={{
          tabBarLabel: t('Video'),
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'videocam' : 'videocam-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Pdfview"
        component={Pdfview}
        options={{
          tabBarLabel: t('Pdfview'),
          tabBarIcon: ({color, focused}) => (
            <Icon3 name={'file-pdf'} size={28} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={Home}
        options={{
          tabBarLabel: t('Market'),
          tabBarIcon: ({color, focused}) => (
            <Icon name={'settings'} size={28} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNav;
