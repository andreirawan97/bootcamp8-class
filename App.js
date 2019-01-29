import React from 'react';
import {StyleSheet, View} from 'react-native';

import TextComp from './src/core-ui/Text';
import Header from './src/core-ui/Header';
import Icon from './src/core-ui/Icon';

export default class App extends React.Component {
  render() {
    // let leftComponent = (
    //   <Text style={styles.componentTextStyle}>{`< Back`}</Text>
    // );
    let leftComponent = <Icon name="arrow-back" />;
    //let centerComponent = <Text style={styles.titleStyle}>TITLE</Text>;
    let centerComponent = 'TITLE';
    let rightComponent = <Text style={styles.componentTextStyle}>help</Text>;

    return (
      <View>
        <Header
          leftComponent={leftComponent}
          centerComponent={centerComponent}
          rightComponent={rightComponent}
        />
        <View style={styles.container}>
          <TextComp>Open up App.js to start working on your app!</TextComp>
          <TextComp size="MEDIUM" color="PRIMARY">
            Open up App.js to start working on your app!
          </TextComp>
          <TextComp size="LARGE">
            Open up App.js to start working on your app!
          </TextComp>
        </View>
      </View>
    );
  }
}

// let LeftComponent = () => <View style={styles.componentStyle}>
// <Text style={styles.componentTextStyle}>{`< Back`}</Text>
// </View>
// <Header leftComponent={LeftComponent} center

const styles = StyleSheet.create({
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
