import { StyleSheet,Pressable, Image,Text, View } from 'react-native'
import React from 'react'
import styles from './FriendListItem.style'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../screens/RootStackParamsList'
import { StackNavigationProp } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome';
type userScreenProp = StackNavigationProp<RootStackParamList, 'UserInfoScreen'>;
const FriendListItem = ({item}) => {
  const navigation = useNavigation<userScreenProp>();

  const handlePress= ()=>{
    console.log("user clicked " + item.name)
    navigation.navigate('FriendUserScreen',{user : item, isFriend: item.isFriend});
  }
  return (
    <Pressable onPress ={handlePress} style={styles.item} >
        <View style={styles.imgView}>
            <Image
                style={styles.img}
                source={{
                  uri: 'https://st2.depositphotos.com/2945617/9741/v/600/depositphotos_97412776-stock-illustration-cute-baby-duck-waving-its.jpg',
                }}
            />
        </View>
        <View style={styles.infoView}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.experience} XP</Text>
        </View>
        {!item.isFriend && <Pressable style={styles.btn}><Icon style={styles.icon} name="user-plus" size={20} color="dodgerblue" /></Pressable>}
    </Pressable>
  )
}

export default FriendListItem
