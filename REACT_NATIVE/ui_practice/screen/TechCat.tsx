import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const techsData =[
    {
        id:"t1",
        name: "Telecom",
        catId: "",
        icon:"access-point",
    },
    {
        id:"t2",
        name: "Storage",
        catId: "",
        icon: "micro-sd",
    },
    {
        id:"t3",
        name: "Startup",
        catId: "",
        icon: "rocket",
    },
    {
        id:"t4",
        name: "Software",
        catId: "",
        icon: "memory",
    },
    {
        id:"t5",
        name: "Security",
        catId: "",
        icon: "security",
    },
    {
        id:"t6",
        name: "Power",
        catId: "",
        icon: "flash-outline",
    },
    {
        id:"t7",
        name: "Peripherals",
        catId: "",
        icon: "sitemap-outline",
    },
    {
        id:"t8",
        name: "Networking",
        catId: "",
        icon: "access-point-network",
    },
    {
        id:"t9",
        name: "LTE",
        catId: "",
        icon: "signal-variant",
    },
    {
        id:"t10",
        name: "E-commerce",
        catId: "",
        icon: "cart-outline",
    },
    {
        id:"t11",
        name: "Data Center",
        catId: "",
        icon: "database",
    },
    {
        id:"t12",
        name: "Channel Buzz",
        catId: "",
        icon: "speaker-wireless",
    },
    {
        id:"t13",
        name: "Apps",
        catId: "",
        icon: "cellphone",
    },
    
]
const TechCat = () => {
  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={{flexGrow:1,alignItems:'center'}} style={{width:'90%'}} keyExtractor={item=> item.id} data={techsData} numColumns={2} renderItem={({item, index})=>{
        return <Pressable style={styles.box}>
                <Icon style={{marginTop:"25%"}} name={item.icon} size={30} color="red" />
                <Text style={styles.boxText}>{item.name}</Text>
            </Pressable>
      }}/>
    </View>
  )
}

export default TechCat

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:'center'
    },
    box:{
        width:130,
        height:120,
        borderWidth:2,
        borderRadius:8,
        margin:15,
        alignItems: 'center'
    },
    boxText:{
        fontSize:18,
         color: "black",
         marginVertical:5,
    }
})