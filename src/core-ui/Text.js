// @flow

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
type Props = {
  size: 'SMALL' | 'MEDIUM' | 'LARGE',
  color: 'PRIMARY' | 'CANCEL' | 'INFO' | 'DEFAULT',
  style: Object,
  children: string,
};

export default function TextComp(props: Props) {
  let {children, size, color, style, ...otherProps} = props;
  let {sizeType, fontColor} = styles;
  let fontStyle = [
    sizeType[size || 'MEDIUM'],
    fontColor[color || 'DEFAULT'],
    style,
  ];

  return (
    <Text style={fontStyle} {...otherProps}>
      {children}
    </Text>
  );
}
const styles = {
  sizeType: {
    SMALL: {
      fontSize: 12,
    },
    MEDIUM: {
      fontSize: 20,
    },
    LARGE: {
      fontSize: 28,
    },
  },

  fontColor: {
    PRIMARY: {
      color: 'blue',
    },
    CANCEL: {
      color: 'red',
    },
    INFO: {
      color: '#00b3b3',
    },

    DEFAULT: {
      color: 'black',
    },
  },
};
