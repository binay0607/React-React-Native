import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import ImagePicker from '../Components/ImagePicker';
import LinearGradient from 'react-native-linear-gradient';
const VerifyUserScreen = ({route, navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('AuditScreen', {storeId: route.params?.storeId});
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}>
      <ImagePicker />
      {/*<BarcodePicker />*/}
      <Button
        onPress={handleNavigation}
        title="Verify"
        color="#038fab"></Button>
    </LinearGradient>
  );
};

export default VerifyUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
