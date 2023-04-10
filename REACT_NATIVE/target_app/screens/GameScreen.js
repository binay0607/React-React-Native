import { StyleSheet, Text, View ,Pressable, Alert, FlatList, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer';

function generateRandomNum(min, max, exclude){
    const rndnum= Math.floor(Math.random()* (max-min))+min;
    if(rndnum === exclude){
        return generateRandomNum(min, max, exclude);
    }
    return rndnum;
}
let minBoundry=1;
let maxBoundry= 100;
const GameScreen = ({userNum, gameOver, handleGuess}) => {
    const intialGuess= generateRandomNum(minBoundry,maxBoundry, userNum)
    const [currentGuess, setcurrentGuess] = useState(intialGuess);
    const [guess, setguess]= useState(1);
    const [guessLog, setguessLog]= useState([intialGuess]);
    useEffect(() => {
      if(currentGuess === userNum){
        minBoundry=1;maxBoundry= 100;
            handleGuess(guess);
            gameOver();
      }
    }, [currentGuess,userNum, gameOver])
    
    const handlepress=(direction)=>{
        setguess(guess+1);
        if((direction==='lower' && currentGuess< userNum) || (direction==='higher' && currentGuess> userNum)){
            Alert.alert("Don't Lie Please!");
            return;
        }
        if(direction==='lower'){
            maxBoundry=currentGuess;            
        }else{
            minBoundry=currentGuess;
        }
        console.log(" this", currentGuess, userNum)
        console.log(direction, minBoundry, maxBoundry);
        const newguess= generateRandomNum(minBoundry,maxBoundry, currentGuess);
        setcurrentGuess(newguess);
        setguessLog([newguess, ...guessLog])
        
    }
    const guessLogLen= guessLog.length;
    return (
        <View>
        <Title>oponent's guess</Title>
        <View style={styles.data}>
        <NumberContainer>{currentGuess}</NumberContainer>
        {/*<Text>{userNum}</Text>*/}
        <Text style={styles.txt}>Lower or Higher</Text>
            <View style= {styles.btnview}>
                <Pressable style= {styles.btn} onPress={handlepress.bind(this,'lower')}><Text style= {styles.btnText}>-</Text></Pressable>
                <Pressable style= {styles.btn} onPress={handlepress.bind(this,'higher')} ><Text style= {styles.btnText}>+</Text></Pressable>
            </View>
       
        </View>

        <FlatList data={guessLog} renderItem={(itemData)=>{
                return(
                    <View>
                    <Text  key={itemData.index} style= {styles.listtext}>#{guessLogLen-itemData.index} Computer Guesses the number: {itemData.item}</Text>
                    </View>
                );
            }}/>
        </View>
    )
}


export default GameScreen

const styles = StyleSheet.create({
    data:{
        backgroundColor:'#400E32',
        paddingVertical: 10,
        paddingHorizontal:30,
        borderRadius: 20,
        marginVertical: 30,
    },
    txt:{
        color: '#FCE22A',
        fontSize: 24,
        paddingLeft: 20,
    },
    btnview:{
        flexDirection: 'row',
        
    },
    btn:{
        backgroundColor: '#A61F69',
        marginHorizontal: 10,
        marginVertical: 8,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        elevation:2
    },
      btnText:{
        color: '#FCE22A',
        fontSize:20,
        fontWeight: 'bold'
    },
    listtext:{
        color: '#A61F69',
        fontSize: 16,
        marginVertical:5,
        
    }
})