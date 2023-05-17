import {  useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Pressable, Modal} from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Weekview from "./weekview";

const newAdd = <Icon name = "chevron-up-circle" size = {50} color = 'orange'/>
const close = <Icon name = 'chevron-down-circle' size = {45} color = 'orange'/>
const plus = <Icon name="add-circle" size={45} color="orange"/>
const icon = <Icon name="close" size={45} color="white"/>

export default function Routine(pressedDays, RoutineName, ){

//sets the deafualt screen to show one routine container 
let [routine, setRoutine] = useState([])
let [modalVisible, setModalVisible] = useState(false)
let [routineName, setRoutineName] = useState('')



    function handleAddRoutine(){
        const _newRoutine = {
          key: Math.random().toString,
          days: pressedDays,
          name: RoutineName
        
        }
          const newRoutine = [...routine,  _newRoutine] 
          setRoutine(newRoutine)
          setModalVisible(false)
          
          
      
      }
      
      function resetRoutine(){
        setRoutine([]); 
        
      }

     
      return (
        <View style={styles.container}>
          <View style={styles.icon2}>
            <Pressable onPress={() => resetRoutine()}>{icon}</Pressable>
          </View>
          <ScrollView>
            <View>
              {routine.map((item, index, ) => {
                return (
                  <Weekview key={index}
                    item={item}
                    days={pressedDays}
                    name = {routineName}
                  />
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.icon}>
            <Pressable onPress={() => setModalVisible(true)}>{newAdd}</Pressable>
          </View>
          <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContentContainer}>
                <View style={styles.icon}>
                  <Pressable onPress={() => setModalVisible(false)}>{close}</Pressable>
                </View>
                <View style={styles.weekViewContainer}>
                  <Weekview
                    initialPressedDays={pressedDays}
                    onSave={(days) => {
                      pressedDays(days)
                      setModalVisible(false)
                    }}
                    onCancel={() => setModalVisible(false)}
                    routineName={routineName}
                    setRoutineName={setRoutineName}
                  />
                </View>
                <View style = {styles.icon}>
                        <Pressable onPress={() => handleAddRoutine()}>{plus}</Pressable>        
                    </View>
              </View>
            </View>
          </Modal>
        </View>
      )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
        alignItems: "center",
     //   justifyContent: "center",
       
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
      },

    modalContentContainer: {
        backgroundColor: 'gray'
    },
      weekViewContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        
      },

})