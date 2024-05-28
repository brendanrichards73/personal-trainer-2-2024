import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { getWorkouts } from "../api/api";

export const WorkoutCategory = ({ workOutName, id }) => {
    const [exercises, setExercises] = useState([]);
    const clickHandler = () => {
        getWorkouts(id).then((response) => {
            setExercises(response);
            console.log("I am workout", response);
        });
        console.log("I have been clicked with id", id);
    };
    return (
        <>
            <Text>{workOutName}</Text>
            {exercises.map(({ name }) => (
                <TouchableOpacity onPress={clickHandler()}>
                    {name}
                </TouchableOpacity>
            ))}
        </>
    );
};
