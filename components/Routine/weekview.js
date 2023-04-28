import {  useState } from "react";
import { StyleSheet, View, TextInput, Alert,  } from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const check = <Icon name="checkmark-sharp" size={25} color="white"/>

const days = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", 'Sun']
const isCurrentRoutine = (id, routine) => {
    return routine.find((r) => r.id === id)
}

const saveData = async (newRoutine) => {
    console.log(newRoutine)
    try {
      const currentRoutine = await AsyncStorage.getItem('routineLog')
      console.log(currentRoutine)
      if(currentRoutine !== null) {
        const currentRoutineParse = JSON.parse(currentRoutine)
        let updatedRoutine = [...currentRoutine]
        
            updatedRoutine = [...currentRoutineParse, newRoutine]
        
         
        const jsonValue = JSON.stringify(updatedRoutine)
        await AsyncStorage.setItem('routineLog', jsonValue)
      }else{
        const routine = [newRoutine]
        const jsonValue = JSON.stringify(routine)
        await AsyncStorage.setItem('routineLog', jsonValue)
      }
    } catch(e) {
      console.log(e)
    }
  }

  //const getData....

export default function Weekview(){

    let [pressedDays, setPressedDays] = useState([])
    let [routineName, setRoutineName] = useState('')
    let [saved, setSaved] = useState(false)

   // if(sunPressed && 
   //     monPressed && 
   //     tuePressed && 
   //     wenPressed && 
   //     thuPressed &&  
   //     friPressed && 
   //     satPressed && 
   //     sunPressed){
   //     Alert.alert("You did it!", "Congrats on completing a full week!")
   // }

   let handlePress = (day) => {
    let days = [...pressedDays]
    if(isInArray(day)){
        days = days.filter((d) => d !== day)
    }else{
        days = [...days, day]
    }
    setPressedDays(days)
   }
   console.log(pressedDays)
   let isInArray = (day) => {
    const result = pressedDays.find((d) => d===day)
    
    return result
   }
    const saveRoutine = () => {
        const routine = 
        {
            id: Math.random(),
            name: routineName,
            days: pressedDays
        }
        saveData(routine)
        setSaved(true)
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
                         titleStyle = {{color: 'black', fontSize: 13}}
                         buttonStyle = {isInArray(day) ?  styles.completed : styles.day}
                         onPress={() => handlePress(day)}      
                     /> 
                    )}    
                </View>
                <Button 
                title={'save'}
                onPress={saveRoutine}
                disabled = {saved}
                />
                
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
        height: 180
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