import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import {  useState } from "react";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (newLog) => {
  try {
    const currentHistory = await AsyncStorage.getItem('historyLog')
    if(currentHistory !== null) {
      const currentHistoryParse = JSON.parse(currentHistory)
      const updatedHistory = [...currentHistoryParse, newLog]
      const jsonValue = JSON.stringify(updatedHistory)
      await AsyncStorage.setItem('historyLog', jsonValue)
    }else{
      const history = [newLog]
      const jsonValue = JSON.stringify(history)
      await AsyncStorage.setItem('historyLog', jsonValue)
    }
  } catch(e) {
    console.log(e)
  }
}

const icon = <Icon name="ellipsis-horizontal-circle-sharp" size={40} color="white"/>
//const icon = <Icon name="ellipsis-horizontal-circle-sharp" size={40} color="white"/>
//const icon = <Icon name="book-outline" size={40} color="white"/>






export default function Repetition( {route, navigation}) {
  const {activity} = route.params


  let [count, setCount] = useState(0)

  function handleAlert(){
    if(count > 0){
    Alert.alert('Log Reps?', 'This will save your reps to history', [ //add {activity} to alert somehow
      {
        text: 'OK', 
        onPress: () => saveData({activityName: activity, time: count }) //this is where i add params to send curTime to History.js
      }, 
      { 
        text: 'Go To History',
        isPreferred: true,
        onPress :() => navigation.navigate("History"), //link to History.js and send params 
  
      },
      { 
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
    ])
  }else {
    alert('Start a Workout to add to histoty')
  }
  }
  
  return (
    
      <View style={styles.container}>
         <View style = {styles.icon}>
          <Pressable
          onPress= 
            {handleAlert}>{icon}</Pressable>        
        </View>
        <Text style = {{fontSize: 30, color: 'white'}}>{activity}</Text>
        <View>
          <Text style = {{fontSize: 72, color: 'white'}}>{count}</Text>
        </View>
       <View style = {styles.buttoncontainer}>
       <Button
          title="add rep"
          onPress={() => setCount(count + 1)}      
          color={'white'} 
          buttonStyle = {styles.ButtonRep}     
        />
         <Button
          title="add 10"
          onPress={() => setCount(count +10)}
          color={'white'}   
          buttonStyle = {styles.ButtonSet}     
        /> 
        <Button
          title="reset"
          onPress={() => setCount(0)}
          color={'white'}   
          buttonStyle = {styles.ButtonReset}     
        /> 
       </View>
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgray",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 40,
    marginTop: 20,
    
  },
  ButtonRep:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 50,
    width: 80,
    height: 80,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#30D158', // ios system green
  },
  ButtonSet:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 50,
    width: 80,
    height: 80,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#FF9F0A', // ios system orange
  },
  ButtonReset:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 50,
    width: 80,
    height: 80,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#FF453A', // ios system red
  },
  buttoncontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
    
  },
});