import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from "lottie-react-native";


const HelpText = () => (
    <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <LottieView style={{ width: 200, height: 200 }} source={require('../../assets/lottie/mobile.json')} autoPlay false />
        </View>
        <Text style={styles.title}>Mobile Vericification</Text>
        <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
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
        backgroundColor: "white",
        padding: 25,
    },
});
