import React from 'react';
import {FlatList, Text} from 'react-native';

import Weather from './Weather';

const Locations = ({locations}) => {
  return (
    <FlatList
      data={Object.values(locations)}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Weather data={item} />}
    />
  );
};

export default Locations;
