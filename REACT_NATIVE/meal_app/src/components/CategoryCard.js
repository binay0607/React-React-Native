import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryCard = ({title, color, onPress}) => {
  return (
    <TouchableOpacity style={{flex:1}}>
    <Pressable android_ripple={'#cccc'} onPress={onPress}>
    <View style={[styles.CategoryCard, {backgroundColor: color}]}>
        <Text style={styles.title}>{title}</Text>
    </View>
    </Pressable>
    </TouchableOpacity>
    
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    CategoryCard:{
        flex:1, 
        height: 150,
        margin:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems: 'center',
        elevation: 3,

    },
    title:{
        color: '#18122B',
        fontSize: 16,
        fontWeight: 'bold'
    }
})