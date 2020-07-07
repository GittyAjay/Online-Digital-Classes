import {createStackNavigator} from 'react-navigation-stack';

import OtpVerification from '_scenes/login/otp-verification';
import MainScreen from '_scenes/main';

const AuthNavigatorConfig = {
  initialRouteName: 'Main',
  headerShown: false,
  headerMode: 'none',
};

const RouteConfigs = {
  Main: MainScreen,
  OTP: OtpVerification,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
