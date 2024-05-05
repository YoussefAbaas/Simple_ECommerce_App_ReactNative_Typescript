import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './CartItem.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../../redux/cartSlice';

type Props = {
  id: number;
  image: string;
  title: string;
  price: string;
  color: string;
  size: string;
};

const CartItem = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.rightCart}>
        <Image style={styles.image} source={props.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>${props.price}</Text>
          <View style={styles.choicesContainer}>
            <View
              style={[styles.colorChoice, {backgroundColor: props.color}]}
            />
            <View style={styles.sizeContainer}>
              <Text style={[styles.sizeText]}>{props.size}</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => {
          dispatch(removeFromCart(props.id));
        }}>
        <Icon name="delete" size={30} color="#F68CB5" />
      </Pressable>
    </View>
  );
};

export default CartItem;
