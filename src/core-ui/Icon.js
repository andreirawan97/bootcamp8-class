import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

class Icon extends Component {
  render() {
    let defaultColor = 'white';
    let defaultSize = 32;

    let {name, color, size} = this.props;

    name = 'md-' + name;

    return (
      <Ionicons
        name={name}
        size={size ? size : defaultSize}
        color={color ? color : defaultColor}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default Icon;
