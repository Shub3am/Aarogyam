import {  useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Alert,  } from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const check = <Icon name="checkmark-sharp" size={25} color="white"/>

const days = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", 'Sun']


export default function Weekview(){

    let [pressedDays, setPressedDays] = useState([])
    let [routineName, setRoutineName] = useState('')
    

    useEffect(() => {
        if(pressedDays.length == 7){
            alert('congrats on completing a full week!')
        }
    }, [pressedDays])


   let handlePress = (day) => {
    let days = [...pressedDays]
    if(isInArray(day)){
        days = days.filter((d) => d !== day)
    }else{
        days = [...days, day]
    }
    setPressedDays(days)
   }

   let isInArray = (day) => {
    const result = pressedDays.find((d) => d===day)
    
    return result
   }

   function handleSave() {
    onSave(pressedDays);
  }
  
   
    return (
        <View style = {styles.container}>
            <View style={styles.routineContainer}>
                <TextInput   
                    style = {styles.routineinput}
                    placeholder = "Click to edit routine"   
                    placeholderTextColor= 'white'
                    onChangeText={setRoutineName}
                    value= {routineName}
                />    
                <View style={styles.week}>
                    {days.map((day, index) =>
                         <Button key = {index}
                         title={isInArray(day) ? check : day} 
                         titleStyle = {{color: 'black', fontSize: 12}}
                         buttonStyle = {isInArray(day) ?  styles.completed : styles.day}
                         onPress={() => handlePress(day)}      
                     /> 
                    )}    
                </View>
                
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    
    routineContainer: {
       // backgroundColor: '#FF9F0A', // ios system orange
       backgroundColor: '#3A3A3C',
        padding: 10,
        marginVertical: 15,
        borderRadius: 8,
        width: 370,
     
        fontSize: 24,
        height: 120
    },
    week:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',    
        paddingTop: 20,
        paddingBottom: 15,
        

    },
    day: {
        width: 45,
        height: 45,
        borderRadius: 40,
        borderColor: 'black', //ios dark mode background system gray 6
        borderWidth: 2,
        backgroundColor: '#FCD69D', //faded orange 
       // backgroundColor: '#3A3A3C', //ios 4
       // backgroundColor: '#FF9F0A', // ios system orange
    },
    completed: {
        width: 45,
        height: 45,
        borderRadius: 40,
        borderColor: 'black',
 
       // backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
          backgroundColor: '#FF9F0A', // ios system orange
    },
    routineinput: {
        color: 'white',
        fontSize: 20
    }
})