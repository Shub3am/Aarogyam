
import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';



const About = ( {navigation }) => {
  
  const [isRegisted, setRegister] = useState(false)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // handle registration logic here
  const handleRegister = () => {
    //authentication for fields 
  
    if(username == "" && email == "" && password == ""){
        alert("Can't be empty, Add Anything ")
    } else {
      setRegister(true)
    // navigation.navigate("About")
    
    }
  } 
  console.log(isRegisted)
  if (isRegisted) {
    
    return(
    <View style={styles.container}>
       <Text style={styles.showCaseText}>CODEX, COMFEST 2023</Text>
      <View style={styles.showCase}>
       
      <Text style={styles.showCaseText}>Thank You For Using "Aarogyam" Fitness App</Text>
      <Text style={styles.showCaseText}>Made By Shubham Vishwakarma,
       </Text>
      <Text style={styles.showCaseText}>
       For CODEX COMFEST 2023 {`\n`}From Sunbeam School Lahartara, {`\n`}CF-CODE: 08</Text>
       
       </View><Button onPress={()=> {setRegister(false)}} title='Navigate Back to About'/>
      </View>)
  } else {
  return (
    
    <View style={styles.container}>
        <View>
            <Text style = {styles.heading}>Made By Shubham Vishwakarma</Text>
            <Text style= {styles.about}>By Sunbeam School Lahartara</Text>
            <Text style= {styles.about}>CF:08</Text>
        </View>
      <Text style={styles.about}>Account Features will not work as we were told to make our application run offline</Text>
      <TextInput
        style={styles.input}
        placeholder="Usename"
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
        color={'black'}
      />
      <Text style = {styles.loginText}>Have an Account?</Text>
      <Button
        title="Login"
        onPress = {handleRegister}
        color={'black'} 
      />
    </View>
  );}
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
  about: {
    color: "white",
    fontSize: 20,
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
  ,showCase: {
    color: "white",
    borderColor: "white",
    fontSize:15,
    borderWidth: 3,
    padding: 10 ,
  },
  showCaseText: {
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    paddingBottom: 2,
    fontSize: 22,
    fontFamily: "monospace",
    justifyContent: 'center',
    alignContent:'center',
    textAlign: "center"
  }
});

export default About;
