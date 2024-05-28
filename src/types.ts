import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    "Fitness Plans": undefined;
    "Workout Screen": { workoutCategoryId: string };
    // TODO - other routes to go here
};

export type FitnessPlansNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Fitness Plans"
>;

export type WorkoutScreenRouteProp = RouteProp<
    RootStackParamList,
    "Workout Screen"
>;
