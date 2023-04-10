/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LOGO from './logo.png';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator,
  View,
  Image,
  Button,
} from 'react-native';

const App = () => {
  console.log("app executed")
  
  return (
    
    <View style={styles.container}>
      <Image style={styles.logo} source={LOGO}></Image>
      <View style= {styles.btncontainer}>
        <Button style= {styles.btn} title="Login" color="#68ca5d" />
        <Button style= {styles.btn} title="Register" color="#68ca5d" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#68ca5d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  btncontainer:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  btn:{
    margin:10
  }

});

export default App;
