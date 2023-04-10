import {
  StyleSheet,
  Text,
  View,
  Pressable,
  PermissionsAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../Util/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from '../Store/cart_slice';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useEffect} from 'react';

const SuccessScreen = ({navigation, route}) => {
  const total = route.params.total;
  const gst = route.params.gst;
  const cartItems = useSelector(state => state.cart.itemList);
  const dispatch = useDispatch();
  const [filePath, setFilePath] = useState('');
  const [billexists, setBillexists] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setBillexists(false);
  }, [navigation, route]);
  const bill = `
  <h1 style="text-align: center;"><strong>Bakery App</strong></h1>
  <p style="text-align: center;">Order Number- 5</p>
  <div style="display:flex">
        <p>Item Name</p>
        <p style="margin-left:80px">Quantity</p>
        <p style="margin-left:80px">TotalPrice</p>
    </div>
    ${
      cartItems.length > 0 &&
      cartItems
        .map(items => {
          return `<div style="display:flex">
        <p>${items.name}</p>
        <p style="margin-left:80px">${items.quantity}</p>
        <p style="margin-left:80px">₹ ${items.totalPrice}</p>
      </div>`;
        })
        .join('\n')
    }
    <h4>Gst: ₹ ${gst} </h4>
    <h3>Total Price: ₹ ${total + gst}</h3>
    
  `;
  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert(err.message);
        return false;
      }
    } else {
      return true;
    }
  };
  const createPdf = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: bill,
        //File Name
        fileName: 'order.no-5',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
    }
  };
  const handlePDF = async () => {
    setIsLoading(true);
    await createPdf();
    setIsLoading(false);
    setBillexists(true);
  };
  const handleNavigation = () => {
    dispatch(cartActions.emptyCart());
    navigation.push('MenuScreen');
  };
  const today = new Date();
  let hour = +today.getHours();
  let minute = +today.getMinutes();
  if (minute + 30 > 60) {
    hour++;
    minute = minute - 30;
  } else {
    minute += 30;
  }
  const time = hour + ' : ' + minute;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Yoohoo!</Text>
      <Text style={styles.subheading}>
        Your Order was registered Successfully
      </Text>
      <Text style={[styles.subheading, {fontWeight: 'bold'}]}>
        We will serve your meal by {time}
      </Text>
      {isLoading && <ActivityIndicator style={{marginTop: '46%'}} />}
      {!isLoading && billexists && (
        <Text style={{color: 'black', marginTop: 30}}>
          PDF saved at : {filePath}
        </Text>
      )}
      {!billexists && (
        <Pressable style={styles.btn} onPress={handlePDF}>
          <Text style={styles.btnText}>Get Bill</Text>
        </Pressable>
      )}
      {billexists && (
        <Pressable style={styles.btn} onPress={handleNavigation}>
          <Text style={styles.btnText}>Return To Menu</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    marginTop: 160,
    fontSize: 34,
    color: Colors.primary400,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    color: Colors.accent300,
    marginTop: 10,
  },
  btn: {
    backgroundColor: Colors.primary300,
    paddingVertical: 10,
    width: '50%',
    borderRadius: 15,
    marginTop: '6%',
    elevation: 2,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
