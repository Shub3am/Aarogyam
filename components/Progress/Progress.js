import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Pressable } from "react-native";

export default function Progress(){

    let [field, setField] = ([])

    const changeText = () => {
        field(setField(''))
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.rowContainer}>
                <Text style = {{fontSize:24, color: 'white'}}>
                    BenchPress
                </Text>
                <TextInput  
                    onPress={changeText} 
                    style = {styles.input}
                    keyboardType="number-pad"
                    >
                    
                        <Text>{field}</Text>
                </TextInput>
                <Text style = {{fontSize:24, color: 'white'}}>
                    X
                </Text>
                <TextInput 
                    onPress={changeText}  
                    style = {styles.input}
                    keyboardType="numeric">
                        <Text>{field}</Text>
                </TextInput>
            </View>
            <View style = {styles.rowContainer}>
                <Text style = {{fontSize:24, color: 'white'}}>
                    Shoulder Press
                </Text>
                <TextInput  
                    onPress={changeText} 
                    style = {styles.input}>
                        <Text>{field}</Text>
                </TextInput>
                <Text style = {{fontSize:24, color: 'white'}}>
                    X
                </Text>
                <TextInput 
                    onPress={changeText}  
                    style = {styles.input}
                    keyboardType="numeric">
                        <Text>{field}</Text>
                </TextInput>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
        alignItems: "center",
        justifyContent: "center",
        
      },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headings: {
        fontSize: 30, 
        color: 'white',
        paddingHorizontal: 20,
        marginTop: 20,
        fontWeight: 'bold',
       
      },
    input: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 10,
        fontSize: 16

    }

})