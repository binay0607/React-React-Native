import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'

const StartGameScreen = ({onPickNum}) => {
  const [inputnum, setinputnum] = useState('');
  const handleinput =(enteredText)=>{
    setinputnum(enteredText);
  }
  const resetInp= ()=>{
    setinputnum('');
  }
  const handleConfirm =()=>{
    const chosenNum= parseInt(inputnum);
    if(isNaN(chosenNum) || chosenNum<=0 || chosenNum>99){
      Alert.alert("Invalid Number","Enter a number between 1-99", [{text:'okay', style:'destructive', onPress:resetInp}]);
      return;
    }
    onPickNum(chosenNum);
  }
  return (
    <View style= {styles.StartGameScreen}>
    
      <TextInput 
        style={styles.numberInput} 
        keyboardType='number-pad' 
        maxLength={2}
        onChangeText={handleinput}
        value={inputnum}
      />
      <View style= {styles.btnview}>
     <Pressable style= {styles.btn}  onPress={resetInp}><Text style= {styles.btnText}>Reset</Text></Pressable>
      <Pressable style= {styles.btn} onPress={handleConfirm}><Text style= {styles.btnText}>confirm</Text></Pressable>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  StartGameScreen:{
    backgroundColor: '#400E32',
    width: '80%',
    alignItems: 'center',
    padding: 50,
    borderRadius: 15,
    marginTop: 80,
  },
  numberInput:{
    width: 50,
    borderBottomColor: '#FCE22A',
    borderBottomWidth: 2,
    textAlign: 'center',
    padding:2,
    fontSize:20,
    marginBottom: 15,
    color: '#FCE22A',
    

  },
  btnview:{
    flexDirection: 'row',
  },
  btn:{
    backgroundColor: '#A61F69',
    marginHorizontal: 10,
    marginVertical: 8,
    padding:8,
    borderRadius: 5,
    elevation:2
  },
  btnText:{
    color: '#FFFBF5',
  }

})