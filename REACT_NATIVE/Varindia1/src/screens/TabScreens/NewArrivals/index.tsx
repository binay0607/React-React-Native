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
import {newArrival} from '../../../redux/actions';

const NewArrivals = (route: any) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  var newsdata = useSelector(state => state.newArrival);
  const [loadingbtn, setLoadinbtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageData, setPageData] = useState(route?.route?.data);
  console.log('pageData', pageData);
  useEffect(() => {
    setLoadinbtn(true);
    console.log('pageData', pageData);

    apicall();
    console.log('navigation', navigation.addListener);
    const unsubscribe = navigation.addListener('focus', () => {
      apicall();
    });

    return unsubscribe;
  }, []);

  const apicall = () => {
    setLoadinbtn(true);
    dispatch(newArrival());
  };
  useEffect(() => {
    if (newsdata.is_success) {
      setLoadinbtn(false);
      setFilteredData(newsdata?.newArrival_data?.data);
      console.log('hi', newsdata.newArrival_data);
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
          <View
            style={{flex: 1, marginBottom: 170, margin: 5, borderRadius: 5}}>
            <View style={{flex: 1}}>
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
                    onPress={()=>{navigation.navigate('Detailspage', {
                      id: item.nid,
                    });}}>
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
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default NewArrivals;
