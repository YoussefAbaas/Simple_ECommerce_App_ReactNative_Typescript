import {Pressable, Text} from 'react-native';
import React from 'react';
import styles from './Button.styles';

type Props = {
  title: string;
  onPress: Function;
};
const Button = ({title, onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
