import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextComp from './src/core-ui/Text';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextComp>Open up App.js to start working on your app!</TextComp>
        <TextComp size="MEDIUM" color="PRIMARY">
          Open up App.js to start working on your app!
        </TextComp>
        <TextComp size="LARGE">
          Open up App.js to start working on your app!
        </TextComp>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
