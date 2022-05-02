import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      {/* <Button title="Click" onPress={() => setContador(contador + 1)} /> */}
      <TouchableOpacity
        onPress={() => setContador(contador - 1)}
        style={styles.fabLocationBl}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>- 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setContador(contador + 1)}
        style={styles.fabLocationBr}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+ 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    top: -15,
  },
  fabLocationBr: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBl: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default ContadorScreen;
