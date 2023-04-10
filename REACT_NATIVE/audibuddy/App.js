import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import 'react-native-gesture-handler';
import ContextProvider from './src/store/XXXXstore';
import LoginScreen from './src/screen/LoginScreen';
import LogoutScreen from './src/screen/LogoutScreen';
import StoresInfoScreen from './src/screen/StoresInfoScreen';
import SettingsScreen from './src/screen/SettingsScreen';
import AuditScreen from './src/screen/AuditScreen';
import HomeScreen from './src/screen/HomeScreen';
import StoreMapScreen from './src/screen/StoreMapScreen';
import VerifyUserScreen from './src/screen/VerifyUserScreen';
import PinScreen from './src/screen/PinScreen';
import SetPinScreen from './src/screen/SetPinScreen';
import UnknownScreen from './src/screen/UnknownScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MapViewScreen from './src/screen/MapViewScreen';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Stores"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          color = focused ? 'white' : '#038fab';
          if (route.name === 'Stores') {
            iconName = 'bars';
            return (
              <LinearGradient
                style={{
                  paddingBottom: 3,
                  alignItems: 'center',
                }}
                colors={['#038fab', '#038fab', '#0a1f3a']}
                locations={[0, 0.6, 0.6]}>
                <View
                  style={{
                    backgroundColor: '#038fab',
                    width: 65,
                    borderRadius: 22,
                    paddingTop: 6,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#0a1f3a',
                      paddingVertical: 8,
                      width: 45,
                      borderRadius: 22,
                      marginBottom: 3,
                      alignItems: 'center',
                    }}>
                    <Icon name={iconName} size={22} color={color} />
                  </View>
                </View>
              </LinearGradient>
            );
          } else if (route.name === 'User') {
            iconName = 'user';
            return (
              <View
                style={{
                  backgroundColor: '#0a1f3a',
                  paddingTop: 5,
                  paddingBottom: 3,
                  width: 85,
                  borderTopRightRadius: 45,
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    width: 50,
                    backgroundColor: '#0a1f3a',
                    paddingVertical: 10,
                    alignItems: 'center',
                  }}>
                  <Icon name={iconName} size={22} color={color} />
                </View>
              </View>
            );
          } else if (route.name === 'Unknown') {
            iconName = 'key';
            return (
              <View
                style={{
                  backgroundColor: '#0a1f3a',
                  paddingTop: 5,
                  paddingBottom: 3,
                  width: 70,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 50,
                    backgroundColor: '#0a1f3a',
                    paddingVertical: 10,
                    alignItems: 'center',
                  }}>
                  <Icon name={iconName} size={22} color={color} />
                </View>
              </View>
            );
          } else if (route.name === 'Search') {
            iconName = 'search';
            return (
              <View
                style={{
                  backgroundColor: '#0a1f3a',
                  paddingTop: 5,
                  paddingBottom: 3,
                  width: 85,
                  borderTopLeftRadius: 45,
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    width: 50,
                    backgroundColor: '#0a1f3a',
                    paddingVertical: 10,
                    alignItems: 'center',
                  }}>
                  <Icon name={iconName} size={22} color={color} />
                </View>
              </View>
            );
          } else if (route.name === 'Setting') {
            iconName = 'gear';
            return (
              <View
                style={{
                  backgroundColor: '#0a1f3a',
                  paddingTop: 5,
                  paddingBottom: 3,
                  width: 70,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 50,
                    backgroundColor: '#0a1f3a',
                    paddingVertical: 10,
                    alignItems: 'center',
                  }}>
                  <Icon name={iconName} size={22} color={color} />
                </View>
              </View>
            );
          }

          //  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        headerStyle: {backgroundColor: '#0a1f3a'},
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#038fab',
          height: 50,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      })}>
      <BottomTab.Screen
        name="Unknown"
        component={UnknownScreen}></BottomTab.Screen>
      <BottomTab.Screen
        name="User"
        component={LogoutScreen}
        options={{}}></BottomTab.Screen>
      <BottomTab.Screen
        name="Stores"
        component={StoresInfoScreen}></BottomTab.Screen>
      <BottomTab.Screen
        name="Search"
        component={UnknownScreen}
        options={{}}></BottomTab.Screen>
      <BottomTab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{}}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#0a1f3a'},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: 'Log In', headerShown: false}}
          />
          <Stack.Screen
            name="LogoutScreen"
            component={LogoutScreen}
            options={{title: 'Log Out'}}></Stack.Screen>

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: 'Home',
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="SetPinScreen"
            component={SetPinScreen}
            options={{
              title: '',
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="PinScreen"
            component={PinScreen}
            options={{
              title: '',
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="StoresInfoScreen"
            component={TabComponent}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="StoreMapScreen"
            component={MapViewScreen}
            options={{title: 'store Info'}}></Stack.Screen>
          <Stack.Screen
            name="VerifyUserScreen"
            component={VerifyUserScreen}
            options={{title: 'Verify Yourself'}}></Stack.Screen>
          <Stack.Screen
            name="AuditScreen"
            component={AuditScreen}
            options={{title: 'Audit', headerShown: true}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
