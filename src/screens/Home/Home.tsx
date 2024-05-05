import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Home.styles';
import {
  FilterButtons,
  HomeHeader,
  ProductItemContainer,
  SearchInput,
} from '../../components';
import {Text} from 'react-native';
import {Products} from '../../fakers';

const Home = () => {
  const [productsData, setProductsData] = useState(Products);
  const searchProducts = (searchTerm: string) => {
    searchTerm === ''
      ? setProductsData(Products)
      : setProductsData(
          Products.filter(p => p.title.toLowerCase().includes(searchTerm)),
        );
  };
  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <HomeHeader />
      <Text style={styles.titleText}>Match Your Style</Text>
      <SearchInput searchHandler={searchProducts} />
      <FilterButtons />
      <ProductItemContainer data={productsData} />
    </LinearGradient>
  );
};

export default Home;
