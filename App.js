import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

//import screens
import Repetition from './components/RepetitionPage/Repetition'
import Duration from './components/Duration/Duration';
import Home from './components/HomePage/Home';
import Water from './components/WaterPage/Water';
import Progress from './components/Progress/Progress';
import Routine from './components/Routine/Routine';
import History from './components/History/History';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const icon = <Icon name="person-circle-outline" size={30} color="white"/>

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
          //  backgroundColor: '#34403A', //black olive
          //  backgroundColor: '#8E8E93'  //ios system gray
            backgroundColor: '#FF9F0A', // ios system orange
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          },
          headerTintColor: 
          'white',
          headerRight: () => (
            <Button
            onPress={() => alert('This button does nothing')}
            icon={icon}
            buttonStyle={styles.Button}
          />
          )
        }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'My Fitness Bro' }}/>
        <Stack.Screen name="Repetition" component={Repetition} options={{ title: 'Count Your Reps' }}/>
        <Stack.Screen name= "Duration" component={Duration} options={{ title: 'Start a Timer'}}/>
        <Stack.Screen name= "Water" component={Water} options={{ title: 'Track Your Water'}}/>
        <Stack.Screen name= "Progress" component={Progress} options={{ title: 'Track Your Progress'}}/>
        <Stack.Screen 
          name= "Routine" 
          component={Routine} 
          options={{ 
            title: 'Start your Routine' , 
            }}/>
        <Stack.Screen name= "History" component={History} options={{ title: 'History'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    

    
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: null
  }
});
