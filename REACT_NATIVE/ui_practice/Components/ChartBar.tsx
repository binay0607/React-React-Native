import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import styles from './ChartBar.style';
import { useState } from 'react';
const ChartBar = ({val, maxVal, label, showPoints}) => {
  const [pressed, setPressed]= useState(false);
  let barFillHeight = '0%';

  if (maxVal > 0) {
    barFillHeight = Math.round((val / maxVal) * 100) + '%';
  }
  const handlePress =()=>{
    setPressed(true);
    showPoints(val);
    setTimeout(() => {
      setPressed(false);
    }, 450);
  }
  return (
    <View style={styles.chartContainer}>
      <View  style={styles.bar}>
        <Pressable onPressIn={handlePress} style={[styles.barFill, {height: barFillHeight }, pressed && {backgroundColor: 'white', elevation:2}]}></Pressable>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default ChartBar;
