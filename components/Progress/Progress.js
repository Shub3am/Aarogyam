import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  Pressable,
  Modal,
  Text,
} from 'react-native';

import Progressitem from './ProgressItem';
import presetRecords from './data';

import Icon from 'react-native-vector-icons/Ionicons';

const plus = <Icon name="add-circle" size={60} color="orange" />;
const plusSmall = <Icon name="add-circle" size={45} color="white" />;
const close = <Icon name="close" size={50} color="white" />;
const closeSmall = <Icon name="chevron-down" size={45} color="white" />;

const currentDate = new Date().toLocaleDateString('en-US');



export default function Progress() {
  const [progressTitle, setProgressTitle] = useState('');
  const [progressReps, setProgressReps] = useState('');
  const [progressWeight, setProgressWeight] = useState('');
  const [progressSets, setProgressSets] = useState('');
  const [progressList, setProgressList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);



  function handleAddRecord() {
    const _newRecord = {
      key: Math.random().toString,
      title: progressTitle,
      reps: parseInt(progressReps),
      weight: progressWeight === '' ? 0 : parseInt(progressWeight),
      sets: progressWeight === '' ? 0 : parseInt(progressSets),
      date: currentDate
      
    };

    if (progressTitle === '' || 
        progressReps === '') {
      alert('field cannot be blank');
      setModalVisible(true);
    } else {
      const newRecords = [...progressList, _newRecord];
      setProgressList(newRecords);
      setModalVisible(false);
    }
    setProgressTitle('');
    setProgressReps('');
    setProgressWeight('');
    setProgressSets('');
  }

  function resetRecords() {
    setProgressList('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.icon2}>
        <Pressable onPress={resetRecords} onLongPress={() => setProgressList([])}>
          {close}
        </Pressable>
      </View>
      <Text style = {styles.heading}>Workouts</Text>
      <ScrollView>
        {progressList.length > 0 ? (
        <View>
          {progressList.map((item, index) => { //find a way to reverse the map.... reverse() is buggy 
            return <Progressitem 
            key={index} 
            item={item} 
            reps={item.reps} 
            weight={item.weight} 
            sets={item.sets}
            date = {item.date}
          />;
          })}
        </View>
          ) : (
          <Text style={styles.nodata}>No progress data to display. Click the plus button to get started</Text>
          )}
      </ScrollView>
      <View style={styles.icon}>
        <Pressable onPress={() => setModalVisible(true)}>{plus}</Pressable>
      </View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style = {styles.iconClose}
              onPress={() => { 
                setModalVisible(false); }}
              >{closeSmall}
            </Pressable>
            <Text style = {{color: 'white', fontSize: 24, marginBottom: 8}}>Add a Workout</Text>
            <TextInput
              style={styles.input}
              placeholder="Add Title..."
              placeholderTextColor={'lightgray'}
              color = {'white'}
              value={progressTitle}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text) => setProgressTitle(text)}
            />
             <TextInput
              style={styles.input}
              placeholder="Add Reps..."
              placeholderTextColor={'lightgray'}
              color = {'white'}
              value={progressReps}
              onChangeText={(text) => setProgressReps(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Add Weight..."
              placeholderTextColor={'lightgray'}
              color = {'white'}
              value={progressWeight}
              onChangeText={(text) => setProgressWeight(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Add sets..."
              placeholderTextColor={'lightgray'}
              color = {'white'}
              value={progressSets}
              onChangeText={(text) => setProgressSets(text)}
            />
            <Pressable style = {styles.iconPlus}
              onPress={() => {
                handleAddRecord();   
              }}>{plusSmall}
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#FF9F0A', // ios system orange
    marginTop: 20,
    marginHorizontal: 10
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'gray',
    //borderColor: 'black',
    //borderWidth: 1,
    borderRadius: 8,
    width: 300,
    marginTop: 5,
   // marginBottom: 10,
   alignSelf: 'center',
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
  marginTop: 40,
},
iconClose: {
  justifyContent: 'center',
  alignItems: 'flex-end',
  paddingRight: 16,
},
iconPlus: {
  justifyContent: 'center',
  alignItems: 'flex-end',
  paddingRight: 16,
  paddingTop: 15
},
 // Styles for modal container
 modalContainer: {
  flex: 1,
  justifyContent: 'center', // flex-end
  alignItems: 'center',
  backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
},
// Styles for modal content
modalContent: {
  backgroundColor: '#3A3A3C', //ios 4
  borderRadius: 10,
  padding: 20,
  maxWidth: 380
},
nodata: {
  color: 'white',
  fontSize: 24,
  marginHorizontal: 20,
  marginVertical: 35,
},

});