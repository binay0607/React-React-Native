import {StyleSheet, LogBox, Text, View, Pressable} from 'react-native';
import React, {useEffect,} from 'react';
import UserInfo from '../Components/UserInfo';
import FriendsList from '../Components/FriendsList';
import StreakChart from '../Components/StreakChart';
import { ScrollView } from 'react-native-virtualized-view'
import { useNavigation } from '@react-navigation/native';
import friends from '../data/dummyFriends';
export const currUser = {
  id: 'u1',
  name: 'John Doe',
  corp: 'Hyatt Hotel Corporation',
  experience: '1200',
  streak: [
    {label: 'MON', val: 59},
    {label: 'TUE', val: 27},
    {label: 'WED', val: 34},
    {label: 'THU', val: 68},
    {label: 'FRI', val: 43},
    {label: 'SAT', val: 88},
    {label: 'SUN', val: 22},
  ],
};
import { RootStackParamList } from '../screens/RootStackParamsList'
import { StackNavigationProp } from '@react-navigation/stack'
type userScreenProp = StackNavigationProp<RootStackParamList, 'UserInfoScreen'>;
const User = () => {
  const navigation = useNavigation<userScreenProp>();
  const handlePress= ()=>{
    navigation.navigate('AddUserScreen');
  }
  return (
    <View style={styles.container}>
    <ScrollView >
      <View style={{alignItems: 'center',}}>
      <UserInfo currUser={currUser} />
      <View style={styles.txtContainer}>
        <Text style={styles.text}>Learnings</Text>
      </View>
      <StreakChart streaks={currUser.streak} />
      <View style={styles.txtContainer}>
        <Text style={styles.text}>Friends</Text>
      </View>
      <FriendsList friends={friends}/>
      <Pressable onPress={handlePress} style={styles.btn}><Text style={styles.btnText}>Add New Friends</Text></Pressable>
      </View>
    </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#09020a',
    
  },
  txtContainer: {
    marginTop: 10,
    width: '90%',
  },
  text: {
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
  },
  btn:{
    backgroundColor: "dodgerblue",
    paddingHorizontal:8,
    paddingVertical: 8,
    borderRadius:6,
  },
  btnText:{
    color: 'white'
  }
});
