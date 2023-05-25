import React from 'react';
import { StyleSheet, Text, TextInput, View,  } from 'react-native';




const Record = (props) => {

    return (
      <View style = {styles.rowContainer}>              
          <Text  style = {styles.namefield}>{props.text}</Text>    
          <TextInput      
                style = {styles.field}
                keyboardType="number-pad"
                >      
            </TextInput>
            <Text style = {{fontSize:24, color: 'white'}}>
                X
            </Text>
            <TextInput 
                style = {styles.field}
                keyboardType="numeric"
           
                >
                
            </TextInput>
      </View>
    )
  }


const Progressitem = (props) => {
  return (
    <View > 
      <View > 
        <Record  text = {props.item.title} />   
      </View>
    </View>
  ) 
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  namefield: {
    fontSize: 20,
    backgroundColor: 'gray',
    width: 180,
    padding: 10,
 //   paddingVertical: 4,
    borderRadius: 8
  },
  field: {
    //edit color in textInput above
    fontSize: 20,
    // backgroundColor: '#48484A', //ios 2 
    backgroundColor: 'gray',
    width: 60,
    marginHorizontal: 15,
    padding: 10,
//    paddingVertical: 4,
    borderRadius: 8
}
 
});

export default Progressitem

