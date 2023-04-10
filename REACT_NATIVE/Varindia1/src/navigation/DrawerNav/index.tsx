/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {useTheme} from '../../utils';
import {SideBar} from '../../components';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image} from 'react-native';
import {Home} from '../../screens';
import BottomNav from '../BottomNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: () => (
          <Image
            source={{
              uri: 'https://varindia.com/varindiaapp/images/varindia-logo.png',
            }}
            style={{width: 120, height: 24}}
          />
        ),
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: '#000',
      }}
      drawerContent={props => <SideBar children={true} {...props} />}>
      <Drawer.Screen name="BottomNav" component={BottomNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
