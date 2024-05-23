import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import {getWorkouts} from '../api/api';
import {WorkoutInfo} from './workout-info';

const image = require('../../assets/images/dumbell-image.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  workoutInfo: {
    justifyContent: 'flex-start',
    padding: 5,
    fontFamily: 'Cochin',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // opacity: 0.3,
  },
});

export const WorkoutScreen = ({route}) => {
  const {workoutCategoryId} = route.params;
  const [exercises, setExercises] = useState([]);
  const [currentlySelectedWorkout, setCurrentlySelectedWorkout] = useState('');
  useEffect(() => {
    getWorkouts(workoutCategoryId).then((response) => {
      setExercises(response);
    });
  }, [workoutCategoryId]);

  const showDescription = (name) => {
    currentlySelectedWorkout === name
      ? setCurrentlySelectedWorkout('')
      : setCurrentlySelectedWorkout(name);
  };

  console.log(currentlySelectedWorkout);
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <FlatList>
          {exercises.map(({name, description}) => (
            <WorkoutInfo
              style={styles.workoutInfo}
              name={name}
              description={description}
              showText={currentlySelectedWorkout === name}
              onPress={() => showDescription(name)}
            />
          ))}
        </FlatList>
      </View>
    </ImageBackground>
  );
};