import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens
import Repetition from './components/RepetitionPage/Repetition'
import Duration from './components/Duration/Duration';
import Home from './components/HomePage/Home';
import Water from './components/WaterPage/Water';
import Progress from './components/Progress/Progress';
import Routine from './components/Routine/Routine';
import History from './components/History/History';


const icon = <Icon name="person-circle-outline" size={30} color="white"/>

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//stack navigator for screens 
function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Repetition" component={Repetition} />
      <Stack.Screen name="Duration" component={Duration} />
      <Stack.Screen name="Water" component={Water} />
      <Stack.Screen name = 'History' component={History}/>
    </Stack.Navigator>
  );
}

//bottom tab bar 
export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'ios-home-outline';
            } else if (route.name === 'Routine') {
              iconName = focused ? 'sync' : 'sync';
            } else if (route.name === 'Progress') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // Return the icon component with the specified color and size
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'lightgray',
          tabBarStyle: {
            display: 'flex',
            backgroundColor: '#3A3A3C',
          },
          headerShown: true,
          headerStyle: {backgroundColor: 'orange'},
          headerTintColor: 'white',
          headerTitleStyle: 'bold',
         
          
        })}
      >
        <Tab.Screen name="Home" component={MainNavigator} />
        <Tab.Screen name="Routine" component={Routine} />
        <Tab.Screen name="Progress" component={Progress} />
      </Tab.Navigator>
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


