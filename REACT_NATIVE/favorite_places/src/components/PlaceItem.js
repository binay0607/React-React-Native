import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState, useContext} from 'react';
import {Colors} from '../Util/util';
import IconButton from './IconButton';
import {Store} from '../store/store';
const PlaceItem = ({title, imgUri, location, id}) => {
  const storectx = useContext(Store);
  const [layer, setlayer] = useState(false);

  if (layer) {
    return (
      <Pressable style={styles.longPresscontainer}>
        <View style={styles.btnContainer}>
          <IconButton
            icon="ban"
            size={30}
            color={Colors.accent300}
            handleNav={() => {
              console.log('Pressed');
              setlayer(!layer);
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <IconButton
            icon="trash"
            size={30}
            color={Colors.accent300}
            handleNav={() => {
              storectx.places_context.deletePlace(id);
            }}
          />
        </View>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.container} onLongPress={() => setlayer(!layer)}>
      <Image style={styles.img} source={{uri: imgUri}} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.loc}>Latitude:{location.lat}</Text>
        <Text style={styles.loc}>Longitude:{location.lng}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  longPresscontainer: {
    backgroundColor: Colors.primary100,
    margin: 10,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: Colors.primary500,
    borderWidth: 2,
  },
  container: {
    flexDirection: 'row',
    margin: 10,
    overflow: 'hidden',
  },
  btnContainer: {
    backgroundColor: Colors.primary400,
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 40,
    borderColor: Colors.accent100,
    borderWidth: 0.5,
  },
  info: {
    backgroundColor: Colors.primary300,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flex: 2,
  },
  img: {
    flex: 1,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.accent500,
    fontWeight: 'bold',
    marginVertical: 7,
  },
  loc: {
    fontSize: 16,
    color: Colors.accent300,
    marginHorizontal: 15,
    marginVertical: 4,
  },
});
