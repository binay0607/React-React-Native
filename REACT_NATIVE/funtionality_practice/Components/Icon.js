import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import IconsBox from './IconsBox';
import {dummyIcon} from '../Data/icons';
const Icon = () => {
  return (
    <ScrollView
      style={{backgroundColor: 'gold', height: 100}}
      horizontal={true}>
      {dummyIcon.map((item, index) => (
        <IconsBox key={index}>{item}</IconsBox>
      ))}
    </ScrollView>
  );
};

export default Icon;

const styles = StyleSheet.create({});
