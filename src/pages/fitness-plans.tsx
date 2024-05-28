import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    ImageBackground,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { getExerciseTypes } from "../api/api";
import { WorkoutScreen } from "../components/workout-screen";
import { FitnessPlansNavigationProp } from "../types";
import { RootStackParamList } from "../types";

const image = require("../../assets/images/dumbell-image.jpg");

type Props = {
    navigation: FitnessPlansNavigationProp;
};

type Workout = {
    id: string;
    name: string;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    workoutCategoryName: {
        margin: 15,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        alignContent: "center",
        justifyContent: "center",
        paddingLeft: 10,
    },
    workoutCategoryContainer: {
        justifyContent: "center",
        height: 80,
        width: "45%",
        borderColor: "white",
        borderWidth: 2,
        marginBottom: 15,
        marginLeft: 20,
        backgroundColor: "#778899",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
});

const FitnessPlansStack = createStackNavigator<RootStackParamList>();

export const FitnessPlansStackScreen = () => {
    return (
        <FitnessPlansStack.Navigator>
            <FitnessPlansStack.Screen
                name="Fitness Plans"
                component={FitnessPlans}
                options={{
                    headerStyle: {
                        backgroundColor: "#808080",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            />
            <FitnessPlansStack.Screen
                name="Workout Screen"
                component={WorkoutScreen}
                options={{
                    title: "Workouts",
                    headerStyle: {
                        backgroundColor: "#808080",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            />
        </FitnessPlansStack.Navigator>
    );
};

export const FitnessPlans = ({ navigation }: Props) => {
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        getExerciseTypes().then((response) => {
            setWorkouts(response);
        });
    }, []);

    const renderItem = ({ item }: { item: Workout }) => {
        const { id, name } = item;
        return (
            <TouchableOpacity
                key={id}
                onPress={() =>
                    navigation.navigate("Workout Screen", {
                        workoutCategoryId: id,
                    })
                }
            >
                <View style={styles.workoutCategoryContainer}>
                    <Text style={styles.workoutCategoryName}>{name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <FlatList
                    data={workouts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ImageBackground>
        </View>
    );
};
