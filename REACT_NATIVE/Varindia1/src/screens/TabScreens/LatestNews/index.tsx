/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
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
import {Metrics, useTheme} from '../../../utils';
import createStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Carousel from 'react-native-reanimated-carousel';
import {useDispatch, useSelector} from 'react-redux';
import {newsLatest} from '../../../redux/actions';

const LatestNews = (route: any) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  var newsdata = useSelector(state => state.newsLatest);
  const [loadingbtn, setLoadinbtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageData, setPageData] = useState(route?.route?.key);
  console.log('pageData', route?.route?.key);

  useEffect(() => {
    setLoadinbtn(true);
    apicall();
    const unsubscribe = navigation.addListener('focus', () => {
      apicall();
    });

    return unsubscribe;
  }, [navigation]);

  const apicall = () => {
    setLoadinbtn(true);
    dispatch(newsLatest());
  };
  useEffect(() => {
    if (newsdata.is_success) {
      setLoadinbtn(false);
      setFilteredData(newsdata?.latestNews_data?.data);
      console.log('hi', newsdata.latestNews_data);
    } else if (newsdata.error) {
      setLoadinbtn(false);
    } else {
      console.log('hi', newsdata.msg);
    }
  }, [newsdata]);

  const onRefresh = () => {
    apicall();
  };

  return (
    <View style={{flex: 1}}>
      {loadingbtn ? (
        <ActivityIndicator
          size="large"
          color={theme.colors.primaryDark}
          style={styles.activityIndicator}
        />
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1, padding: 1}}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(filteredData?.banners?.header?.ad_url);
            }}>
            <Image
              source={{uri: filteredData?.banners?.header?.imageurl}}
              style={{
                width: Metrics.screenWidth - 15,
                height: Metrics.size.xxxxl,
                margin: 5,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>

          <View
            style={{flex: 1, marginBottom: 170, margin: 5, borderRadius: 5}}>
            <View style={{flex: 1, marginBottom: 10, borderRadius: 5}}>
              <Carousel
                loop
                width={Metrics.screenWidth - 13}
                height={Metrics.screenWidth / 2}
                autoPlay={true}
                data={filteredData?.imagesliderdata}
                scrollAnimationDuration={3000}
                onSnapToItem={index => setActiveIndex(index)}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      borderRadius: 5,
                      flex: 1,
                      borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={{uri: item?.url}}
                      style={{
                        width: Metrics.screenWidth - 10,
                        height: Metrics.screenHeight / 2,
                        borderRadius: 7,
                        position: 'relative',
                      }}
                    />

                    <Text
                      style={{
                        position: 'absolute',
                        color: '#fff',
                        fontSize: 13,
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: 10,
                        flex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        backgroundColor: '#1717174d',
                        height: 40,
                      }}
                      numberOfLines={1}>
                      {item?.title}
                    </Text>
                  </View>
                )}
              />
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{height: Metrics.size.xxxxl}}
                onPress={() => {
                  Linking.openURL(filteredData?.banners?.Center?.ad_url);
                }}>
                <Image
                  source={{uri: filteredData?.banners?.Center?.imageurl}}
                  style={{
                    width: Metrics.screenWidth / 1.4,
                    height: Metrics.size.xxxxl,
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  right: 10,
                  marginTop: 8,
                  alignSelf: 'flex-end',
                  flex: 1,
                  position: 'absolute',
                  backgroundColor: '#C51527',
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 10,
                  paddingLeft: 10,
                  borderRadius: 4,
                }}
                onPress={() => {
                  navigation.navigate('S12');
                }}>
                More News
              </Text>

              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    title="Loading..."
                    progressBackgroundColor="#ffff00"
                    onRefresh={() => onRefresh()}
                  />
                }
                style={{flex: 1}}
                data={filteredData?.lattestnews}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Detailspage', {
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
              />
              <TouchableOpacity
                style={{height: Metrics.size.xxxxl}}
                onPress={() => {
                  Linking.openURL(filteredData?.banners?.Footer?.ad_url);
                }}>
                <Image
                  source={{uri: filteredData?.banners?.Footer?.imageurl}}
                  style={{
                    width: Metrics.screenWidth - 15,
                    height: Metrics.size.xxxxl,
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default LatestNews;
