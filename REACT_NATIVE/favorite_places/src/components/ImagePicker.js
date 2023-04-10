import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import OutlineButton from './OutlineButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import {Colors} from '../Util/util';
const ImagePicker = ({sendImage}) => {
  const [pickedImage, setpickedImage] = useState();
  async function takeImage() {
    const image = await launchCamera({
      mediaType: 'photo',
      quality: 0.5,
      cameraType: 'back',
    });
    setpickedImage(image.assets[0].uri);
    sendImage(image.assets[0].uri);
  }
  let imagePreview = (
    <Text style={styles.fallbacktxt}>No Image taken yet.</Text>
  );

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }

  return (
    <View>
      <View style={[styles.imageContainer, {height: pickedImage ? 300 : 100}]}>
        {imagePreview}
      </View>
      <OutlineButton icon="camera" onPress={takeImage}>
        Take Photo
      </OutlineButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    backgroundColor: Colors.primary200,
    marginVertical: 8,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.primary500,
    borderWidth: 2,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  fallbacktxt: {
    color: Colors.accent300,
    fontWeight: '500',
    fontSize: 16,
  },
});
