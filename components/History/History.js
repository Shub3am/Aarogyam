import { useEffect, useState } from 'react'
import {StyleSheet, Text, View, ScrollView, Pressable, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';


const icon = <Icon name="ellipsis-horizontal-circle" size={40} color="white"/>


const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('historyLog')
      console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e)
    }
  }

  clearAll = async () => {
    try {
      await AsyncStorage.setItem('historyLog', "")
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

  
  


export default function History(){
    console.log(getData())

    let [history, setHistory] = useState([])

    function alertHandeler(){
        Alert.alert('Delete Histoy?', 'This will Permetly delete your history', [ 
          {
            text: 'Yes', 
            style: 'destructive',
            onPress: () => reset()
          }, 
          { 
            text: 'cancel',
            onPress :() => console.log('canceled'), 
      
          },
        ])
      }

    const getHistoryData = async() => {
        const data = await getData()
        setHistory(data)
        
    }

    const reset = async() => {
        await clearAll()
        setHistory([])
    }

    useEffect(() => {
        getHistoryData()
    }, [])

    return (
        <View style = {styles.container}>
            <View style = {styles.icon}>
                <Pressable
                    onPress= {alertHandeler}>
                        {icon}
                </Pressable>        
            </View>
            <Text style = {styles.heading}>History</Text>   
            <ScrollView contentContainerStyle = {{alignItems: 'left'}}> 
            {history ?  history?.map((h,i) => 
                <View style = {styles.activityContainer} key = {i}>
                    <Text style = {styles.activityHeading}>{h?.activityName}:</Text>
                    <Text style = {styles.activitylog}>{h?.time}</Text>
                </View>
                ): <Text style ={styles.nohistory}>Nothing to display. Start a workout to show history.</Text>} 
                
            </ScrollView>     

            
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E', //ios dark mode background system gray 6,
      // backgroundColor: 'white',
        alignItems: "left",    
    },
    nohistory: {
        color: 'white',
        fontSize: 24,
        marginHorizontal: 20,
        marginVertical: 35

    },
    icon: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginRight: 40,
        marginTop: 20,    
    },
    heading: {
        fontSize: 44,
        fontWeight: 'bold',
        color: '#FF9F0A', // ios system orange
        marginTop: 20,
        paddingLeft: 20
    },
    activityContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#1C1C1E',
        borderBottomColor: 'gray'
       
        
    },
    activityHeading:{
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        paddingLeft: 20

    },
    activitylog: {
        color: 'white',
        fontSize: 24,
        letterSpacing: 2,
        marginVertical: 10,
        paddingLeft: 20,
    },
    button:{
        backgroundColor: 'red',
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 15,
        height: 60,
        width: 300
    }
    

})