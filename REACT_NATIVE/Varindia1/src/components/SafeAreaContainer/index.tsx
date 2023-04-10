/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {useTheme} from '../../utils';
interface Props {
  children?: React.ReactNode;
  statusbarcolor?: string;
}

const SafeAreaContainer = ({children}: Props) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        height: '100%',
      }}>
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaContainer;
