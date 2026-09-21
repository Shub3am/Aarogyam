import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-elements';

export default function Water() {
  const [waterOunces, setWaterOunces] = useState(0);
  const [newAmount, setNewAmount] = useState('');

  const handleAmtChange = (value) => {
    setNewAmount(value);
  };

  function handleAddWater() {
    const newWater = parseInt(newAmount, 10);
    if (!isNaN(newWater)) {
      setWaterOunces(waterOunces + newWater);
      setNewAmount('');
    } else {
      alert('only numbers allowed');
    }
  }

  function handleSubWater() {
    const newWater = parseInt(newAmount, 10);
    if (!isNaN(newWater)) {
      setWaterOunces(waterOunces - newWater);
      setNewAmount('');
    } else {
      alert('only numbers allowed');
    }
  }

  function resetAmt() {
    setWaterOunces(0);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.amountContainerContainer}>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{waterOunces}</Text>
            <Text style={{ fontSize: 28 }}>oz</Text>
          </View>
        </View>
        <TextInput
          placeholder="Enter Water Amount Here"
          placeholderTextColor="black"
          keyboardType="number-pad"
          returnKeyType="done"
          value={newAmount}
          onChangeText={handleAmtChange}
          style={styles.input}
        />
        <View style={styles.buttoncontainer}>
          <Button
            title="Add"
            titleStyle={{ color: 'black' }}
            onPress={handleAddWater}
            buttonStyle={styles.ButtonAdd}
          />
          <Button title="Sub" onPress={handleSubWater} buttonStyle={styles.ButtonSub} />
          <Button title="reset" onPress={resetAmt} buttonStyle={styles.ButtonReset} />
        </View>
        <Text style={{ fontSize: 24, color: 'white' }}>Quick Add</Text>
        <View style={styles.buttoncontainer2}>
          <Button
            title="6oz"
            titleStyle={{ color: 'black' }}
            onPress={() => setWaterOunces(waterOunces + 6)}
            buttonStyle={styles.Button2}
          />
          <Button
            title="12oz"
            titleStyle={{ color: 'black' }}
            onPress={() => setWaterOunces(waterOunces + 12)}
            buttonStyle={styles.Button2}
          />
          <Button
            title="24oz"
            titleStyle={{ color: 'black' }}
            onPress={() => setWaterOunces(waterOunces + 24)}
            buttonStyle={styles.Button2}
          />
          <Button
            title="36oz"
            titleStyle={{ color: 'black' }}
            onPress={() => setWaterOunces(waterOunces + 36)}
            buttonStyle={styles.Button2}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', // iOS dark mode systemGray6
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountContainerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  amountContainer: {
    backgroundColor: '#5AC8F5', // iOS system cyan
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 110,
    marginTop: 65,
  },
  amount: {
    fontSize: 78,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    width: 350,
    marginTop: 30,
    marginBottom: 10,
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
  },
  buttoncontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
  },
  ButtonAdd: {
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#32D74B', // iOS system green
  },
  ButtonSub: {
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#FF453A', // iOS system red
  },
  ButtonReset: {
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#FF9F0A', // iOS system orange
  },
  Button2: {
    fontSize: 12,
    paddingVertical: 5,
    borderRadius: 30,
    width: 60,
    height: 60,
    marginHorizontal: 10,
    marginVertical: 40,
    backgroundColor: '#5AC8F5', // iOS system cyan
  },
});
