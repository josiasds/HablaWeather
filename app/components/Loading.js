import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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

const Loading = ({isLoading}) => {
  if (!isLoading) return null;
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default Loading;
