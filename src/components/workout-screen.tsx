import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import { WorkoutScreenRouteProp } from "../types";
import { getWorkouts } from "../api/api";
import { WorkoutInfo } from "./workout-info";

const image = require("../../assets/images/dumbell-image.jpg");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    workoutInfo: {
        justifyContent: "flex-start",
        padding: 5,
        fontFamily: "Cochin",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
});

type Props = {
    route: WorkoutScreenRouteProp;
};

export const WorkoutScreen = ({ route }: Props) => {
    const { workoutCategoryId } = route.params;
    const [exercises, setExercises] = useState<
        { name: string; description: string }[]
    >([]);
    const [currentlySelectedWorkout, setCurrentlySelectedWorkout] =
        useState("");

    useEffect(() => {
        getWorkouts(workoutCategoryId).then((response) => {
            setExercises(response);
        });
    }, [workoutCategoryId]);

    const showDescription = (name: string) => {
        currentlySelectedWorkout === name
            ? setCurrentlySelectedWorkout("")
            : setCurrentlySelectedWorkout(name);
    };

    console.log(currentlySelectedWorkout);
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <FlatList
                    data={exercises}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => (
                        <WorkoutInfo
                            name={item.name}
                            description={item.description}
                            showText={currentlySelectedWorkout === item.name}
                            onPress={() => showDescription(item.name)}
                        />
                    )}
                />
            </View>
        </ImageBackground>
    );
};
