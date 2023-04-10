import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({title, totalexpenses}) => {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Total: {totalexpenses} Rs</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
        marginHorizontal:16,
        paddingVertical:8,
        borderRadius: 8
    },
    text:{
        color: 'white',
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }

})