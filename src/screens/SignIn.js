import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {SignInButton} from '../components/SignInbutton';

export const SignIn = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View>
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <View>
        <Image source={require('../assets/images/SignIn.png')} />
      </View>
      <View style={styles.buttons}>
        <SignInButton
          icon="google"
          title="Continue with google"
          onpress={() => navigation.navigate('TodoApp')}
        />
        <SignInButton
          icon="facebook"
          title="Continue with Facebook"
          onpress={() => navigation.navigate('Home')}
        />
        <SignInButton
          icon="chevron-right"
          title="Explore without Login"
          onpress={() => navigation.navigate('Home')}
        />
      </View>
      <View>
        <Text style={styles.or}>OR</Text>
      </View>
      <View>
        <Text style={styles.text}>Login with Business Account?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  or: {
    fontSize: 18,
  },
});
