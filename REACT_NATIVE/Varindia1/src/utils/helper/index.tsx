import {AsyncStorage, Alert} from 'react-native';

//helper Functions
const helper = {
  checkEmail: (text: string) => {
    var regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  },

  validatePhoneNo: (text: string) => {
    var regex = /^[0-9]+$/;
    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  },
  userNameValidation: (text: string) => {
    var regex = /^[a-zA-Z '.-]*$/;
    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  },
  checkPassword: (text: string) => {
    var regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    if (regex.test(text)) {
      return true;
    } else {
      return true;
    }
  },

  showLog: (msg: any) => {
    Alert.alert(msg);
  },

  showAlert: (msg: any) => {
    Alert.alert(msg);
  },

  showNetworkAlert: () => {
    let msg = 'Please check your internet connection and try again!';
    Alert.alert(
      'Xenios',
      '' + msg,
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      {
        cancelable: false,
      },
    );
  },

  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value), err => {});
  },

  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          resolve(null);
        }
      });
    });
  },

  removePref: (key: string) => {
    AsyncStorage.removeItem(key, err => {});
  },

  CapitalizeString(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  isEmptyObject(obj: any) {
    for (var name in obj) {
      return false;
    }
    return true;
  },

  isOdd: (num: number) => {
    var data = num % 2;
    return data;
  },
};

export default helper;
