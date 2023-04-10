

import React, { useState } from 'react'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  ImageBackground
} from 'react-native';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import Title from './components/Title'
import GameOverScreen from './screens/GameOverScreen';




const App=() => {
  const [number, setnum] = useState();
  const [gameOver, setgameOver]= useState(false);
  const [numOfGuess , setnumOfGuess]= useState(0);
  const handlePickedNum= (num)=>{
    setnum(num);
  }
  const handleGame=()=>{
    
    setgameOver(!gameOver);
    
  }
  const handleGuess=(guess)=>{
    setnumOfGuess(guess);
  }
  let screen= <StartGameScreen onPickNum={handlePickedNum}/>;
  if(number){
    screen=<GameScreen userNum={number} gameOver={handleGame} handleGuess= {handleGuess}/>;
  }
  if(gameOver){
    screen=<GameOverScreen userNum = {number} numOfGuess= {numOfGuess} gameOver= {handleGame} onPickNum={handlePickedNum}/>
  }
  return (
    <View style= {styles.appContainer}>
    <ImageBackground 
      style= {styles.appContainer} 
      resizeMode='cover' 
      source={require('./assets/background.png')}
      imageStyle={{opacity: 0.35}}
      >
      {!gameOver && !number && <Title>guess a number</Title>} 
      <SafeAreaView>
      {screen}
      </SafeAreaView>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer:{
    backgroundColor: '#FCE22A',
    flex:1,
    alignItems: 'center',
    width:'100%'
  },
  text:{
    color: 'crimson',
    fontSize: 24
  }
  
});

export default App;
