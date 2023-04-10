import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Children } from 'react'

const Input = ({children, style, style1, inputConfig}) => {
  return (
    <View style={style1}>
        <Text>{children}</Text>
        <TextInput {...inputConfig} style= {[styles.input, style]}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    
    input:{
        borderBottomColor:'black',
        borderBottomWidth: 2,
        padding:0,
        marginBottom:8,
        maxWidth: '97%'

    }
})