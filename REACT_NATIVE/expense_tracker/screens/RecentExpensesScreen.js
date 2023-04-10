import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect, useContext, useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ExpensesScreen from '../components/ExpensesScreen';
import { ExpenseContext } from '../store/expenses-context';
import { getDateMinusdays } from '../Util/dateComp';
import LoadingOverlay from '../components/LoadingOverlay';
const RecentExpensesScreen = ({navigation}) => {
  const [isFetching, setisFetching] = useState(true)
  const expenceCTX= useContext(ExpenseContext);
  let recentExpenses= expenceCTX.expenses.filter((expense) =>{
    const today= new Date();
    const checkDate= getDateMinusdays(today, 7);
    return expense.date > checkDate && expense.date <= today;
  })
  
  
    useLayoutEffect(() => {
        const handleNav=()=>{
            navigation.navigate("ManageExpenses")
        }
        navigation.setOptions({
          headerRight: ()=>{
              return (<Pressable onPress={handleNav} style={{marginRight: 16}}><Icon name='plus' size={24} color='white' /></Pressable>)
          }
        })
      }, [navigation])


  return (
    <View style={styles.container}>
      <ExpensesScreen title="Since Last 7 Days" expenses={recentExpenses}/>
    </View>
  )
}

export default RecentExpensesScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
        
    }
})