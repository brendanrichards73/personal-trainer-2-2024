import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { removeHTML } from "../api/utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width: 300,
        backgroundColor: "lightgrey",
    },
    text: {
        marginTop: 3,
        justifyContent: "center",
    },
    descriptionText: {
        margin: 10,
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#778899",
    },
});

export const WorkoutInfo = ({ name, description, showText, onPress }) => {
    return (
        <View style={styles.container}>
            <Button
                style={styles.text}
                title={name}
                onPress={onPress}
                color="#778899"
            />
            {showText && (
                <Text style={styles.descriptionText}>
                    {removeHTML(description)}
                </Text>
            )}
        </View>
    );
};
