import React, {Component} from 'react';
import {StyleSheet, View, Keyboard, KeyboardAvoidingView, Image, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Weather from '../components/Weather';
import Locations from '../components/Locations';
import AddLocation from '../components/AddLocation';
import Loading from '../components/Loading';
import actionCreators from '../actions';
import bgImage from '../assets/bg.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  fullBackground: {
    position: 'absolute',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

class App extends Component<{}> {
  componentDidMount() {
    this.props.fetchWeather('Rio de Janeiro');
  }

  onAddLocation = location => {
    this.props.fetchWeather(location);
    Keyboard.dismiss();
  };

  onAddCurrentLocation = (latitude, longitude) => {
    this.props.fetchWeatherByCoords(latitude, longitude);
  };

  render() {
    const {locations, isLoading} = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <View style={styles.fullBackground}>
          <Image style={styles.backgroundImage} source={bgImage} />
        </View>
        <Locations locations={locations} />
        <AddLocation
          onPress={this.onAddLocation}
          onAddCurrentLocation={this.onAddCurrentLocation}
        />
        <Loading isLoading={isLoading} />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.currentWeather.isLoading,
  locations: state.locations,
});
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
