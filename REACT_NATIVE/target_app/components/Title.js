import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
    <View>
    <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        color: 'white',
        fontSize:24,
        fontWeight: 'bold',
        padding: 10,
        marginTop:40,
        borderWidth:2, 
        borderColor: 'white',
        borderStyle: 'dashed',
        textAlign:'center'
    }
})