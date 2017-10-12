import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
  },
  weatherRow: {
    flexDirection: 'row',
    padding: 20,
  },
  data: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
  },
  city: {
    fontSize: 24,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
  minMaxTemp: {
    marginTop: 10,
    marginRight: 20,
  },
});

const Weather = ({data, isLoading}) => (
  <View style={styles.container}>
    {data && data.weather ? (
      <View style={[styles.weatherRow]}>
        <Image
          style={{width: 60, height: 60}}
          source={{uri: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`}}
        />
        <View style={styles.data}>
          <Text style={[styles.city, styles.text]}>{data.name}</Text>
          <Text style={[styles.temperature, styles.text]}>{data.main.temp}&deg;</Text>
          <Text style={[styles.description, styles.text]}>{data.weather[0].main}</Text>
          <View style={styles.row}>
            <Text style={[styles.text, styles.minMaxTemp]}>
              MIN: {data.main.temp_min}&deg;
            </Text>
            <Text style={[styles.text, styles.minMaxTemp]}>
              MAX: {data.main.temp_max}&deg;
            </Text>
          </View>
        </View>
      </View>
    ) : (
      <Text style={styles.data}>{isLoading ? 'Loading...' : 'No data available.'}</Text>
    )}
  </View>
);

export default Weather;
