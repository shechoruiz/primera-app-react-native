import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      {/* <Button title="Click" onPress={() => setContador(contador + 1)} /> */}
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={styles.button}>
          <Text>+ 1</Text>
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
  button: {borderRadius: 100, backgroundColor: 'red'},
});

export default ContadorScreen;
