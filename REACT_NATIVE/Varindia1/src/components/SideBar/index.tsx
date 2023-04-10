/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Image,
  Linking,
  TouchableOpacity,
  View,
  DrawerActions,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {useTheme} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const SideBar = (props: any) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (itemName: any) => {
    // navigation.toggleDrawer();
    setSelectedItem(itemName);
    navigation.navigate(itemName);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background, //'#0f88c4',
        }}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 25,
              paddingLeft: 10,
              backgroundColor: '#fff',
            }}>
            <View style={{marginLeft: 15}}>
              <Image
                source={{
                  uri: 'https://varindia.com/varindiaapp/images/varindia-logo.png',
                }}
                style={{width: 120, height: 24}}
              />
            </View>
          </View>
          <Drawer.Section>
            <DrawerItem
              label="Home"
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              onPress={() => handleItemClick('BottomNav')}
              active={selectedItem === 'Item 1'}
              labelStyle={{color: '#FF5733', fontSize: 16, fontWeight: 'bold'}}
              inactiveTintColor={'red'}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Cyber Security"
              icon={({color, size}) => (
                <Icon name="search-outline" color={color} size={size} />
              )}
              labelStyle={{color: '#FF5733', fontSize: 16, fontWeight: 'bold'}}
              inactiveTintColor={'red'}
              onPress={() => handleItemClick('CyberSecurity')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Movers & Shakers"
              icon={({color, size}) => (
                <Icon name="person-outline" color={color} size={size} />
              )}
              onPress={() => handleItemClick('MoversShakers')}
              labelStyle={{color: '#FF5733', fontSize: 16, fontWeight: 'bold'}}
              inactiveTintColor={'#FF5733'}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Start-up"
              icon={({color, size}) => (
                <Icon
                  name="information-circle-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => handleItemClick('StartUp')}
              labelStyle={{color: '#FF5733', fontSize: 16, fontWeight: 'bold'}}
              inactiveTintColor={'#FF5733'}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Technotainment"
              icon={({color, size}) => (
                <Icon
                  name="chatbox-ellipses-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => handleItemClick('Technotainment')}
              labelStyle={{color: '#FF5733', fontSize: 16, fontWeight: 'bold'}}
              inactiveTintColor={'#FF5733'}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Tech Trend"
              icon={({color, size}) => (
                <Icon name="help-circle-outline" color={color} size={size} />
              )}
              onPress={() => handleItemClick('TechTrend')}
              labelStyle={{color: '#FF5733', fontSize: 16, fontWeight: 'bold'}}
              inactiveTintColor={'#FF5733'}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Var Speak"
              icon={({color, size}) => (
                <Icon name="share-social-outline" color={color} size={size} />
              )}
              onPress={() => handleItemClick('VarSpeak')}
              labelStyle={{color: '#FF5733', fontSize: 16, fontWeight: 'bold'}}
              inactiveTintColor={'#FF5733'}
            />
          </Drawer.Section>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://varindia.com/admanager/www/delivery/ck.php?oaparams=2__bannerid=13__zoneid=1__cb=b90b069c72__oadest=https%3A%2F%2Fwww.teamviewer.com%2Fen%2Fcontent%2Fchannel-partner-registration-india',
              );
            }}>
            <Image
              source={{
                uri: 'https://varindia.com/varindiaapp/images/team-viewer.jpg',
              }}
              style={{width: '100%', height: 208}}
            />
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>
    </>
  );
};

export default SideBar;
