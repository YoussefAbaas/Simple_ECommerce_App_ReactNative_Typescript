import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Cart.styles';
import {Button, CartHeader, HorizontalLine} from '../../components';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.products);
  const getTotalPrice = (): number => {
    return items.reduce((price, item) => price + item.price, 0);
  };
  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <CartHeader />
      {items.length > 0 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {items.map((item, index) => (
            <CartItem {...item} id={index} />
          ))}
          <View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceTitle}>Total</Text>
              <Text style={styles.priceValue}>${getTotalPrice()}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceTitle}>Shipping</Text>
              <Text style={styles.priceValue}>${0}</Text>
            </View>
            <HorizontalLine />
            <View style={styles.priceContainer}>
              <Text style={styles.priceTitle}>Grand Total:</Text>
              <Text style={[styles.priceValue, styles.grandTotalPrice]}>
                ${getTotalPrice()}
              </Text>
            </View>
          </View>
          <Button title="Checkout" onPress={() => {}} />
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default Cart;
