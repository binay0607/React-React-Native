/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import React, {useMemo, useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useTheme} from '../../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../text-wrapper';
import createStyles from './Header.style';
import {normalize} from '../../utils/constants';
import NetInfo from '@react-native-community/netinfo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  title: string;
  leftButtonPress: () => void;
  rightButtonPress: () => void;
  heardertype: Boolean;
  imagename: string;
  rightIcon: Boolean;
  rightButtonText: string;
  rightButton: Boolean;
  userName: string;
  leftButton: Boolean;
}

const Header = ({
  title,
  leftButtonPress,
  rightButtonPress,
  rightIcon,
  rightButtonText,
  rightButton,
  leftButton,
}: Props) => {
  const {colors} = useTheme();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [netWork, setNetwork] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(networkState => {
      setNetwork(networkState?.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const NetworkHeader = () => {
    return (
      <View style={styles.offline}>
        <Icon name="cloud-offline-outline" size={20}></Icon>
        <Text>{'Your device is not connected to internet.'}</Text>
      </View>
    );
  };

  return (
    <>
      {netWork === false ? <NetworkHeader></NetworkHeader> : ''}
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {leftButton ? (
            <TouchableOpacity
              style={styles.iconButton}
              onPress={leftButtonPress}>
              <Icon
                name="md-arrow-back-sharp"
                size={24}
                color={theme.colors.placeholderTextColor}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.midContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          {rightButton ? (
            <TouchableOpacity
              style={styles.iconButton}
              onPress={rightButtonPress}>
              {rightIcon ? (
                <Icon2
                  name={rightButtonText}
                  size={24}
                  color={theme.colors.buttonColor}
                />
              ) : (
                <Text
                  style={{
                    
                    color: theme.colors.buttonColor,
                    fontSize: normalize(14),
                  }}>
                  {rightButtonText}
                </Text>
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};
export default Header;
