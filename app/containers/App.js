import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  StatusBar,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Weather from '../components/Weather';
import Locations from '../components/Locations';
import AddLocation from '../components/AddLocation';
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
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

  render() {
    const {locations, isLoading} = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <View style={styles.fullBackground}>
          <Image style={styles.backgroundImage} source={bgImage} />
        </View>
        <Locations locations={locations} />
        <AddLocation onPress={this.onAddLocation} />
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
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
