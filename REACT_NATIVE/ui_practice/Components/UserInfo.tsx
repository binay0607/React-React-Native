import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from './UserInfo.style';
import Icon from 'react-native-vector-icons/FontAwesome';
const UserInfo = ({currUser}) => {
  return (
    <View style={styles.userInfo}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://st2.depositphotos.com/2945617/9741/v/600/depositphotos_97412776-stock-illustration-cute-baby-duck-waving-its.jpg',
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.text]}>{currUser.name}</Text>
        <Text style={{fontSize: 18}}>{currUser.corp}</Text>
        <View style={styles.btnView}>
          <Pressable style={styles.btn}><Icon  name="facebook" size={30} color="dodgerblue" /></Pressable>
          <Pressable style={styles.btn}><Icon  name="google" size={30} color="dodgerblue" /></Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;
