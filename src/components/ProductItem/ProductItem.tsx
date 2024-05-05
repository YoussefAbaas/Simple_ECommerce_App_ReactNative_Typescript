import {Image, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './ProductItem.styles';
import Entype from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {ProductDetailsScreenNavigationProp} from '../../navigation/NavigationTypes';

type Props = {
  image: string;
  title: string;
  price: number;
};

const ProductItem = ({image, title, price}: Props) => {
  const products = {
    product1: require('../../../assets/img/product1.jpeg') as string,
    product2: require('../../../assets/img/product2.jpeg') as string,
    product3: require('../../../assets/img/product3.jpeg') as string,
    product4: require('../../../assets/img/product4.jpeg') as string,
  };
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          image: products[image as keyof typeof products],
          title,
          price,
        })
      }>
      <Pressable
        style={styles.iconContainer}
        onPress={() => setIsLiked(!isLiked)}>
        <Entype
          name={isLiked ? 'heart' : 'heart-outlined'}
          size={20}
          color={isLiked ? 'red' : 'black'}
          style={styles.icon}
        />
      </Pressable>
      <Image
        source={products[image as keyof typeof products]}
        style={styles.imageStyle}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </Pressable>
  );
};

export default ProductItem;
