import axios from 'axios';

export const getUser = async (userId) => {
  const response = await axios.get('https://reqres.in/api/users/2');
  return response.data.data;
};

export const getExerciseTypes = async () => {
  const response = await axios.get('https://wger.de/api/v2/exercisecategory/');
  return response.data.results;
};

export const getWorkouts = async (number) => {
  const response = await axios.get(
    `https://wger.de/api/v2/exercise/?language=2&category=${number}`,
  );
  return response.data.results;
};