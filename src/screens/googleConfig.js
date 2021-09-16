import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {SignInButton} from '../components/SignInbutton';

export const GoogleConfig = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
      androidClientId:
        '806109938076-2vsetk0g0qbmvnont49tp8j33e8s4gmu.apps.googleusercontent.com',
      webClientId:
        '806109938076-adcp3vgnbs0seo6174gmnoc0maffh3h7.apps.googleusercontent.com',
      offlineAccess: true,
    });
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('error SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error IN_PROGRESS');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('error PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log('else', error);
      }
    }
  };

  return (
    <View>
      <SignInButton
        title="Continue with google"
        onpress={signIn}
        icon="google"
      />
    </View>
  );
};
