import {StyleSheet, Text, View} from 'react-native';
import React, {startTransition} from 'react';
import styles from './StreakChart.style';
import ChartBar from './ChartBar';
import { useState } from 'react';
const StreakChart = ({streaks}) => {
  const [showXp, setshowXp]= useState(false);
  const [xpValue, setxpValue]= useState();
  const showPoints =(points)=>{
    setxpValue(points);
    setshowXp(true);
    
    setTimeout(() => {
      setshowXp(false);
    }, 500);
  }
  return (
    <View style={styles.container}>
      {streaks.map((dataPoint, index) => {
        return (
          <ChartBar
            key={index}
            val={dataPoint.val}
            maxVal={100}
            label={dataPoint.label}
            showPoints={showPoints}
          />
        );
      })}
      {showXp &&  <View style={styles.pointsView}><Text style={styles.ptext}>{xpValue} XP</Text></View>}
      <View style={styles.maxLine}><Text style={styles.mtext}>Your Goal</Text><Text style={styles.mtext}>85 XP</Text></View>

    </View>
  );
};

export default StreakChart;
