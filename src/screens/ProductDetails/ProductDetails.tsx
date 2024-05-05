import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, HomeHeader} from '../../components';
import styles from './ProductDetails.styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/cartSlice';
import {
  CartScreenNavigationProps,
  PostDetailsScreenRouteProp,
} from '../../navigation/NavigationTypes';

const ProductDetails = () => {
  const navigation = useNavigation<CartScreenNavigationProps>();
  const route = useRoute<PostDetailsScreenRouteProp>();
  const item = route.params;
  const dispatch = useDispatch();
  const sizes = ['S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState('');
  const colors = [
    '#91A1B0',
    '#B11D1DD4',
    '#1F44A3C2',
    '#9F632AD4',
    '#1D752BDB',
    '#000000C9',
  ];
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={item?.image} style={styles.imageStyle} />
          <View style={styles.detailsContainer}>
            <Text style={styles.titleStyle}>{item?.title}</Text>
            <Text style={styles.priceStyle}>${item?.price}</Text>
          </View>
          <Text style={styles.choiceTitle}>Size</Text>
          <View style={styles.choiceContainer}>
            {sizes.map(s => (
              <Pressable
                style={styles.sizeContainer}
                onPress={() => setSelectedSize(s)}>
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === s && {color: '#E55B5B'},
                  ]}>
                  {s}
                </Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.choiceTitle}>Colors</Text>
          <View style={styles.choiceContainer}>
            {colors.map(c => (
              <Pressable
                style={styles.sizeContainer}
                onPress={() => setSelectedColor(c)}>
                <View
                  style={
                    selectedColor === c && {
                      ...styles.focusedColorContainer,
                      borderColor: c,
                    }
                  }>
                  <View style={[styles.colorChoice, {backgroundColor: c}]} />
                </View>
              </Pressable>
            ))}
          </View>
          <Button
            title="Add To Cart"
            onPress={() => {
              dispatch(
                addToCart({
                  image: item?.image,
                  color: selectedColor,
                  price: item?.price,
                  size: selectedSize,
                  title: item?.title,
                }),
              );
              navigation.navigate('Main', {
                screen: 'Cart',
              });
            }}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetails;
