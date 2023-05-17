import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, View, Alert, ScrollView, Pressable} from "react-native";
import {  useEffect, useState } from "react";
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (newLog) => {
  try {
    const currentDate = new Date().toLocaleDateString('en-US');
    const currentHistory = await AsyncStorage.getItem('historyLog');
    if (currentHistory !== null) {
      const currentHistoryParse = JSON.parse(currentHistory);
      const updatedHistory = [...currentHistoryParse, {...newLog, date: currentDate}];
      const jsonValue = JSON.stringify(updatedHistory);
      await AsyncStorage.setItem('historyLog', jsonValue);
    } else {
      const history = [{...newLog, date: currentDate}];
      const jsonValue = JSON.stringify(history);
      await AsyncStorage.setItem('historyLog', jsonValue);
    }
  } catch (e) {
    console.log(e);
  }
};


//const icon = <Icon name="list-outline" size={40} color="white"/>
const icon = <Icon name="ellipsis-horizontal-circle-sharp" size={40} color="lightgray"/>
//const icon = <Icon name="book-outline" size={40} color="white"/>


//timer runs slower than my react project timer and slower then the timer on iphone. using same code from my react project

const formatTime = (time) => {
    //turning millaseconds into seconds, divide by 6000, modulus by 60 returns whats left over by the seconds 
    let minutes = (Math.floor((time / (100*60)) % 60))

    let seconds = (Math.floor(time / 100 % 60))
    let mil = (time % 100)  
   
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    } 
    if(mil < 10){
        mil = `0${mil}`;
    }
    
    return `${minutes}:${seconds}.${mil}`
}



export default function Duration( {route, navigation}) {

const {activity} = route.params

 
    let [curTime, setCurTime] = useState(0)
    let [running, setRunning] = useState(false)
    let [lapList, setLapList] = useState([" "])
    

    
    useEffect(() => {
        if(running){
            const interval = setInterval(() => {
                setCurTime((curTime) => curTime +1);
            }, 10);
            return () => clearInterval(interval)
        }   
    }, [running]   
    
)

function resetTimer(){
    setCurTime(0)
    setRunning(false)
    setLapList(lapList = [" "])
}

function handleAddLap(){
  if(running){
  const newLaps = [...lapList]
  newLaps.push(formatTime(curTime))
  setLapList(newLaps)  
//  saveData({activityName: activity ,time: formatTime(curTime) })
  }else {
    alert("must start timer")
  }
} 

function handleAlert(){
  if(curTime > 0){
  Alert.alert('Log Time?', 'This will save your time to history', [ 
    {
      text: 'OK', 
      onPress: () => saveData({activityName: activity ,time: formatTime(curTime)})
    }, 
    { 
      text: 'Go To History',
      isPreferred: true,
      onPress :() => navigation.navigate("History"), 

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
        <View style= {styles.component}> 
        <Text style = {{fontSize: 30, color: 'white', fontWeight: 'bold'}}>{activity}</Text>
        <Text style = {{fontSize: 64, letterSpacing:6, color: 'white', fontWeight: 'bold'}}>{formatTime(curTime)}</Text>        
        <View style = {styles.buttoncontainer}>
         <Button
           title={running ? 'Stop' : 'Start'}
           onPress={() => !running ? setRunning(true) : setRunning(false)}
            
           buttonStyle = {running ? styles.ButtonStop : styles.ButtonStart }        
          
          /> 
          <Button
           title={'reset'}
           onPress={resetTimer}
           color={'white'}  
           buttonStyle = {styles.ButtonReset}   
          /> 
          <Button
           title= "log"
           onPress={handleAddLap}
           color={'white'}
           buttonStyle = {styles.ButtonLog} 
          />
        </View>
        <ScrollView>
          {lapList.map((lap, i) => {
          return (
          <Text 
            style = {{
              fontSize: 30, 
              color: 'white', 
              letterSpacing: 5,
              borderBottomColor: 'red'
            }} 
              key = {i}>                           
              {lap}                                         
          </Text>
          );
          })}
        </ScrollView>
    </View>
    </View>
    );
  }
  

const styles = StyleSheet.create({
  
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 40,
    marginTop: 20,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
  },
  buttoncontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
    
  }, buttoncontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
  },
  component: {
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttoncontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
    
  },
  Button:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 40,
   // backgroundColor: '#F88141',
    backgroundColor: '#8E8E93', //ios dark mode background system gray 
  },
  ButtonStart:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 40,
   // backgroundColor: '#F88141',
   backgroundColor: '#30D158', // ios system green
  },
  ButtonStop:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 40,
   // backgroundColor: '#F88141',
   backgroundColor: '#FF453A', // ios system red
  },
  ButtonReset:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
    marginHorizontal: 20,
    marginVertical: 40,
   // backgroundColor: '#F88141',
   backgroundColor: '#FF453A', // ios system red
  },
  ButtonLog:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 40,
   // backgroundColor: '#F88141',
   backgroundColor: '#FF9F0A', // ios system orange
  },
});