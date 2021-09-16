import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'white',
    width: 190,
    height: 220,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marchaView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginTop: 2,
  },
  location: {
    flexDirection: 'row',
    marginTop: 4,
  },
  time: {
    marginLeft: 5,
  },
  marchaText: {
    color: '#009CEA',
    fontSize: 12,
    marginBottom: 5,
  },
  marchaIcon: {
    marginLeft: 4,
    marginBottom: 4,
  },
  modelText: {
    fontSize: 12,
    marginTop: 3,
    color: 'grey',
  },
  priceText: {
    fontSize: 12,
    marginTop: 2,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 3,
  },
});
