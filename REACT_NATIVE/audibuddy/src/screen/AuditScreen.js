import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {storesActions} from '../store/store_slice';
import {useDispatch, useSelector} from 'react-redux';
import Draggable from 'react-native-draggable';
import Icon from 'react-native-vector-icons/FontAwesome';
const AuditScreen = ({route, navigation}) => {
  const storeId = route.params?.storeId;
  const stores = useSelector(state => state.stores.storesInfo);
  const store = stores.find(item => item.id === storeId);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(storesActions.updateStoreInfo(storeId));
    // ctx.storeInfoCtx.updateStoreInfo(storeId);
    navigation.navigate('StoresInfoScreen');
  };
  const [showPreMerchant, setshowPreMerchant] = useState(false);
  const [showCompInfo, setshowCompInfo] = useState(false);
  const [showPostMerchant, setshowPostMerchant] = useState(false);

  return (
    <LinearGradient
      style={styles.gradientContainer}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}>
      <ScrollView style={styles.compContainer}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.storeInfoContainer}>
            <Text style={styles.storeInfo}>{store.name}</Text>
            <Text style={styles.storeInfo}>{store.address}</Text>
          </View>
          <View style={styles.secHeading}>
            <Text style={styles.secText}>Pre Merchant</Text>
            <Icon
              onPress={() => setshowPreMerchant(!showPreMerchant)}
              style={styles.icon}
              name={showPreMerchant ? 'angle-up' : 'angle-down'}
              size={24}
              color="black"
            />
          </View>
          {showPreMerchant && <View style={styles.preMerchant}></View>}
          <View style={styles.secHeading}>
            <Text style={styles.secText}>Compititor Info</Text>
            <Icon
              onPress={() => setshowCompInfo(!showCompInfo)}
              style={styles.icon}
              name={showCompInfo ? 'angle-up' : 'angle-down'}
              size={24}
              color="black"
            />
          </View>
          {showCompInfo && <View style={styles.preMerchant}></View>}
          <View style={styles.secHeading}>
            <Text style={styles.secText}>Post Merchant</Text>
            <Icon
              onPress={() => setshowPostMerchant(!showPostMerchant)}
              style={styles.icon}
              name={showPostMerchant ? 'angle-up' : 'angle-down'}
              size={24}
              color="black"
            />
          </View>
          {showPostMerchant && <View style={styles.preMerchant}></View>}
          <Button
            title="Submit Audit"
            color="#038fab"
            onPress={handleClick}></Button>
        </View>
      </ScrollView>
      <View style={styles.swipe}>
        <Draggable
          x={1}
          renderSize={40}
          renderColor="#0a1f3a"
          renderText=">"
          isCircle
          shouldReverse
          minY={0}
          maxY={0}
          minX={0}
          maxX={5}
        />
        <Text style={styles.swipetxt}>Can't take break inside store.</Text>
      </View>
    </LinearGradient>
  );
};

export default AuditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
  },
  compContainer: {
    width: '99%',
  },

  text: {
    color: 'black',
    marginBottom: 20,
  },
  swipe: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipetxt: {
    color: 'black',
  },
  storeInfoContainer: {
    backgroundColor: '#038fab',
    width: '90%',
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  storeInfo: {
    fontSize: 18,
    color: 'white',
  },
  secHeading: {
    width: '90%',
    height: 36,
    backgroundColor: 'white',
    marginTop: 8,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  secText: {
    fontSize: 18,
    marginHorizontal: 8,
    color: 'black',
  },
  icon: {
    marginRight: 8,
    borderWidth: 2,
    paddingLeft: 6,
    paddingRight: 3,
    borderColor: 'black',
    borderRadius: 3000,
    paddingTop: 3,
  },
  preMerchant: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
  },
});
