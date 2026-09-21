import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (newLog) => {
  try {
    const currentDate = new Date().toLocaleDateString('en-US');
    const currentHistory = await AsyncStorage.getItem('historyLog');
    if (currentHistory !== null) {
      const currentHistoryParse = JSON.parse(currentHistory);
      const updatedHistory = [...currentHistoryParse, { ...newLog, date: currentDate }];
      const jsonValue = JSON.stringify(updatedHistory);
      await AsyncStorage.setItem('historyLog', jsonValue);
    } else {
      const history = [{ ...newLog, date: currentDate }];
      const jsonValue = JSON.stringify(history);
      await AsyncStorage.setItem('historyLog', jsonValue);
    }
  } catch (e) {
    console.log(e);
  }
};

const icon = <Icon name="ellipsis-horizontal-circle-sharp" size={40} color="lightgray" />;
const plus = <Icon name="add-circle" size={40} color="orange" />;
const minus = <Icon name="remove-circle" size={40} color="orange" />;

export default function Repetition({ route, navigation }) {
  const { activity } = route.params;

  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(0);

  function handleAlert() {
    if (count > 0) {
      Alert.alert('Log Reps?', 'This will save your reps to history', [
        {
          text: 'OK',
          // History renders time + rep + weight + pounds back to back, e.g. "10 Reps x 20lbs".
          onPress: () =>
            saveData({
              activityName: activity,
              time: count,
              weight: weight == 0 ? '0' : weight,
              rep: ' Reps x ',
              pounds: 'lbs',
            }),
        },
        {
          text: 'Go To History',
          isPreferred: true,
          onPress: () => navigation.navigate('History'),
        },
        {
          text: 'Cancel',
          style: 'destructive',
        },
      ]);
    } else {
      alert('Start a Workout to add to history');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Pressable onPress={handleAlert}>{icon}</Pressable>
      </View>
      <Text style={{ fontSize: 30, color: 'white', marginBottom: 25 }}>{activity}</Text>
      <View style={styles.buttoncontainer}>
        <Pressable
          onPress={() => setCount(count - 1)}
          onLongPress={() => setCount(count - 5)}
          disabled={count == 0}
        >
          {minus}
        </Pressable>
        <Text style={{ fontSize: 32, color: 'white', paddingHorizontal: 30 }}>Reps: {count}</Text>
        <Pressable onPress={() => setCount(count + 5)} onLongPress={() => setCount(count + 10)}>
          {plus}
        </Pressable>
      </View>
      <View style={styles.buttoncontainer}>
        <Pressable onPress={() => setWeight(weight - 5)} disabled={weight == 0}>
          {minus}
        </Pressable>
        <Text style={{ fontSize: 32, color: 'white', paddingHorizontal: 21 }}>
          weight: {weight}
        </Text>
        <Pressable onPress={() => setWeight(weight + 5)}>{plus}</Pressable>
      </View>
      <View style={styles.buttoncontainer}>
        <Button
          title="reset"
          onPress={() => {
            setCount(0);
            setWeight(0);
          }}
          color={'white'}
          buttonStyle={styles.ButtonReset}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1C1E', // iOS dark mode systemGray6
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 40,
    marginTop: 20,
  },
  ButtonReset: {
    paddingVertical: 25,
    borderRadius: 50,
    width: 80,
    height: 80,
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#FF453A', // iOS system red
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
  },
});
