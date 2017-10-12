import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';

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
  button: {
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
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

  render() {
    return (
      <View style={styles.container}>
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
          <Text style={styles.buttonText}>ADD LOCATION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddLocation;
