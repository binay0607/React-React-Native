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
import {WebView} from 'react-native-webview';

import React, {useEffect, useMemo, useState} from 'react';
import {Metrics, useTheme} from '../../utils';
import createStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {videopagedata} from '../../redux/actions';
import {Header, SafeAreaContainer} from '../../components';

const Videopage = (route: any) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  var videopagedatadata = useSelector(state => state.videopagedata);
  const currentPage = useSelector(state => state.videopagedata.currentPage);
  const [loadingbtn, setLoadinbtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    console.log('currentPage1', currentPage);
    setLoadinbtn(true);
    dispatch(videopagedata(currentPage));
  }, []);

  useEffect(() => {
    if (videopagedatadata.is_success) {
      setLoadinbtn(false);
      setFilteredData(videopagedatadata?.videopage_data);
    } else if (videopagedatadata.error) {
      setLoadinbtn(false);
    } else {
    }
  }, [videopagedatadata]);

  const handleEndReached = (currentPage: number) => {
    setLoadinbtn(true);
    dispatch(videopagedata(parseInt(currentPage) + 1));
  };
  const renderFooter = () => {
    if (!loadingbtn) return null;
    return <ActivityIndicator style={{marginVertical: 20}} />;
  };
  return (
    <SafeAreaContainer>
      <View style={{flex: 1, marginBottom: 20, margin: 5, borderRadius: 5}}>
        <View style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={filteredData}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('VideoDetailspage', {
                    id: item.nid,
                  });
                }}>
                <View style={styles.newsCover}>
                
                  <Image
                    source={{uri: item.imageurl}}
                    style={styles.imageView}
                  />
                  <View style={styles.textView}>
                    <Text style={styles.textTitleView}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => handleEndReached(currentPage)}
            onEndReachedThreshold={0.5}
            initialNumToRender={20 * currentPage}
            ListFooterComponent={renderFooter}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default Videopage;
