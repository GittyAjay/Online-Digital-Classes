import React, { Component } from "react";
import LottieView from "lottie-react-native";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Keyboard,
  Platform,
} from "react-native";

import { Button } from "react-native-ui-lib"; //eslint-disable-line
import Icon from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const facebookIcon = require("../assets/icons/facebook.png");
const googleIcon = require("../assets/icons/google-plus.png");

class MainScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor() {
    super();

    this.state = {
      placeholderText: "Enter your mobile number",
    };

    this.loginHeight = new Animated.Value(160);

    this.keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardWillShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardWillHide
    );

    this.keyboardHeight = new Animated.Value(0);
    this.forwardArrowOpacity = new Animated.Value(0);
    this.borderBottomWidth = new Animated.Value(0);
  }

  keyboardWillShow = (event) => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }

    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: event.endCoordinates.height + 10,
        useNativeDriver: false,
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }

    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: event.duration,
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  increaseHeightOfLogin = () => {
    this.setState({ placeholderText: "092123456789" });
    Animated.timing(this.loginHeight, {
      toValue: SCREEN_HEIGHT,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      this.refs.textInputMobile.focus();
    });
  };

  decreaseHeightOfLogin = () => {
    Keyboard.dismiss();
    Animated.timing(this.loginHeight, {
      toValue: 160,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  render() {
    const headerTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [1, 0],
    });
    const marginTop = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [25, 60],
    });
    const headerBackArrowOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1],
    });
    const titleTextLeft = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [100, 25],
    });
    const titleTextBottom = this.loginHeight.interpolate({
      inputRange: [150, 400, SCREEN_HEIGHT],
      outputRange: [0, 0, 100],
    });
    const titleTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1],
    });

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            width: 60,
            top: 48,
            left: 25,
            zIndex: 100,
            opacity: headerBackArrowOpacity, //animated
          }}
        >
          <TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}>
            <Icon name="arrowleft" style={{ color: "black" }} size={32} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            height: 48,
            width: 48,
            right: 10,
            bottom: this.keyboardHeight, // animated
            opacity: this.forwardArrowOpacity, //animated
            zIndex: 100,
            backgroundColor: "#54575e",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
        >
          <Icon name="arrowright" style={{ color: "white" }} size={32} />
        </Animated.View>

        <ImageBackground
          source={require("../assets/login_bg.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Animatable.View
              animation="zoomIn"
              iterationCount={1}
              style={{
                backgroundColor: "white",
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 26 }}>OSI</Text>
            </Animatable.View>
          </View>

          {/** BOTTOM HALF **/}
          <Animatable.View animation="slideInUp" iterationCount={1}>
            <Animated.View
              style={{
                height: this.loginHeight, //animated
                backgroundColor: "white",
              }}
            >
              <Animated.View
                style={{
                  opacity: headerTextOpacity, //animated
                  alignItems: "flex-start",
                  paddingHorizontal: 25,
                  marginTop: marginTop, //animated
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Get moving with Uber{" "}
                </Text>
                <Text>
                  Lorem ipsum is a placeholder text commonly used to the visual
                  form of a document.{" "}
                </Text>
              </Animated.View>

              <TouchableOpacity onPress={() => this.increaseHeightOfLogin()}>
                <Animated.View
                  style={{
                    marginTop: marginTop, //animated
                    paddingHorizontal: 25,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Animated.View
                    style={{
                      width: 300,
                      height: 200,
                      alignItems: "center",
                      flexDirection: "row",
                      position: "absolute",
                      opacity: titleTextOpacity,
                    }}
                  >
                    
                    <Animated.Text
                      style={{
                        fontSize: 18,
                        color: "gray",
                        bottom: titleTextBottom, //animated
                        left: titleTextLeft, //animated
                        opacity: titleTextOpacity, //animated
                      }}
                    >
                      
                      Enter your mobile number
                    </Animated.Text>
                   
                  </Animated.View>

                  <Image
                    source={require("../assets/india.png")}
                    style={{ height: 24, width: 24, resizeMode: "contain" }}
                  />
                  <Animated.View
                    pointerEvents="none"
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        paddingHorizontal: 10,
                      }}
                    >
                      +91
                    </Text>

                    <TextInput
                      keyboardType="numeric"
                      ref="textInputMobile"
                      style={{ flex: 1, fontSize: 20 }}
                      placeholder={this.state.placeholderText}
                      underlineColorAndroid="transparent"
                    />
                  </Animated.View>
                </Animated.View>
              </TouchableOpacity>
            </Animated.View>
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
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
