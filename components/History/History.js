import { useEffect, useState } from 'react'
import {StyleSheet, Text, View, ScrollView, Pressable, Alert, TextInput} from "react-native";
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

const clearAll = async () => {
    try {
        await AsyncStorage.setItem('historyLog', "")
    } catch(e) {
        // clear error
    }

    console.log('Done.')
}

// This function takes in two arguments, an array of objects called `history` and a string called `query`.
const filterHistory = (history,  query) => {
  // If the `query` is falsy, simply return the original `history` array.
  if (!query) {
      return history;
  }

  // Otherwise, return a filtered version of the `history` array where each object's `activityName` property matches the `query` (case-insensitive).
  return history.filter((item) => {
      return item.activityName.toLowerCase().startsWith(query.toLowerCase());            
  });
};


export default function History(){
    let [history, setHistory] = useState([])
    let [filterQuery, setFilterQuery] = useState('');

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
                    onPress= {() => Alert.alert('Delete History?', 'This will permanently delete your history', [ 
                        {
                            text: 'Yes', 
                            style: 'destructive',
                            onPress: () => reset()
                        }, 
                        { 
                            text: 'Cancel',
                            onPress: () => console.log('Canceled'), 
                        },
                    ])}>
                        {icon}
                </Pressable>        
            </View>
            <Text style = {styles.heading}>History</Text>   
            <TextInput
                style={styles.searchInput}
                value={filterQuery}
                onChangeText={setFilterQuery}
                placeholder="Search history"
                placeholderTextColor="#8E8E93"
            />
            <ScrollView> 
                {history && history.length > 0 ? 
                    filterHistory(history, filterQuery)
                    .reverse() //reverses the order of the array
                    .map((h,i) => 
                        <View style = {styles.activityContainer} key = {i}>
                            <Text style = {styles.activityHeading}>{h?.activityName}:</Text>
                            <Text style={styles.activitylog}>{h?.date}</Text> 
                            <Text style = {styles.activitylog}>{h?.time}{h?.rep}{h?.weight}{h?.pounds}</Text>  
                        </View>
                    ) : 
                    <Text style ={styles.nohistory}>Nothing to display. Start a workout to show history.</Text>
                }         
            </ScrollView>     
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E', //ios dark mode background system gray 6,
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
        marginHorizontal: 16
    },
    activityContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 350,
        marginHorizontal: 24, 
        marginVertical: 6,
        paddingHorizontal: 24,
        paddingTop: 16,
        backgroundColor: '#3A3A3C',
        borderRadius: 12,  
          
    },
    activityHeading:{
        color: '#FF9F0A', // ios system orange
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    activitylog: {
        color: 'white',
        fontSize: 16,
        letterSpacing: 2,
        marginBottom: 10,
    },
    button:{
        backgroundColor: 'red',
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 15,
        height: 60,
        width: 300
    },
    searchInput: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 0, // Remove or set to 0
        backgroundColor: 'lightgray',
        borderRadius: 8,
        width: '100%', // Make the input take up the full width
        marginTop: 30,
        marginBottom: 10
      }
  

})