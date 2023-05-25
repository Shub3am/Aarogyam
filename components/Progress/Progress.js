import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView, Pressable  } from 'react-native';

import Progressitem from './ProgressItem';
import presetRecords from './data';

import Icon from 'react-native-vector-icons/Ionicons';

const plus = <Icon name="add-circle" size={80} color="orange"/>
const close = <Icon name="close" size={50} color="white"/>


export default function Progress() {

  let [progressTitle, setProgressTitle] = useState();
  let [progressList, setProgressList] = useState(presetRecords);

  
function handleAddRecord(){
  const _newRecord = {
    key: Math.random().toString,
    title: progressTitle,  
  }
  
  if(progressTitle === "" ){
    alert("field cannot be blank")
  } else{
    const newRecords = [...progressList,  _newRecord] 
    setProgressList(newRecords)
  } 
  setProgressTitle("");
  
}

function resetRecords(){
  setProgressList(presetRecords); 
}

return (
  
  <View style={styles.container}>
    <View style = {styles.icon2}>
        <Pressable 
          onPress={resetRecords}
          onLongPress={() =>setProgressList([])}
          >{close}
        </Pressable>  
    </View>
    <View style={styles.inputfield}>
    <TextInput 
      style={styles.input} 
      placeholder='add new record..' 
      placeholderTextColor={'black'}
      value={progressTitle} onChangeText = {text => setProgressTitle(text)}/>              
    </View>    
    
     <ScrollView> 
        <View>
          {progressList.map((item, index) => {
          return (
          <Progressitem key = {index}
          item = {item} 
          
          />   
          );
          })}     
      </View>            
    </ScrollView>
    <View style = {styles.icon}>
            <Pressable onPress={() => handleAddRecord()}>{plus}</Pressable>        
        </View>
   </View> 
  
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 20
},
input: {
  paddingVertical: 15, 
  paddingHorizontal: 15,
  backgroundColor: 'gray',
  //borderColor: 'black',
  //borderWidth: 1,
  borderRadius: 8,
  width:  350,
  marginTop: 10,
  marginBottom: 10
},
inputfield: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
button: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
recorditem: {
  backgroundColor: 'lightgray',
  padding: 10,
 // borderWidth: 1,
  borderRadius: 8,
  width: 350,
  margin: 3,
  

},

recorditemWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  
},
recordWrapper: {
  alignItems: 'center',
  justifyContent: 'space-between',
  
   
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

});