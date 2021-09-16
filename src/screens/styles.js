import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
  },
  image: {
    flex: 3,
  },
  text: {
    fontSize: 18,
    width: 200,
    textAlign: 'center',
    flex: 2,
  },
  btn: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: 100,
    height: 40,
    borderRadius: 5,
  },
  btntext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  dot: {
    color: 'blue',
    backgroundColor: 'lightgray',
  },
  activeDot: {
    backgroundColor: '#21AFFF',
  },
  skipBtn: {
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
    width: 80,
    height: 35,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  skipText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});
