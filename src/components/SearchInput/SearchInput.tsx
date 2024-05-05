import {TextInput, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './SearchInput.styles';

type Props = {
  searchHandler: Function;
};

const SearchInput = ({searchHandler}: Props) => {
  return (
    <View style={styles.container}>
      <AntDesign name={'search1'} size={18} color={'#C0C0C0'} />
      <TextInput
        placeholder="Search"
        style={styles.textInputStyle}
        maxLength={20}
        onChangeText={text => searchHandler(text)}
      />
    </View>
  );
};

export default SearchInput;
