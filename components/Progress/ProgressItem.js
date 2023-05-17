import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const Record = (props) => {

    return (
      <View style = {styles.componentContainer}>
        <Text  style = {styles.namefield}>{props.text}</Text>
      <View style = {styles.rowContainer}>             
          <Text  style = {styles.repfield}>Reps: {props.reps} x {props.weight} lbs</Text>                 
      </View>
      <Text  style = {styles.setfield}>sets: {props.sets}</Text> 
      <Text  style = {styles.datefield}>{props.date}</Text>
      </View>
    )
  }

const Progressitem = (props) => {
  return (
    <View> 
      <View> 
        <Record  
          text = {props.item.title} 
          reps = {props.item.reps} 
          weight = {props.item.weight} 
          sets = {props.item.sets}
          date = {props.item.date}
          />     
      </View>
    </View>
  ) 
}
const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: '#3A3A3C', //ios 4
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: 350
  },
  rowContainer: {
  //  flexDirection: 'row',
  },
  namefield: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'lightgray',
    marginHorizontal: 5, 
    marginVertical: 5,
   // alignItems: 'left',
  },
  repfield: {
    fontSize: 16,
    color: 'lightgray',
    marginHorizontal: 5,  
    marginVertical: 5  
  },
  setfield: {
    fontSize: 16,
    color: 'lightgray',
    marginHorizontal: 5, 
    marginVertical: 5
  },
  datefield: {
    fontSize: 16,
    color: 'lightgray',
    marginHorizontal: 5, 
    marginVertical: 5
  }
 
 
});

export default Progressitem

