import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect, useContext, useEffect} from 'react'
import ManageScreen from '../components/ManageScreen'
import { getExpense } from '../Util/http';
import { ExpenseContext } from '../store/expenses-context';

const ManageExpensesScreen = ({route, navigation}) => {
  const expenseId= route.params?.expenseId;
  const isEditing= !!expenseId;
  const expenceCTX= useContext(ExpenseContext);

 
  useLayoutEffect(() => {
    navigation.setOptions({
      title:  isEditing? "Update Expense" : "Add Expense",
     })
  }, [navigation,expenseId])
   let expenses;
  if(isEditing){
    expenses= expenceCTX.expenses.find((item)=> item.id===expenseId);
  }

  
  
  return (
    <View style={styles.container}>
      <ManageScreen expenses={expenses} isEditing={isEditing}/>
    </View>
  )
}

export default ManageExpensesScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
       
    }
})