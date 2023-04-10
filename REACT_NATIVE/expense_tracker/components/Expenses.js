import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Expenses = ({id, description, amount, date}) => {
    const navigation= useNavigation();
    const handlePress=()=>{
        navigation.navigate("ManageExpenses", {expenseId: id})
    }
  return (
    <Pressable onPress={handlePress}>
    <View style={styles.container}>
    <View>
      <Text style={styles.text}>{description}</Text>
      <Text style={[styles.text, styles.dt]}>{date.getFullYear()}-{date.getMonth()+1}-{date.getDate()}</Text>
    </View>
    <Text style={[styles.text, styles.amnt]}>{amount} Rs</Text>
    </View>
    </Pressable>
  )
}

export default Expenses

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
        backgroundColor: '#20262E',
        padding: 6,
        borderRadius: 8
    },
    text: {
        color: 'white',
        marginHorizontal: 4,
        fontSize: 15
    },
    dt:{
        fontSize: 10
    },
    amnt:{
        color: 'red'
    }
})