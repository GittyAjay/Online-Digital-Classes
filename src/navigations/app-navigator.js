import {createBottomTabNavigator} from 'react-navigation-tabs';
import React, { Component } from "react";
import Ant from "react-native-vector-icons/AntDesign";
import Evil from "react-native-vector-icons/EvilIcons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  headerShown: false,
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Homes',
      tabBarIcon: <Ant name="home" style={{ color: "forestgreen" }} size={26} />
    }
  },
  Library: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'Library',
      tabBarIcon: <Ant name="find" style={{ color: "forestgreen" }} size={26} />
    }
  },
  Category: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'Store',
      tabBarIcon: <Ant name="appstore-o" style={{ color: "forestgreen" }} size={26} />
    }
  },
  Chat: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'Homes',
      tabBarIcon: <Ant name="dribbble" style={{ color: "forestgreen" }} size={26} />
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: <Ant name="setting" style={{ color: "forestgreen", fontWeight: 'bold' }} size={26} />
    }
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
