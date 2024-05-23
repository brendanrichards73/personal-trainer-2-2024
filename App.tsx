import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "./src/pages/home-screen";
import { FitnessPlansStackScreen } from "./src/pages/fitness-plans";
import { Settings } from "./src/pages/settings";
import { Profile } from "./src/pages/profile";

const Tab = createBottomTabNavigator();

const dependencies = {
    Ionicons,
};

export default function App({ deps = dependencies }) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = "ios-home";

                            if (route.name === "HomeScreen") {
                                iconName = focused ? "home" : "home";
                            }
                            if (route.name === "FitnessPlans") {
                                iconName = focused ? "fitness" : "fitness";
                            }
                            if (route.name === "Profile") {
                                iconName = focused ? "person" : "person";
                            }
                            if (route.name === "Settings") {
                                iconName = focused ? "list" : "list";
                            }

                            return (
                                <deps.Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "#00ff7f",
                        tabBarInactiveTintColor: "white",
                        tabBarStyle: {
                            backgroundColor: "#808080",
                        },
                    })}
                >
                    <Tab.Screen name="HomeScreen" component={HomeScreen} />
                    <Tab.Screen
                        name="FitnessPlans"
                        component={FitnessPlansStackScreen}
                    />
                    <Tab.Screen name="Profile" component={Profile} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
