// In App.js in a new project

import * as React from 'react';
import detallesScreen from './screens/detallesScreen.js'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-web';
import { userState } from 'react'
 



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Detalles" component={detallesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Inicio({navigation}) {

  let usuarios = [{nombre: "Juan Jaramillo", usuario: "Lasalsa", password: 12345}, {nombre: "Alfredo ", usuario: "Alfrinoo", password: 45678}, {nombre: "Simon Pai", usuario: "ElSaimon", password: 741258}]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de inicio</Text>
      
      <Button
        title="Detalles "
        onPress={() => navigation.navigate('Detalles', {nombre: "Juan Jaramillo", usuario: "Lasalsa"})}
      />

    </View>
  );
}


const Stack = createNativeStackNavigator();

 