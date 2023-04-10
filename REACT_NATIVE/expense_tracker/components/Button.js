import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Button = ({handlePress, children, danger}) => {
  
  return (
    <Pressable onPress={handlePress}>
    <View style={[styles.btncontainer, danger? styles.dangerContainer: null]}>
      <Text style= {styles.btn}>{children}</Text>
    </View>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    btncontainer:{
        width: 100,
        height: 30,
        backgroundColor:'white',
        borderRadius:8,
        justifyContent: 'center'
    },
    dangerContainer:{
        backgroundColor:'red',
    },
    btn:{
        color: 'black',
        textAlign: 'center'
    }
})