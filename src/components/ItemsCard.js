import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './CardStyle';

export const ItemsCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.Main}>
        <View style={styles.card}>
          <Image source={require('../assets/images/bike.png')} />
          <View>
            <Text style={styles.modelText}>Honda 125 CC 2011</Text>
          </View>
          <View>
            <Text style={styles.priceText}>Rs.84,000</Text>
          </View>
          <View style={styles.marchaView}>
            <Text style={styles.marchaText}>Available in Marcha</Text>
            <Icon
              style={styles.marchaIcon}
              name="check-circle-o"
              color="#009CEA"
            />
          </View>
          <View style={styles.location}>
            <Icon name="map-marker" style={styles.locationIcon} />
            <Text>Gilgit</Text>
            <Text style={styles.time}>2 days ago</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
