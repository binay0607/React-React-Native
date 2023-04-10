/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const App = () => {
  const [goals, setgoals] = useState([]);
  const [text, settext] = useState('');
  const [showModal, setshowModal] = useState(false);
  const handletext = enteredText => {
    settext(enteredText);
  };

  const handleSubmit = () => {
    console.log('submit invoked, text is-->', text);
    setgoals(prevgoals => [...prevgoals, text]);
    settext('');
    setshowModal(false);
  };
  const deleteItem = id => {
    setgoals(prevgoals => prevgoals.filter((item, index) => index !== id));
  };
  const setModal = () => {
    setshowModal(true);
  };
  const handleModal = () => {
    setshowModal(false);
  };

  return (
    <View style={styles.appContainer}>
      <Pressable onPress={setModal} style={styles.button}>
        <Text style={styles.btntxt}>Add New Goal</Text>
      </Pressable>
      <Modal visible={showModal} animationType="slide">
        <View style={styles.inputContainer}>
          <TouchableHighlight>
            <Image
              style={styles.img}
              source={require('./assets/2.png')}></Image>
          </TouchableHighlight>
          <TextInput
            onChangeText={handletext}
            value={text}
            style={styles.textInput}
            placeholder="Enter Your Goal"
            placeholderTextColor="#A7727D"></TextInput>
          <View style={styles.btncontainer}>
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.btntxt}>Add</Text>
            </Pressable>
            <Pressable onPress={handleModal} style={styles.button}>
              <Text style={styles.btntxt}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <Pressable
                android_ripple={{color: '#A7727D'}}
                onPress={deleteItem.bind(this, itemData.index)}>
                <Text key={itemData.index} style={styles.listtext}>
                  {itemData.item}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#D1FFF3',
  },
  btncontainer: {
    margin: 10,
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: '#D1FFF3',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
    opacity: 0.2,
  },
  textInput: {
    width: '80%',
    borderBottomWidth: 2,
    borderColor: '#A7727D',
    color: '#A7727D',
  },
  button: {
    backgroundColor: '#A7727D',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  btntxt: {
    color: 'white',
  },
  listContainer: {
    flex: 4,
    width: '95%',
    marginHorizontal: 10,
    marginBottom: 0,
  },

  listtext: {
    color: '#D1FFF3',
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#A7727D',
    padding: 6,
    borderRadius: 5,
  },
});

export default App;
