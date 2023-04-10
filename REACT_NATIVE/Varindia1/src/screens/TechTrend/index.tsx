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
import {techtrend} from '../../redux/actions';
import {Header, SafeAreaContainer} from '../../components';

const TechTrend = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  var techtrenddata = useSelector(state => state.techtrend);
  const currentPage = useSelector(state => state.techtrend.currentPage);
  const [loadingbtn, setLoadinbtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    console.log('currentPage1', currentPage);
    setLoadinbtn(true);
    dispatch(techtrend(currentPage));
  }, []);

  useEffect(() => {
    if (techtrenddata.is_success) {
      setLoadinbtn(false);
      setFilteredData(techtrenddata?.techtrend_data);
    } else if (techtrenddata.error) {
      setLoadinbtn(false);
    } else {
    }
  }, [techtrenddata]);

  const handleEndReached = (currentPage: number) => {
    setLoadinbtn(true);
    dispatch(techtrend(parseInt(currentPage) + 1));
  };
  const renderFooter = () => {
    if (!loadingbtn) return null;
    return <ActivityIndicator style={{marginVertical: 20}} />;
  };
  return (
    <SafeAreaContainer>
      <Header
        title={'Tech Trend'}
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

      <View style={{flex: 1, marginBottom: 20, margin: 5, borderRadius: 5}}>
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
    </SafeAreaContainer>
  );
};

export default TechTrend;
