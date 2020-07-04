import React from 'react';
import {View, Text} from 'react-native';

const facebookIcon = require("_assets/icons/facebook.png");
const googleIcon = require("_assets/icons/google-plus.png");

const Test = () => (
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
                onPress={() => {}}
              />

              <Button
                backgroundColor="#db3236"
                iconSource={googleIcon}
                label="Google  "
                borderRadius={4}
                style={styles.googleBtn}
                onPress={() => {}}
              />
            </View>
);

export default Test;
