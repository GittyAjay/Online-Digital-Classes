import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Button } from "react-native-ui-lib";

const facebookIcon = require("../../assets/icons/facebook.png");
const googleIcon = require("../../assets/icons/google-plus.png");

const SocialButton = () => (
    <View style={styles.socialLogin}>
        <Button
            backgroundColor="#3b5998"
            iconSource={facebookIcon}
            iconStyle={{
                resizeMode: "contain",
                borderWidth: 5,
                height: 26,
                width: 26,
            }}
            label="Facebook"
            borderRadius={4}
            style={styles.facebookBtn}
            onPress={() => { }}
        />

        <Button
            backgroundColor="#db3236"
            iconSource={googleIcon}
            label="Google  "
            borderRadius={4}
            style={styles.googleBtn}
            onPress={() => { }}
        />
    </View>
);

export default SocialButton;

const styles = StyleSheet.create({
    googleBtn: {
      flex: 1,
      height: 45,
      marginStart: 6,
    },
    facebookBtn: {
      flex: 1,
      height: 45,
      marginEnd: 6,
    },
    socialLogin: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      padding: 20,
    },
  });
