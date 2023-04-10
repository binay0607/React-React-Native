/* eslint-disable radix */
/* eslint-disable curly */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Metrics, useTheme} from '../../utils';
import createStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {videodetails} from '../../redux/actions';
import {Header, SafeAreaContainer} from '../../components';
import WebView from 'react-native-webview';

const VideoDetailspage = (route: any) => {
  console.log('route', route.route.params.id);

  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  var videodetailsdata = useSelector(state => state.videodetails);
  const [loadingbtn, setLoadinbtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setLoadinbtn(true);
    dispatch(videodetails(route?.route?.params?.id));
  }, []);

  useEffect(() => {
    console.log('currentPage1', videodetailsdata);

    if (videodetailsdata.is_success) {
      setLoadinbtn(false);
      setFilteredData(videodetailsdata?.videodetails_data.data);
    } else if (videodetailsdata.error) {
      setLoadinbtn(false);
    } else {
    }
  }, [videodetailsdata]);

  return (
    <SafeAreaContainer>
      <Header
        title={'NEWS'}
        heardertype={false}
        leftButtonPress={() => {
          navigation.goBack();
        }}
        rightButtonPress={function (): void {}}
        imagename={''}
        rightIcon={false}
        rightButtonText={''}
        rightButton={false}
        userName={''}
        leftButton={true}
      />
      {loadingbtn ? (
        <ActivityIndicator
          size="large"
          color={theme.colors.primaryDark}
          style={styles.activityIndicator}
        />
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1, padding: 1}}>
          <View style={{flex: 1, marginBottom: 10, margin: 5, borderRadius: 5}}>
            <View style={{flex: 1}}>
              <View style={styles.imageView}>
                <WebView
                  style={styles.imageView}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{
                    uri:
                      'https://www.youtube.com/embed/' +
                      filteredData?.detailsDescription,
                  }}
                  mediaPlaybackRequiresUserAction={true} // true or false seems to have no change
                />
              </View>

              {/* <Image
                source={{uri: filteredData?.detailsimageurl}}
                style={styles.imageView}
              /> */}

              <Text style={styles.textTitleView}>
                {filteredData?.detailstitle}
              </Text>
              <Text style={styles.textByView}>
                By VARINDIA {filteredData?.createdat}
              </Text>
              <Text style={styles.textContent}>
                {filteredData?.detailsDescription}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaContainer>
  );
};

export default VideoDetailspage;
