import React, { Component } from "react";
import { HelpText, SocialButton } from '_components';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Animated,
  Dimensions,
  Keyboard,
  Platform,
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";
import navigations from "_navigations";
const SCREEN_HEIGHT = Dimensions.get("window").height;

class MainScreen extends Component {
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

  navigateOTP() {
    navigation.navigate('OTP');
  }
  render() {
    const headerTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [1, 0],
    });
    const marginTop = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [25, 100],
    });
    const headerBackArrowOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1],
    });
    const helpTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [0, 1],
    });

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent barStyle='dark-content' backgroundColor="transparent"/>
        <Animated.View
          style={{
            position: "absolute",
            width: 60,
            top: 50,
            left: 20,
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
            height: 40,
            width: 40,
            right: 10,
            top: 260, // animated
            opacity: this.forwardArrowOpacity, //animated
            zIndex: 100,
            backgroundColor: "#54575e",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
        >
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('OTP') }}>
            <Icon name="arrowright" style={{ color: "white" }} size={32} />
          </TouchableOpacity>
        </Animated.View>

        <ImageBackground
          source={require("../assets/login_bg.jpg")}
          style={{ flex: 1 }}
        >
          <Animated.View
            style={{
              flex: 1,
              zIndex: 1000,
              opacity: helpTextOpacity,
            }}
          >
            <HelpText title='Mobile Vericification' message='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' animation={require('../assets/lottie/mobile.json')} animStyle={{ width: 240, height: 200}}/>
          </Animated.View>

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
                    pointerEvents="none"
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Image
                      source={require("../assets/india.png")}
                      style={{ height: 24, width: 24, resizeMode: "contain" }}
                    />
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
            <SocialButton />
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
});
