import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';

import bgImage from './assets/bg.jpg';

const API_KEY = 'c6caf2e78ddfc740ceea63478cb1b59a';

export default class App extends Component<{}> {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(error => console.warn(error));
  }

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.fullBackground}>
          <Image style={styles.backgroundImage} source={bgImage} />
        </View>
        <View>
          <Text>{data.main ? data.main.temp : 'No data'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullBackground: {
    position: 'absolute',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
