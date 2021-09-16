import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Intro} from '../screens/Intro';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import {SignIn} from '../screens/SignIn';
import {TodoApp} from "../screens/TodoApp"

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TodoApp" component={TodoApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
