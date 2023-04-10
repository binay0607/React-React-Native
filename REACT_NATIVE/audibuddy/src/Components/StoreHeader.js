import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const StoreHeader = ({showPendingStore, showCompletedstore, showPending}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable
        onPress={showPendingStore}
        style={[styles.pressable, styles.left]}>
        <Text style={[styles.headerText, showPending && styles.tcolor]}>
          Pending
        </Text>
      </Pressable>
      <Pressable
        onPress={showCompletedstore}
        style={[styles.pressable, styles.right, !showPending && styles.color]}>
        <Text style={[styles.headerText, !showPending && styles.tcolor]}>
          Completed
        </Text>
      </Pressable>
    </View>
  );
};

export default StoreHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressable: {
    backgroundColor: '#0a1f3a',
    padding: 10,
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
  },
  left: {
    borderRightColor: 'white',
    borderWidth: 0.5,
  },
  right: {
    borderLeftColor: 'white',
    borderWidth: 0.5,
  },
  tcolor: {
    fontWeight: 'bold',
    color: 'white',
  },
});
