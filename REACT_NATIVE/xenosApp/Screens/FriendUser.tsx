import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import UserInfo from '../Components/UserInfo'
import StreakChartComp from '../Components/StreakChartComp'
import { currUser } from './User'
import Icon from 'react-native-vector-icons/FontAwesome';
const FriendUser = () => {
  const router= useRoute();
  const user= router.params.user;
  const isFriend= router.params.isFriend;
  return (
    <View style= {styles.container}>
      <UserInfo currUser= {user} />
      {!isFriend && <Pressable style={styles.btn}><Text style={styles.btnText}><Icon name="user-plus" size={20} color="white" /> Send Friend Request</Text></Pressable>}
      <View style={styles.txtContainer}>
        <Text style={styles.text}>Learnings</Text>
      </View>
      <StreakChartComp streaks1= {currUser.streak} streaks2={user.streak}/>
    </View>
  )
}

export default FriendUser

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#09020a',
    alignItems: 'center',
  },
  txtContainer: {
    marginTop: 20,
    width: '90%',
  },
  text: {
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
  },
  btn:{
    backgroundColor: "dodgerblue",
    height: 60,
    width: "80%",
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10,
    elevation: 2,
    marginTop: 20,
  },
  btnText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  }
})