import {  useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Pressable, } from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Weekview from "./weekview";

const plus = <Icon name="add-circle" size={80} color="orange"/>
const icon = <Icon name="ellipsis-horizontal-circle-sharp" size={40} color="white"/>

export default function Routine(){

//sets the deafualt screen to show one routine container 
let [routine, setRoutine] = useState([1])

    function handleAddRoutine(){
        const _newRoutine = {
          key: Math.random().toString,
        
        }
          const newRoutine = [...routine,  _newRoutine] 
          setRoutine(newRoutine)
      
      }
      
      function resetRoutine(){
        setRoutine([0]); 
        
      }

     
    
    return (
        <View style = {styles.container}>
            <View style = {styles.icon2}>
                <Pressable onPress={() => resetRoutine()}>{icon}</Pressable>        
            </View>           
            <ScrollView> 
            <View>
                {routine.map((item, index) => {
                    return (
                    <Weekview key = {index}
                    item = {item} 
                    />   
                    );
                    })}     
                </View>            
            </ScrollView>
            <View style = {styles.icon}>
                <Pressable onPress={() => handleAddRoutine()}>{plus}</Pressable>        
            </View>            
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
        alignItems: "center",
     //   justifyContent: "center",
       
    },
    icon: {
        paddingTop: 10,
        paddingBottom: 20,
        alignItems: 'center'
    },
    icon2: {
    marginLeft: 290,
    marginTop: 20,
    
    }

})