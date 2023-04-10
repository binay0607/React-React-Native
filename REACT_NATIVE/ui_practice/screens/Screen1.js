import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import React from 'react';
import deliveryMan from '../assets/taxi-delivery-man-on-a-scooter.png';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const Screen1 = () => {
  return (
    <LinearGradient
      locations={[0, 0.479, 0.479]}
      colors={['#181d3d', '#181d3d', '#fff5d4']}
      style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.deliveryImage}
          resizeMode="contain"
          source={deliveryMan}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          Start Your Journey with Audi-Buddy today.
        </Text>
        <Text style={styles.text}>We help you grow your business.</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.btntxt}>
            Login {'   '}
            <Icon name="arrow-right" size={20} color="#ffff" />
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#fff5d4',
    alignItems: 'center',
    borderBottomRightRadius: 105,
  },
  bottomContainer: {
    flex: 1.09,
    backgroundColor: '#181d3d',
    borderTopLeftRadius: 105,
    alignItems: 'center',
  },
  deliveryImage: {
    marginTop: '15%',
  },
  title: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 110,
  },
  text: {
    fontSize: 18,
    marginVertical: 15,
  },
  btn: {
    backgroundColor: '#EB455F',
    borderRadius: 10,
    marginTop: 25,
    elevation: 3,
  },
  btntxt: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});
