import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SignInButton = ({icon, title, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.Btn}>
        <Icon name={icon} size={20} />
        <Text style={styles.BtnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: '85%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'lightgray',
    marginTop: 10,
  },
  BtnText: {
    fontSize: 20,
  },
});
