import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getExerciseTypes} from '../api/api';
import {WorkoutScreen} from '../components/workout-screen';

const image = require('../../assets/images/dumbell-image.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  workoutCategoryName: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignContent: 'center',
    paddingLeft: 30,
  },
  workoutCategoryContainer: {
    justifyContent: 'center',
    height: 50,
    width: '45%',
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 15,
    marginLeft: 20,
    backgroundColor: '#778899',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // opacity: 0.3,
  },
});

const FitnessPlansStack = createStackNavigator();

export const FitnessPlansStackScreen = () => {
  return (
    <FitnessPlansStack.Navigator>
      <FitnessPlansStack.Screen
        name="Fitness Plans"
        component={FitnessPlans}
        options={{
          title: 'Fitness Plans',
          headerStyle: {
            backgroundColor: '#808080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <FitnessPlansStack.Screen
        name="Workout Screen"
        component={WorkoutScreen}
        options={{
          title: 'Workouts',
          headerStyle: {
            backgroundColor: '#808080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </FitnessPlansStack.Navigator>
  );
};

export const FitnessPlans = ({navigation}: {navigation: any}) => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    getExerciseTypes().then((response) => {
      setWorkouts(response);
    });
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {workouts.map(({id, name}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Workout Screen', {workoutCategoryId: id})
            }>
            <View style={styles.workoutCategoryContainer}>
              <Text style={styles.workoutCategoryName}>{name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ImageBackground>
    </View>
  );
};