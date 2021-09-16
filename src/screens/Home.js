import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Authentication} from './Authentication';

const Home = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Authentication />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Home;
