import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './FriendsList.style';
import FriendListItem from './FriendListItem';
import { FlatList } from 'react-native-gesture-handler';
const FriendsList = ({friends}) => {
  return (
    <View style={styles.container}>

        {friends.length===0 && <Text style={styles.fallback}>No User Found.</Text>}
        {/*friends.length!==0 && friends.map(item=> )*/}
        <FlatList nestedScrollEnabled data={friends} renderItem={itemData => <FriendListItem key={itemData.item.id} item={itemData.item} />
        }/>
    </View>
  );
};

export default FriendsList;
