import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import React from 'react'
import Title from './Title'
import Expenses from './Expenses'

const ExpensesScreen = ({title, expenses}) => {
    let totalexpenses=0;
    expenses.forEach(item => {
        totalexpenses+= (+item.amount);
    });
  return (
    <View style={styles.container}>
    <Title title={title} totalexpenses={totalexpenses}/>
    
    <FlatList data={expenses} renderItem={(itemData)=>{
        return <Expenses id={itemData.item.id} description={itemData.item.description} amount= {itemData.item.amount} date= {itemData.item.date}/> 
    }}></FlatList>
    
    </View>
  )
}

export default ExpensesScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})