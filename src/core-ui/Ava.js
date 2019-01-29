// @flow

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

type Props = {
  shape: 'ROUNDED' | 'SQUARE',
  width: 'SMALL' | 'MEDIUM' | 'LARGE',
  color: 'DEFAULT' | string,
};

const LARGE_WIDTH = 150;
const MEDIUM_WIDTH = 100;
const SMALL_WIDTH = 75;

export default function Ava(props: Props) {
  let {shape, width, color} = props;
  switch (width) {
    case 'SMALL':
      styles.imageContainer = SMALL_WIDTH;
      styles.imageContainer = SMALL_WIDTH;
      styles.image.height = SMALL_WIDTH;
      style.image.width = SMALL_WIDTH;
      break;
    case 'MEDIUM':
      styles.imageContainer = MEDIUM_WIDTH;
      styles.imageContainer = MEDIUM_WIDTH;
      styles.image.height = MEDIUM_WIDTH;
      style.image.width = MEDIUM_WIDTH;
      break;
    case 'LARGE':
      styles.imageContainer = SMALL_WIDTH;
      styles.imageContainer = SMALL_WIDTH;
      styles.image.height = SMALL_WIDTH;
      style.image.width = SMALL_WIDTH;
      break;
  }
  switch (shape) {
    case 'ROUNDED':
      styles.image.borderRadius = Math.floor(0.5 * style.image.width);
      break;
    case 'SQUARE':
      break;
  }
  switch (color) {
    case 'DEFAULT':
      styles.imageContainer.backgroundColor = 'blue';
      break;
    default:
      styles.imageContainer.backgroundColor = color;
      break;
  }
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: ''}} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: SMALL_WIDTH,
    height: SMALL_WIDTH,
  },
  image: {
    width: SMALL_WIDTH,
    height: SMALL_WIDTH,
  },
});
