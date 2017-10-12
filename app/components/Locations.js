import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import Weather from './Weather';

const styles = StyleSheet.create({
  list: {
    marginBottom: 40,
  },
});

const Locations = ({locations}) => {
  return (
    <FlatList
      data={Object.values(locations)}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Weather data={item} />}
      style={styles.list}
    />
  );
};

export default Locations;
