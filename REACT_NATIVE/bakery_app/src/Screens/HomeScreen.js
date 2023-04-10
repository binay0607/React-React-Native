import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  Easing,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../Util/Colors';
const HomeScreen = ({navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('MenuScreen');
  };
  const spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg'],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          marginTop: 120,
          transform: [{rotate: spin}],
        }}>
        <Icon name="slack" size={120} color={Colors.primary300} />
      </Animated.View>
      <Text style={styles.logoText}>- -- Bakery -- -</Text>
      <Text style={{color: Colors.accent300, fontSize: 18}}>
        We bake, You Eat.
      </Text>
      <Pressable onPress={handleNavigation} style={styles.btn}>
        <Text style={styles.btnText}>
          Check Out Menu{' '}
          <Icon name="arrow-right" size={18} color="white"></Icon>
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    color: Colors.primary300,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary300,
    borderRadius: 15,
    elevation: 2,
    marginTop: 185,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});
