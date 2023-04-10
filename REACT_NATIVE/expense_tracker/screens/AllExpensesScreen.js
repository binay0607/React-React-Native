import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React,{useContext, useEffect, useLayoutEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ExpensesScreen from '../components/ExpensesScreen';
import { ExpenseContext } from '../store/expenses-context';
import { getExpense } from '../Util/http';
import LoadingOverlay from '../components/LoadingOverlay';
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const AllExpensesScreen = ({navigation}) => {
  const [isFetching, setisFetching] = useState(true)
  let oldestDate= new Date();
  const expenceCTX= useContext(ExpenseContext);
  const allExpenses= expenceCTX.expenses.filter((expense) =>{
    const today= new Date();
    if(expense.date< oldestDate)oldestDate= expense.date;
    return expense.date <= today;
  })
  const title= `Since ${months[oldestDate.getMonth()]}-${oldestDate.getFullYear()}`;
  //back end code--->
  useEffect(()=>{
    setisFetching(true);
    async function fetchData(){
      const bexpenses= await getExpense();
      setisFetching(false);
      expenceCTX.setExpenses(bexpenses);
    }
    fetchData();
    
  },[])
  useLayoutEffect(() => {
    const handleNav=()=>{
        navigation.navigate("ManageExpenses")
    }
      navigation.setOptions({
        headerRight: ()=>{
          return (<Pressable onPress={handleNav} style={{marginRight: 16}}><Icon name='plus' size={24} color='white' /></Pressable>)
        }
      })
  }, [navigation]);

  if(isFetching){
    return <LoadingOverlay/>
  }


  
  
  
  return (
    <View style={styles.container}> 
      <ExpensesScreen title={title} expenses={allExpenses}/>
    </View>
  )
}

export default AllExpensesScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
        
    }
})