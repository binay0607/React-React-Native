import React, {useEffect, useMemo} from 'react';
import {View, Image} from 'react-native';
import {SafeAreaContainer} from '../../components';
import createStyles from './Splash.style';
import {useTheme} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {Metrics} from '../../utils';

const Splash = () => {
  const navigation = useNavigation();

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate("BottomNav");
    },1000)
    
  }, []);

  return (
    <SafeAreaContainer isModalOpened={false}>
      <View
        style={{
          width: Metrics.screenWidth,
          height: Metrics.screenHeight,
          position: 'absolute',
          backgroundColor: theme.colors.background,
        }}>
        <View style={styles.headerview}>
          <Image
            style={{height: 150, width: 150, alignSelf: 'center'}}
            resizeMode="contain"
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeAreaContainer>
  );
};

export default Splash;
