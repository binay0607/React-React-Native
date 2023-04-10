import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import { useState } from 'react';
import styles from "./ChartBarComp.style"
const ChartBarComp = ({val1,val2, maxVal, label, showPoints}) => {
  const [pressed1, setPressed1]= useState(false);
  const [pressed2, setPressed2]= useState(false);
  let barFillHeight1 =  Math.round((val1 / maxVal) * 100) + '%';
  let barFillHeight2=  Math.round((val2 / maxVal) * 100) + '%';

  
    barFillHeight1 = Math.round((val1 / maxVal) * 100) + '%';

  const handlePress1 =()=>{
    setPressed1(true);
    showPoints(val1);
    setTimeout(() => {
      setPressed1(false);
    }, 450);
  }
  const handlePress2 =()=>{
    setPressed2(true);
    showPoints(val2);
    setTimeout(() => {
      setPressed2(false);
    }, 450);
  }
  return (
    <View style={styles.chartContainer}>
      <View  style={styles.bar}>
        <Pressable onPressIn={handlePress1} style={[styles.barFill, {height: barFillHeight1 }, pressed1 && {backgroundColor: 'white', elevation:2}]}></Pressable>
        <Pressable onPressIn={handlePress2} style={[styles.barFill, {height: barFillHeight2, backgroundColor: "grey" }, pressed2 && {backgroundColor: 'white', elevation:2}]}></Pressable>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default ChartBarComp;
