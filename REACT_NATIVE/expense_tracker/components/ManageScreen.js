import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import Input from './Input'
import Button from './Button'
import { ExpenseContext } from '../store/expenses-context';
import { deleteExpense, postExpense, updateExpense } from '../Util/http'
import LoadingOverlay from './LoadingOverlay'
const ManageScreen = ({expenses, isEditing}) => {
  const [issubmitting, setIssubmitting] = useState(false);
  const navigation= useNavigation();
  const expenceCTX= useContext(ExpenseContext);
  const [inputData, setinputData]= useState({
    amount : expenses ? expenses.amount.toString(): '',
    description:  expenses ? expenses.description : '',
    date: expenses? expenses.date.toISOString().slice(0,10) :'',
  });
  const handleChangeText=( inputType,enteredText)=>{
    setinputData(currentvalue=> {return({...currentvalue,[inputType]: enteredText })}); 
  }
  const typeofhandle= isEditing? 'Update' : 'Add';
async function handleDelete(){
    setIssubmitting(true);
    expenceCTX.deleteExpense(expenses.id);
    await deleteExpense(expenses.id);
    navigation.goBack();
}
async function handleNewExpense (typeofhandle){
    setIssubmitting(true);
    if(typeofhandle==='Add'){
      const id = await postExpense({description: inputData.description, amount: inputData.amount, date: new Date(inputData.date)});
      expenceCTX.addExpense({description: inputData.description, amount: inputData.amount, date: new Date(inputData.date), id: id});
    }else{
      updateExpense(expenses.id, { description: inputData.description, amount: inputData.amount, date: new Date(inputData.date)})
      expenceCTX.updateExpense({id:expenses.id, description: inputData.description, amount: inputData.amount, date: new Date(inputData.date)})
    }
    // setIssubmitting(false);
    navigation.navigate('AllExpenses');
  }
  
  const handleCancel=()=>{
    navigation.goBack();
  }

  if(issubmitting){
    return <LoadingOverlay/>
  }
  return (
    <View style= {styles.formContainer}>
     <View style= {styles.topContainer}>
     <Input style1={styles.rowFlex} inputConfig={{keyboardType: 'decimal-pad',value: inputData.amount , onChangeText: handleChangeText.bind(this,"amount")}}>Amount:</Input>
     <Input style1={styles.rowFlex} inputConfig={{placeholder: 'YYYY-MM-DD', keyboardType: 'number-pad',value: inputData.date, onChangeText: handleChangeText.bind(this,"date")}}>Date:</Input>
     </View> 
     <Input inputConfig={{multiline: true, value: inputData.description, onChangeText: handleChangeText.bind(this,"description")}} style={styles.description}>Description:</Input>
    <View style={styles.btnContainer}>
        <Button handlePress={handleCancel}>Cancel</Button>
        <Button handlePress={handleNewExpense.bind(this, typeofhandle)}>{isEditing? 'Update' : 'Add'}</Button>
     </View>
     <View style={styles.bottomContainer}> 
     <Button handlePress={handleDelete} danger={true}>Delete</Button>
     </View>
     
    </View>
  )
}

export default ManageScreen
 
const styles = StyleSheet.create({
  formContainer:{
    backgroundColor: '#20262E',
    margin: 30,
    borderRadius: 10,
    padding: 8,
    marginTop:80
  },
  topContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginBottom: 10
    
  },
  bottomContainer:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 10,
  },
  rowFlex:{
    flex:1,
    justifyContent:'center'
  },
  description:{
    minHeight:50,
    textAlignVertical: 'top',
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16
  }
})