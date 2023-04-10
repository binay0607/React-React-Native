import { StyleSheet, Text, View, Image , Pressable} from 'react-native'
import React from 'react'
import Title from '../components/Title'
const GameOverScreen = ({userNum,numOfGuess, gameOver, onPickNum}) => {
  const handlePress= ()=>{
    gameOver();
    onPickNum(null);
  }
  return (
    <View style= {styles.gameOverScreen}>
      <Title>GameOverScreen</Title>
      <Image style= {styles.img} source= {require('../assets/success.png')}/> 
      <Text style={styles.txt}>Your Phone took <Text style={styles.htxt}>{numOfGuess}</Text> moves to guess the number <Text style={styles.htxt}>{userNum}.</Text> </Text>
      <Pressable style= {styles.btn} onPress={handlePress}><Text style= {styles.btnText}>Start New Game</Text></Pressable>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  gameOverScreen:{
    flex:1,
    
    alignItems: 'center'
  },
  
  img:{
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#400E32', 
    margin: 10,
    marginVertical: 60,
  },
  txt:{
      fontSize: 30,
      color: '#400E32',
      textAlign: 'center',
      marginBottom: 20,
  },
  htxt:{
    
    paddingHorizontal: 5,
    color: '#400E32',

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