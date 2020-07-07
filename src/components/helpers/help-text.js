import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from "lottie-react-native";


const HelpText = ({title, message, animation, animStyle}) => (
    <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <LottieView style={animStyle} source={animation} autoPlay false />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
    </View>
);

export default HelpText;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "700"
    },
    message: {
        fontSize: 14,
        textAlign: 'center',
    },
    container: {
        height: 260,
        padding: 25,
    },
});
