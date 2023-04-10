import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
const ImagePicker = () => {
  const [pickedImage, setpickedImage] = useState();
  async function takeImage() {
    const image = await launchCamera({
      mediaType: 'photo',
      quality: 0.5,
      cameraType: 'back',
    });
    setpickedImage(image.assets[0].uri);
  }
  let imagePreview = <Text>No Image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, {height: pickedImage ? 300 : 100}]}>
        {imagePreview}
      </View>
      <Button onPress={takeImage} title="Take Selfie" color="#038fab"></Button>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    marginBottom: '80%',
  },
  imageContainer: {
    width: '100%',
    backgroundColor: '#0a1f3a',
    marginVertical: 8,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
