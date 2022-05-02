import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{fontSize: 40, textAlign: 'center', color: 'black', top: -15}}>
        Contador: {contador}
      </Text>
      {/* <Button title="Click" onPress={() => setContador(contador + 1)} /> */}
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={{borderRadius: 100, backgroundColor: 'red'}}>
          <Text>+ 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContadorScreen;
