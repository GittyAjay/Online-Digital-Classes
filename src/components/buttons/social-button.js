import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, View, Assets, Image } from "react-native-ui-lib";
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';

Assets.loadAssetsGroup('icons', {
  facebook: require('../../assets/icons/facebook.png'),
  google: require('../../assets/icons/google-plus.png'),
});

export default function SocialButton(){
  GoogleSignin.configure({
    webClientId: '667903567159-1hmrh7oge5jjg9tt37h8m25e630as854.apps.googleusercontent.com',
  });

  return(
    <View padding-20 style={styles.socialLogin}>
    <Button
      backgroundColor="#3b5998"
      iconSource={Assets.icons.facebook}
      iconStyle={{
        resizeMode: "contain",
        borderWidth: 5,
        height: 26,
        width: 26,
      }}
      label="Facebook"
      borderRadius={4}
      style={styles.facebookBtn}
      onPress={() => onFacebookButtonPress()}
    />

    <Button
      backgroundColor="#db3236"
      iconSource={Assets.icons.google}
      label="Google  "
      borderRadius={4}
      style={styles.googleBtn}
      onPress={() => onGoogleButtonPress()}
    />
  </View>
  )
};
async function onGoogleButtonPress() {
  try{
    console.log('you are in onGoogle Button press');
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken).catch((error) => {
      console.log("Api call error");
      alert(error.message);
    });;
    return auth().signInWithCredential(googleCredential);
    console.log('Success');
  }catch(err){
    console.log(err);
  }
}

async function onFacebookButtonPress() {
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  return auth().signInWithCredential(facebookCredential);
}

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
  },
});
