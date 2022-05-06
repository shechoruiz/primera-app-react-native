import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 20,
    borderWidth: 5,
    paddingHorizontal: 100,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});

export default BoxObjectModelScreen;
