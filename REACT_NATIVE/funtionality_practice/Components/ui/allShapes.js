import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AllShapes = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View style={styles.triangle}></View>
        <View style={styles.right_triangle}></View>
        <View style={styles.oval}></View>

        <View style={styles.trapizoid}></View>

        <View style={styles.heartContainer}>
          <View style={[styles.lheart, styles.heart]}></View>
          <View style={[styles.rheart, styles.heart]}></View>
        </View>

        <View style={styles.infinity}>
          <View style={styles.infinityBefore}></View>
          <View style={styles.infinityAfter}></View>
        </View>
        <View style={styles.pacman}></View>
        <View style={styles.yinyang}>
          <View style={styles.yinyangBefore}>
            <View style={[styles.dot, {borderColor: 'white'}]}></View>
          </View>
          <View style={styles.yinyangAfter}>
            <View style={[styles.dot, {borderColor: 'red'}]}></View>
          </View>
        </View>
        <View style={styles.tunnel}></View>
      </View>
    </ScrollView>
  );
};

export default AllShapes;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderBottomColor: 'red',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginVertical: 30,
  },
  right_triangle: {
    width: 0,
    height: 0,
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderTopColor: 'red',
    borderRightColor: 'transparent',
    marginVertical: 30,
  },
  oval: {
    marginVertical: 30,
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 100,
    transform: [{scaleX: 1.6}],
  },
  tunnel: {
    width: 150,
    height: 200,
    backgroundColor: 'gold',
    borderBottomWidth: 100,
    // borderBottomWidth: 100,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomColor: 'red',
    marginVertical: 30,
  },
  trapizoid: {
    width: 200,
    height: 0,
    borderBottomWidth: 100,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    marginVertical: 30,
  },
  heartContainer: {
    width: 100,
    height: 100,
    marginVertical: 30,
  },
  heart: {
    height: 80,
    width: 60,
    backgroundColor: 'red',
    position: 'absolute',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: 0,
  },
  lheart: {
    left: 10,
    transform: [{rotate: '-48deg'}],
  },
  rheart: {
    right: 10,
    transform: [{rotate: '48deg'}],
  },
  infinity: {
    marginVertical: 30,
    width: 80,
    height: 30,
  },
  infinityBefore: {
    position: 'absolute',
    borderWidth: 20,
    borderRadius: 50,
    left: 0,
    borderColor: 'red',
    borderBottomLeftRadius: 0,
    transform: [{rotate: '-135deg'}],
  },
  infinityAfter: {
    position: 'absolute',
    right: 0,
    borderWidth: 20,
    borderRadius: 50,
    borderTopRightRadius: 0,
    borderColor: 'red',
    transform: [{rotate: '-135deg'}],
  },
  pacman: {
    marginVertical: 30,
    borderWidth: 60,
    borderTopColor: 'red',
    borderLeftColor: 'red',
    borderBottomColor: 'red',
    borderRightColor: 'transparent',
    borderRadius: 60,
  },
  yinyang: {
    marginVertical: 30,
    width: 100,
    height: 100,
    borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 2,
    borderBottomWidth: 50,
  },
  yinyangBefore: {
    position: 'absolute',
    top: 24,
    borderWidth: 19,
    borderColor: 'red',
    left: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yinyangAfter: {
    position: 'absolute',
    top: 24,
    borderWidth: 19,
    backgroundColor: 'red',
    borderColor: 'white',
    right: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    margin: 0,
    borderWidth: 5,
    borderRadius: 5,
  },
});
