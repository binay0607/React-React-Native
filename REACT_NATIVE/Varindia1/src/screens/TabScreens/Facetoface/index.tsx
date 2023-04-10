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
import {Metrics, useTheme} from '../../../utils';
import createStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {faceto} from '../../../redux/actions';

const Facetoface = (route: any) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  var facetodata = useSelector(state => state.faceto);
  const currentPage = useSelector(state => state.faceto.currentPage);
  const [loadingbtn, setLoadinbtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [pageData, setPageData] = useState(route?.route?.data);
  console.log('pageData', currentPage);
  useEffect(() => {
    setLoadinbtn(true);
    console.log('pageData', currentPage);
    apicall(currentPage);
  }, []);

  const apicall = (currentPage: number) => {
    setLoadinbtn(true);
    dispatch(faceto(currentPage));
  };
  useEffect(() => {
    if (facetodata.is_success) {
      setLoadinbtn(false);
      setFilteredData(facetodata?.facetoface_data);
      console.log('facetodata1', facetodata.facetoface_data);
    } else if (facetodata.error) {
      setLoadinbtn(false);
      console.log('facetodata2', facetodata);
    } else {
      console.log('facetodata3', facetodata);
    }
  }, [facetodata]);

  const handleEndReached = (currentPage: number) => {
    apicall(currentPage + 1);
  };
  const renderFooter = () => {
    if (!loadingbtn) return null;
    return <ActivityIndicator style={{marginVertical: 20}} />;
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginBottom: 170, margin: 5, borderRadius: 5}}>
        <View style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={filteredData}
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
            onEndReached={() => handleEndReached(currentPage)}
            onEndReachedThreshold={0.5}
            initialNumToRender={20 * currentPage}
            ListFooterComponent={renderFooter}
          />
        </View>
      </View>
    </View>
  );
};

export default Facetoface;
