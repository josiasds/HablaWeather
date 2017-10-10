import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import actionCreators from '../actions';
import bgImage from '../assets/bg.jpg';

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
  dataContainer: {
    backgroundColor: 'transparent',
  },
  data: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});

class App extends Component<{}> {
  componentDidMount() {
    this.props.fetchWeather('Rio de Janeiro');
  }

  render() {
    const {data, isLoading} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.fullBackground}>
          <Image style={styles.backgroundImage} source={bgImage} />
        </View>
        <View style={styles.dataContainer}>
          {data ? (
            <View>
              <Text style={styles.data}>{data.name}</Text>
              <Text style={styles.data}>{data.main.temp}</Text>
              <Text style={styles.data}>{data.weather[0].main}</Text>
            </View>
          ) : (
            <Text style={styles.data}>{isLoading ? 'Loading...' : 'No data'}</Text>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.currentWeather.data,
  isLoading: state.currentWeather.isLoading,
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
