import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getItem = async key => {
  try {
    let data = await AsyncStorage.getItem(key);
    let localStorageData = JSON.parse(data);
    return localStorageData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
