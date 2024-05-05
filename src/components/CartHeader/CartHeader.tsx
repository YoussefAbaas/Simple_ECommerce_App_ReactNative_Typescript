import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './CartHeader.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const CartHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <AntDesign name="left" size={30} color={'#E96E6E'} />
      </Pressable>
      <Text style={styles.title}>My Cart</Text>
      <Image
        source={require('../../../assets/img/user.jpeg')}
        style={styles.iconContainer}
      />
    </View>
  );
};

export default CartHeader;
