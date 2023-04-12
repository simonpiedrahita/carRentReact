import { View, Text, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-web';

export default function detallesScreen({navigation, route}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla de detalles </Text>
         <Text> Nombre completo: {route.params.nombre}, Usuario: {route.params.usuario}, Contraseña: {route.params.password} </Text> 
          <TextInput value ={route.params.nombre} 
          />
          
          <TextInput value ={route.params.usuario} 
          />

        <Button
        title="ir al inicio "
        onPress={() => navigation.navigate('Inicio')}
      />
      </View>
    );
  
  }