import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#2e70d5', '#378fc6', '#5bc7b4', '#75e897']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{marginBottom: 0, height: 140}}>
        <Text style={[props.style, {opacity: 0}, {padding: 0, margin: 0}]}>
          {props.children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
