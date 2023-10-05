import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Platform, TextInput} from 'react-native';
import { Button } from 'react-native-elements'




const Timer = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  const countdown = `${Math.floor(time / 3600)
    .toString().padStart(2, '0')}:${Math.floor((time % 3600) / 60)
    .toString().padStart(2, '0')}:${(time % 60)
    .toString().padStart(2, '0')}`
    



  const handleStart = () => {

    if (time === 0) {
      setTime(Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds));
      
    }    if (!minutes && !seconds && !hours) {
      alert("No Time Specified🤦‍♂️")
    } else {
    setIsActive(true);}
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
   // } else if (time === 0) {
   //   Alert.alert('Timer Done');
   //   setIsActive(false);
    } else if (time == 0 && isActive) {
      alert("Time's Up😎")
      handleReset()
    }else {
      
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{countdown}</Text>
  
      {isActive ? (
        <></>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={hours}
            onChangeText={setHours}
            keyboardType="number-pad"
            maxLength={2}
            placeholder="Hrs"
            placeholderTextColor={'lightgray'}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.input}
            value={minutes}
            onChangeText={setMinutes}
            keyboardType="number-pad"
            maxLength={2}
            placeholder="Min"
            placeholderTextColor={'lightgray'}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.input}
            value={seconds}
            onChangeText={setSeconds}
            keyboardType="number-pad"
            maxLength={2}
            placeholder="Sec"
            placeholderTextColor={'lightgray'}
          />
        </View>
      )}
      <View style={styles.buttonContainer}>
        {!isActive ? (
          <Button 
            title="Start" 
            onPress={handleStart} 
            buttonStyle = {styles.startButton}
            />
        ) : (
        <View>
          <Button 
            title="Stop" 
            onPress={handleStop} 
            buttonStyle = {styles.stopButton}
            />
          <Button 
            title="Reset" 
            onPress={handleReset}
            buttonStyle = {styles.resetButton}
            />
        </View>
        )}    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
      },
      time: {
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 50,
        color: 'white'
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      input: {
        height: 60,
        width: 60,
        borderWidth: 1,
        color: 'white',
      //  borderColor: 'gray',
        borderRadius: 8,
        backgroundColor: '#3A3A3C', //ios 4
        fontSize: 20,
        textAlign: 'center',
      },
      colon: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: 'white'
      },
     
      startButton: {
        backgroundColor: '#30D158', // ios system green
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 15,
        height: 60,
        width: 200
        },
        stopButton: {
            backgroundColor: 'red', // ios system green
            marginHorizontal: 10,
            marginVertical: 15,
            borderRadius: 15,
            height: 60,
            width: 200
        },
        resetButton: {
            backgroundColor: 'orange', // ios system green
            marginHorizontal: 10,
            marginVertical: 15,
            borderRadius: 15,
            height: 60,
            width: 200
        },
  });
  
  export default Timer;
