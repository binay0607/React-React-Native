import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import styles from "./StreakChartComp.styles"
import ChartBar from './ChartBar';
import ChartBarComp from './ChartBarComp';
const StreakChartComp = ({streaks1, streaks2}) => {
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
        {streaks1.map((dataPoint, index) => {
          return (
            <ChartBarComp
              key={index}
              val1={dataPoint.val}
              val2= {streaks2[index]}
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
}

export default StreakChartComp