import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FriendsList from '../Components/FriendsList'
import newFriends from '../data/dummyNewFriends';
import { TextInput } from 'react-native-gesture-handler';
import { useState,useEffect } from 'react';
const AddUser = () => {
    const [searchText, setSearchText]= useState('');
    const [showFriends, setShowFriends]= useState(newFriends);
    useEffect(() => {
        setShowFriends(newFriends.filter(item=> item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
        
    }, [searchText])
  return (
    <View style={styles.container}>
        <TextInput onChangeText={(enteredText)=> setSearchText(enteredText)} style={styles.searchBar} placeholder='Search For a friend'/>
       <View style={styles.txtContainer}>
        <Text style={styles.text}>Suggested friends</Text>
      </View>
      <FriendsList friends={showFriends}></FriendsList>
    </View>
  )
}

export default AddUser

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#09020a',
        alignItems: 'center',
    },
    txtContainer: {
        marginTop: 30,
        width: '90%',
    },
    text: {
        fontSize: 26,
        color: 'white',
        marginBottom: 10,
    },
    searchBar:{
        height: 45,
        width: "90%",
        borderWidth:1,
        borderColor: "white",
        borderRadius: 4,
        paddingHorizontal: 10,
        fontSize: 16,
        color: "white",
        marginTop: 30,
    }
})