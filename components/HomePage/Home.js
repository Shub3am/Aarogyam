import { StyleSheet, View,  FlatList, Text,ScrollView, Pressable,  } from 'react-native';
import { Button } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Weekview from '../Routine/weekview';
//import image1 from 'images/image1'


const activities = [
  {
  title:"Running",
  type:"Duration",
  icon: <Icon name="ios-walk-sharp" size={25} color="white" />
  },
  {
  title:"Biking",
  type:"Duration",
  icon: <Icon name="ios-bicycle" size={25} color="white" />
  },
  {
  title:"Bench Press",
  type:"Repetition",
  icon: <Icon name="ios-barbell-outline" size={25} color="white" />
  },
  {
  title:"Curls",
  type:"Repetition",
  icon: <Icon name="ios-barbell-outline" size={25} color="white" />
  },
  {
  title:"Jumping Jacks",
  type:"Repetition",
  icon: <Icon name="ios-body-outline" size={25} color="white" />
  },  
  ]
  const workouts = [
    {
      Title: "15 min warmup",
      type: "Warmup",
      body: "This is a 15min light warmup to get you ready for a workout",
      exercises: [
        {
          name: "Stretching",
          description: "Stretch your muscles to warm them up.",
          
        },
        {
          name: "Jumping Jacks",
          description: "Do 5 sets of 20 jumping jacks each.",
        },
        //
        {
          name: "Squats",
          description: "Do squats for 3min 2 times.",
        },
        {
          name: "Jumping Jacks",
          description: "Do 5 sets of 20 jumping jacks each.",
        },
        {
          name: "Jumping Jacks",
          description: "Do 5 sets of 20 jumping jacks each.",
        },
        // Add more exercises as needed
      ],
    },
    {
      Title: "30 min light",
      type: "Warmup",
      body: "This is a 30min light workout for a busy day",
      exercises: [
        {
          name: "Push-Ups",
          description: "Do 3 sets of 15 push-ups each.",
        },
        {
          name: "Squats",
          description: "Do 4 sets of 20 squats each.",
        },
        // Add more exercises as needed
      ],
    },
    {
      Title: "30 min Intense",
      type: "Warmup",
      body: "30min of intense strength building to reach your goals",
      exercises: [
        {
          name: "Burpees",
          description: "Do 5 sets of 10 burpees each.",
        },
        {
          name: "Planks",
          description: "Hold a plank for 1 minute per set.",
        },
        // Add more exercises as needed
      ],
    },
    {
      Title: "1 hr moderate",
      type: "Warmup",
      body: "1hr moderate exercise to get you pumped",
      exercises: [
        {
          name: "Cycling",
          description: "Cycle for 30 minutes at a moderate pace.",
        },
        {
          name: "Running",
          description: "Run for 20 minutes at a steady pace.",
        },
        // Add more exercises as needed
      ],
    },
  ];


const settings = <Icon name="fitness-outline" size={30} color="white"/>

export default function Home( {navigation}) {
  return (
<View style={styles.container}>
  <Text style={styles.heading1}>Welcome Back, User</Text>
  <View style={styles.icon}>
    <Pressable onPress={() => navigation.navigate("About")}>{settings}</Pressable>
  </View>
  <Text style={styles.headings}>Quick Picks</Text>
  <View style={styles.quickpicks}>
    <View style={styles.topScroll}>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={activities}
        renderItem={({ item }) => (
          <Button
            icon={item.icon}
            title={item.title}
            titleStyle={{ fontSize: 16, paddingHorizontal: 4 }}
            onPress={() => navigation.navigate(item.type, { activity: item.title })}
            color={'white'}
            buttonStyle={styles.Button}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  </View>

  <ScrollView>
    <Text style={styles.headings}>Health</Text>
    <Button
      title={'Water Tracking'}
      onPress={() => navigation.navigate("Water")}
      buttonStyle={styles.waterButton}
    />
    <Text style={styles.headings}>History & Tracking</Text>
    <Button
      title={'Workout History'}
      onPress={() => navigation.navigate("History")}
      buttonStyle={styles.historyTrackingButton}
    />
    <Text style={styles.headings}>Explore Workouts</Text>
    {workouts.map((item, index) => (
      <View style={styles.workoutContainer} key={index}>
        <Button
          icon={item.icon}
          title={item.Title}
          titleStyle={{ fontSize: 18 }}
          onPress={() => navigation.navigate(item.type, { workout: item })}
          color={'white'}
          buttonStyle={styles.workoutButton}
        />
      </View>
    ))}
  </ScrollView>
</View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#558C8C', //dark cyan
   // backgroundColor: '#EEF5DB', //beige
   // backgroundColor: '#34403A', //black olive
   // backgroundColor: '#7C9885', //cambridge blue //top pick for background
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
   
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 40,
    marginTop: 20,  
  },
//  quickpicks:{
//    backgroundColor: '#1C1C1E',//'#3A3A3C', //ios 4
//    marginHorizontal: 15,
//    borderRadius: 8,
//    marginTop: 20,
//  },
  heading1: {
    fontSize: 28, 
    color: '#E4E4E4',
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',  
  },
  headings: {
    fontSize: 24, 
    color: '#E4E4E4',
    paddingHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',  
  },
  topScroll: {
    flexDirection: 'row',
  },
  list: {
    flex: 1, 
    marginTop: 10,
  },
  Button:{
    marginVertical: 14,
    marginHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 60,
    //backgroundColor: '#E6AF2E', //yellow
    backgroundColor: '#FF9F0A', // ios system orange
   // backgroundColor: '#558C8C', //dark cyan
    //backgroundColor: '#EEF5DB', //beige
   // backgroundColor: '#34403A', //black olive //top pick for button pair with cambridge blue
   //backgroundColor: '#7C9885', //cambridge blue
      //backgroundColor: '#8E8E93', //ios dark mode background system gray 
    width: 140,
    height: 40  
  },
  workoutButton:{
    backgroundColor: 'gray', 
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15,
    height: 60
  },
  waterButton: {
    backgroundColor: '#0A84FF', //ios systemBlueColor dark
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15,
    height: 60
  },
  historyTrackingButton: {
   // backgroundColor: '#BF3CF2', //ios systemPurpleColor dark
   // backgroundColor: '#5E5CE6',  //ios systemIndigoColor Dark 
    backgroundColor: '#30D158', // ios system green
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15,
    height: 60
  },
  Weekview: {
    flex: 1,
    alignItems: 'center',
  },
  workouts: {
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 24,
    //backgroundColor: '#E6AF2E', //yellow
    backgroundColor: '#FF9F0A', // ios system orange
   // backgroundColor: '#558C8C', //dark cyan
    //backgroundColor: '#EEF5DB', //beige
   // backgroundColor: '#34403A', //black olive //top pick for button pair with cambridge blue
   //backgroundColor: '#7C9885', //cambridge blue
      //backgroundColor: '#8E8E93', //ios dark mode background system gray 
    width: 110,
    height: 110,
    marginHorizontal: 20
  }

});
