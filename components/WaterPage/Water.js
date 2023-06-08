import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import { useState } from "react";
import {Button} from 'react-native-elements'




export default function Water(props) {

 // const {activity} = props.route.params
 
  let [Water, setWater] = useState(0);
  let [newAmount, setNewAmount] = useState('');
  let [goal, setGoal] = useState('');

  
  const handleAmtChange = (value) => {
    setNewAmount(value);
  }
  
  function handleAddWater(){
    const newWater = parseInt(newAmount, 10);
    if (!isNaN(newWater)) {
      setWater(Water + newWater);
      setNewAmount('');
    }else{
      alert("only numbers allowed" )
    }
  }

  function handleSubWater(){
    const newWater = parseInt(newAmount, 10);
    if (!isNaN(newWater)) {
      setWater(Water - newWater);
      setNewAmount('');
    }else{
      alert("only numbers allowed")
    }
  }

  function resetAmt(){
    setWater(0)
  }


  return (
    <View style = {styles.container}>
      <ScrollView >
      <View style = {styles.amountContainerContainer}>
      <View style = {styles.amountContainer}>
        <Text style = {styles.amount}>{Water}</Text>
        <Text style = {{fontSize: 28}}>oz</Text>
      </View>
      </View>
      <TextInput 
      placeholder="Enter Water Amount Here"
      placeholderTextColor= 'black'
      keyboardType="number-pad"
      returnKeyType="done"
      value={newAmount} 
      onChangeText={handleAmtChange}
      style={styles.input} 
      />
      <View style = {styles.buttoncontainer}>
      <Button 
      title="Add" 
      titleStyle = {{color: 'black'}} 
      onPress={handleAddWater} 
      buttonStyle = {styles.ButtonAdd} 
      />
      <Button 
      title="Sub" 
      onPress={handleSubWater}
      buttonStyle = {styles.ButtonSub}      
      />  
      <Button 
      title="reset" 
      onPress={resetAmt}
      buttonStyle = {styles.ButtonReset}      
      />     
      </View>
      <Text style = {{fontSize: 24, color: 'white'}}>Qick Add</Text>
      <View style = {styles.buttoncontainer2}>
        <Button 
        title="6oz" 
        titleStyle = {{color: 'black'}}
        onPress={() => setWater(Water + 6)}
        buttonStyle = {styles.Button2}    
        />
        <Button 
        title="12oz" 
        titleStyle = {{color: 'black'}}
        onPress={() => setWater(Water + 12)}
        buttonStyle = {styles.Button2}      
        /> 
         <Button 
        title="24oz"
        titleStyle = {{color: 'black'}} 
        onPress={() => setWater(Water + 24)}
        buttonStyle = {styles.Button2}      
        /> 
         <Button 
        title="36oz"
        titleStyle = {{color: 'black'}} 
        onPress={() => setWater(Water + 36)}
        buttonStyle = {styles.Button2}      
        /> 
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
    alignItems: "center",
    justifyContent: "center",
    
  },
  //container for heading and amount displayed 
  amountContainerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop:30,
  },
  //parent container for the amount of water disaplyed
  amountContainer: {  
    backgroundColor: '#5AC8F5', //ios systemCyanColor
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 110,
    marginTop: 65,
   // borderWidth: 2
  },
  // Text for the amount of water displayed
  amount:{
    fontSize: 78,
  },
  input: {
    paddingVertical: 15, 
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    //borderColor: 'black',
    //borderWidth: 1,
    borderRadius: 8,
    width: 350,
    marginTop: 30,
    marginBottom: 10
  },
  buttoncontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
    
  },
  buttoncontainer2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
    
  },
  Button:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#8E8E93', //ios dark mode background system gray 
  },
  ButtonAdd:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#32D74B', // ios system green
  },
  ButtonSub:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#FF453A', // ios system red
  },
  ButtonReset:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 40,
    width: 80,
    height: 80,
   // backgroundColor: '#F88141',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#FF9F0A', // ios system orange
  },
  Button2:{
    fontSize: 12,
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 30,
    width: 60,
    height: 60,
   // backgroundColor: '#F88141',
    marginHorizontal: 10,
    marginVertical: 40,
    backgroundColor: '#63E6E2', //ios dark mode systemMintColor
    backgroundColor: '#5AC8F5', //ios systemCyanColor
  },

});