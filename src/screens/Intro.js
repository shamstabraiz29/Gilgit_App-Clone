import React, {useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {styles} from './styles';
import {SignIn} from './SignIn';

export const Intro = ({navigation}) => {
  const [showMainApp, setShowMainApp] = useState(false);
  const slides = [
    {
      key: 'one',
      text: 'Welcome to gilgit.app. A portal to buy and sell your items.',
      image: require('../assets/images/Group1.png'),
      logo: require('../assets/images/logo.png'),
    },
    {
      key: 'two',
      text: 'Buy and Sell Vehicles',
      image: require('../assets/images/Group4.png'),
      logo: require('../assets/images/logo.png'),
    },
    {
      key: 'three',
      text: 'Buy and Sell electronics',
      image: require('../assets/images/Group2.png'),
      logo: require('../assets/images/logo.png'),
    },
    {
      key: 'four',
      text: 'Buy or Sell your house, office or plot',
      image: require('../assets/images/Group3.png'),
      backgroundColor: '#22bcb5',
      logo: require('../assets/images/logo.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.main}>
        <View style={styles.logo}>
          <Image source={item.logo} />
        </View>
        <View style={styles.image}>
          <Image source={item.image} />
        </View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onSkipSlide = () => {
    setShowMainApp(true);
  };

  const onDoneAll = () => {
    return setShowMainApp(true);
  };

  const renderNextButton = () => {
    return (
      <View style={styles.btn}>
        <Text style={styles.btntext}>Next</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.btn}>
        <Text style={styles.btntext}>Get Started</Text>
      </View>
    );
  };
  const renderSkipButton = () => {
    return (
      <View style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
    );
  };

  if (showMainApp) {
    return <SignIn />;
  } else {
    return (
      <>
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onSkip={onSkipSlide}
          onDone={onDoneAll}
          showSkipButton={true}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderDoneButton}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          bottomButton
        />
        <StatusBar hidden />
      </>
    );
  }
};
