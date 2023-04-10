import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import ImageComp from '../components/ImageComp';
const uris = [
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ec/All_Might_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200511210525',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Eraser_Head_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200606161947',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/47/Present_Mic_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121633',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/9/93/Snipe_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121956',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/1e/Midnight_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121928',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/32/Cementoss_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121847',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Ectoplasm_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401122044',
];
const ListScreen = () => {
  return (
    <View style={styles.container}>
      {uris.map(item => (
        <ImageComp key={item} URL={item} />
      ))}
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
});
