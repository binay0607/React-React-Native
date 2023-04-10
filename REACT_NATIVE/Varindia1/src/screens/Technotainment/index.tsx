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
import {technotainment} from '../../redux/actions';
import {Header, SafeAreaContainer} from '../../components';

const Technotainment = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  var technotainmentdata = useSelector(state => state.technotainment);
  const currentPage = useSelector(state => state.technotainment.currentPage);
  const [loadingbtn, setLoadinbtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    console.log('currentPage1', currentPage);
    setLoadinbtn(true);
    dispatch(technotainment(currentPage));
  }, []);

  useEffect(() => {
    if (technotainmentdata.is_success) {
      setLoadinbtn(false);
      setFilteredData(technotainmentdata?.technotainment_data);
    } else if (technotainmentdata.error) {
      setLoadinbtn(false);
    } else {
    }
  }, [technotainmentdata]);

  const handleEndReached = (currentPage: number) => {
    setLoadinbtn(true);
    dispatch(technotainment(parseInt(currentPage) + 1));
  };
  const renderFooter = () => {
    if (!loadingbtn) return null;
    return <ActivityIndicator style={{marginVertical: 20}} />;
  };
  return (
    <SafeAreaContainer>
      <Header
        title={'Technotainment'}
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

export default Technotainment;
