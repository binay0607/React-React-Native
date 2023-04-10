/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable radix */
/* eslint-disable curly */
/* eslint-disable space-infix-ops */
// eslint-disable-next-line eslint-comments/no-unused-disable
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */

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

const Pdfview = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  const [loadingbtn, setLoadinbtn] = useState(false);
  const Loading = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };
  return (
    <SafeAreaContainer>
      <ScrollView contentContainerStyle={{flexGrow: 1, padding: 1}}>
        <View style={{flex: 1, marginBottom: 10, margin: 5, borderRadius: 5}}>
          <WebView
            source={{
              uri: 'https://varindia.com/varindiaapp/pdf/varindia.pdf',
            }}
            style={{flex: 1}}
            onLoad={() => console.log('PDF loaded')}
            onError={() => console.log('PDF failed to load')}
            bounces={false}
            scrollEnabled={true}
            useWebKit={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            scalesPageToFit={true}
            mixedContentMode={'always'}
            renderLoading={() => <Loading />}
          />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Pdfview;
