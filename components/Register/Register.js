import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';



const RegisterScreen = ( {navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle registration logic here
  const handleRegister = () => {
    //authentication for fields 
    if(username == "" && email == "" && password == ""){
        alert('cannot continue')
    } else {
    navigation.navigate("Main")
    }
  }

  return (
    <View style={styles.container}>
        <View>
            <Text style = {styles.heading}>Create an account</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="lightgray"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="lightgray"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="lightgray"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Register"
        onPress = {handleRegister}
        color={'white'}
      />
      <Text style = {styles.loginText}>Have an Account?</Text>
      <Button
        title="Login"
        onPress // put link here to a profile screen
        color={'white'} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
  },
  heading: {
    color: 'orange',
    fontSize: 24,
    marginVertical: 15,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold'
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 5,
  }
});

export default RegisterScreen;
