import * as React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

const handsClappingImage = require("../../assets/images/Hands-Clapping-Chaulk-Kettlebell.jpeg");

const styles = StyleSheet.create({
    text: {
        paddingLeft: 20,
        color: "white",
        fontSize: 45,
        textAlign: "left",
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
    },
});

export const HomeScreen = () => {
    return (
        <>
            <ImageBackground
                source={handsClappingImage}
                resizeMode="cover"
                style={styles.image}
            >
                <View>
                    <Text style={styles.text}>MiFitness</Text>
                </View>
            </ImageBackground>
        </>
    );
};
