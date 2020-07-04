import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';
import MainScreen from '_scenes/main';

const AuthNavigatorConfig = {
  initialRouteName: 'Main',
  headerShown: false,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  Main: MainScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
