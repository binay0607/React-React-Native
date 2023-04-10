import {
  ScrollView,
  Settings,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useContext} from 'react';
import {Colors} from '../Util/util';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import SolidButton from './SolidButon';
import place from '../data/PlaceModel';
import {Store} from '../store/store';

const PlaceForm = ({sendPlace}) => {
  const storectx = useContext(Store);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [location, setLocation] = useState();
  function handleTitle(enteredText) {
    setTitle(enteredText);
  }
  function handleImage(imgUri) {
    setImage(imgUri);
  }
  function handleLocation(location) {
    setLocation(location);
  }
  function SavePickedPlace() {
    const placeData = new place(title, image, location);
    storectx.places_context.updatePlaces(placeData);
    sendPlace(placeData);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>TITLE:</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={handleTitle}
        />
      </View>
      <ImagePicker sendImage={handleImage} />
      <LocationPicker sendLocation={handleLocation} />
      <SolidButton onPress={SavePickedPlace}>CONFIRM</SolidButton>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary300,
    marginTop: 9,
    marginRight: 8,
  },
  input: {
    backgroundColor: Colors.primary200,
    fontSize: 16,
    paddingHorizontal: 4,
    paddingVertical: 2,
    // marginTop: 10,
    flex: 1,
    borderColor: Colors.primary500,
    borderWidth: 2,
    borderRadius: 2,
    color: Colors.accent300,
  },
});
