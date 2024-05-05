import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './FilterButtons.styles';

const FilterButtons = () => {
  const buttonTitles = ['Trending Now', 'All', 'New'];
  const [selectedButton, setSelectedButton] = useState(buttonTitles[0]);
  return (
    <View style={styles.containerStyle}>
      {buttonTitles.map((title, index) => (
        <Pressable
          style={[
            styles.buttonStyle,
            index === 0 && {flex: 2},
            selectedButton === title && {
              backgroundColor: '#E96E6E',
            },
          ]}
          onPress={() => setSelectedButton(title)}>
          <Text
            style={[
              styles.title,
              selectedButton === title && {color: 'white'},
            ]}>
            {title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FilterButtons;
