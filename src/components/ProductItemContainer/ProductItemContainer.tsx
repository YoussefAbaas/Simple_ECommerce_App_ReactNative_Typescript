import {FlatList} from 'react-native';
import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import {Products} from '../../fakers';

type Props = {
  data: typeof Products;
};

const ProductItemContainer = ({data}: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <ProductItem {...item} key={index} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductItemContainer;
