import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const WorkoutScreen = () => {
  const route = useRoute();

  // Access the entire workout object from the route parameters
  const workout = route.params?.workout || {};
  const exercises = workout.exercises || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.Title}</Text>
      <Text style={styles.body}>{workout.body}</Text>
      
      <Text style={styles.exercisesHeader}>Exercises:</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <View style={styles.exerciseItem}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseDescription}>{item.description}</Text>
            <Text style={styles.exerciseDescription}>{item.stretches}</Text>
          </View>
        )}
       // keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 18,
    marginBottom: 20,
  },
  exercisesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseItem: {
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseDescription: {
    fontSize: 16,
  },
});

export default WorkoutScreen;