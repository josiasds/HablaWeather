import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 80,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    textAlign: 'center',
  },
  item: {
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  button: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 6,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  currentLocation: {
    backgroundColor: 'orange',
  },
});

class AddLocation extends Component {
  state = {
    location: '',
  };

  onChangeText = location => {
    this.setState({location});
  };

  onSubmit = () => {
    this.props.onPress(this.state.location);
    this.setState({location: ''});
  };

  onAddCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => this.props.onAddCurrentLocation(coords.latitude, coords.longitude),
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TextInput
            value={this.state.location}
            onChangeText={this.onChangeText}
            placeholder="Ex.: London, UK"
            style={styles.input}
          />
          <TouchableOpacity
            onPress={this.onSubmit}
            disabled={!this.state.location}
            style={styles.button}
          >
            <Icon name="add-location" color="white" size={20} />
            <Text style={styles.buttonText}>ADD LOCATION</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.onAddCurrentLocation}
          style={[styles.button, styles.currentLocation, styles.item]}
        >
          <Icon name="my-location" color="white" size={20} />
          <Text style={styles.buttonText}>ADD CURRENT LOCATION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddLocation;
