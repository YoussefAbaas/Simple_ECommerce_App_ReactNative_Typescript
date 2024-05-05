import {Image, View} from 'react-native';
import React from 'react';
import styles from './HomeHeader.styles';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Entypo name="grid" size={30} color={'#E96E6E'} />
      </View>

      <Image
        source={require('../../../assets/img/user.jpeg')}
        style={styles.iconContainer}
      />
    </View>
  );
};

export default HomeHeader;
