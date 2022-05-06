import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import ContadorScreen from './src/screens/ContadorScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
import PosicionScreen from './src/screens/PosicionScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.view}>
      {/* <HolaMundoScreen />
      <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <PosicionScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#A3B3C2',
    flex: 1,
  },
});

export default App;
