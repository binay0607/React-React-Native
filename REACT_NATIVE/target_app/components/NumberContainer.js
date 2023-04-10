import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color: '#FCE22A',
        fontSize:36,
        fontWeight: 'bold',
        paddingVertical:5,
        paddingHorizontal: 40,
        marginTop:20,
       
        textAlign: 'center'
        
    }
})