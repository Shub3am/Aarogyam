import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Repetition from './components/RepetitionPage/Repetition';
import Duration from './components/Duration/Duration';
import Home from './components/HomePage/Home';
import Water from './components/WaterPage/Water';
import Progress from './components/Progress/Progress';
import Routine from './components/Routine/Routine';
import History from './components/History/History';
import Timer from './components/Timer/Timer';
import RegisterScreen from './components/Register/Register';
import Warmup from './components/Workouts/Warmup';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: 'orange' },
        headerTintColor: 'white',
        headerTitleStyle: 'bold',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Repetition" component={Repetition} />
      <Stack.Screen name="Duration" component={Duration} />
      <Stack.Screen name="Water" component={Water} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Warmup" component={Warmup} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'ios-barbell-sharp' : 'ios-barbell-outline';
              size = 20;
            } else if (route.name === 'Routine') {
              iconName = 'sync';
              size = 20;
            } else if (route.name === 'Workout') {
              iconName = focused ? 'list-sharp' : 'list-outline';
              size = 20;
            } else if (route.name === 'Timer') {
              iconName = 'timer-outline';
              size = 20;
            } else if (route.name === 'About') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              size = 20;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'lightgray',
          tabBarStyle: {
            display: 'flex',
            backgroundColor: '#3A3A3C',
          },
          headerShown: false,
          headerStyle: { backgroundColor: 'orange' },
          headerTintColor: 'white',
          headerTitleStyle: 'bold',
        })}
      >
        <Tab.Screen name="Main" component={MainNavigator} />
        <Tab.Screen name="Routine" component={Routine} />
        <Tab.Screen name="Workout" component={Progress} />
        <Tab.Screen name="Timer" component={Timer} />
        <Tab.Screen name="About" component={RegisterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
