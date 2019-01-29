import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Constants} from 'expo';

const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

class Header extends Component {
  render() {
    let {
      leftComponent,
      centerComponent,
      rightComponent,
      containerStyle,
    } = this.props;

    //Type of JSX: Object
    if (typeof leftComponent === 'string') {
      leftComponent = (
        <Text style={styles.componentTextStyle}>{leftComponent}</Text>
      );
    }
    if (typeof centerComponent === 'string') {
      centerComponent = (
        <Text style={styles.titleStyle}>{centerComponent}</Text>
      );
    }
    if (typeof rightComponent === 'string') {
      rightComponent = (
        <Text style={styles.componentTextStyle}>{rightComponent}</Text>
      );
    }

    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={[styles.containerStyle, containerStyle]}>
          <View style={styles.componentStyle}>{leftComponent}</View>
          <View style={styles.componentStyle}>{centerComponent}</View>
          <View style={styles.componentStyle}>{rightComponent}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: '#8BC34A',
    height: STATUS_BAR_HEIGHT + 50,
    paddingTop: STATUS_BAR_HEIGHT + 10,
    paddingBottom: 10,
  },
  componentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  componentTextStyle: {
    fontSize: 18,
    color: 'white',
  },
  titleStyle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
