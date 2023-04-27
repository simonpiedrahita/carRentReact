// In App.js in a new project

import * as React from 'react';
import detallesScreen from './screens/detallesScreen.js'
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react'

//arreglo de usuarios
let users = [
  {username: 'simon', name: 'simon', password: 1234, rol: '1'}, 
  {username: 'pepito', name: 'pepito ', password: 1234, rol: '2'},
  {username: 'fulano', name: 'fulano ', password: 123, rol: '3'},
]
//arreglo de carros
let cars =[
  {platenumber:'abc123',brand:'toyota',state:true},
  {platenumber:'def456',brand:'nissan',state:true},
  {platenumber:'ghi789',brand:'mazda',state:true},
]
//arreglo de carros rentas
let rents =[
  {platenumber:'abc123',rentnumber:'def456',username: 'simon', rentdate:'22032023'},
]


// Se instancia la libreria bottom Stack Navigator

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTab} options={{title: 'Sistema de pruebas'}} />
        <Stack.Screen name="Detalles" component={detallesScreen} options={{title: 'Sistema de pruebas'}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RegisterScreen(){
  //pendiente realizar el push para el registro de lo susuarios
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Registro De Usuario  </Text>
          <TextInput label = 'nombre'
            mode='outlined'
            onChangeText={name => setName(name)}
            value= {name}
            style={{margin: 20}}
          />
          <TextInput label = 'usuario'
            mode='outlined'
            onChangeText={username => setUsername(username)}
            value= {username}
            style={{margin: 20}}
          />
          <TextInput label = 'password'
            secureTextEntry
            mode='outlined'
            onChangeText={password => setPassword(password)}
            value= {password}
            style ={{marginTop: 10, marginBottom: 30}}
          />
            <Button icon="account" mode="contained" onPress={() => {
             
            }}
            
            >
            Ingresar
          </Button>


    </View>
  );

}

function LoginScreen({navigation, route}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Inicio de Sesión  </Text>
          <TextInput label = 'usuario'
            mode='outlined'
            onChangeText={username => setUsername(username)}
            value= {username}
            style={{margin: 20}}
          />
          <TextInput label = 'password'
            secureTextEntry
            mode='outlined'
            onChangeText={password => setPassword(password)}
            value= {password}
            style ={{marginTop: 10, marginBottom: 30}}
          />
            <Button icon="account" mode="contained" onPress={() => {
              let findUser = users.find(user => user.username == username && user.password == password)

              if(findUser != undefined){
              navigation.navigate('Detalles', {name: findUser.name, username:findUser.username})
              } else {
                  alert("INVALIDO")
              }
            }}
            
            >
            Ingresar
          </Button>


    </View>
  );
}

function CarScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Car Registration  </Text>
          

    </View>
  );
}

// Se instancia la libreria bottom navigator

const Tab = createBottomTabNavigator();


function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0FA3B1',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor:'#B5E2FA',
        tabBarStyle: {
        backgroundColor: 'white',
        borderTopColor: 'black'
        },
      }}
    >
      <Tab.Screen name='Login' component={LoginScreen}/>
      <Tab.Screen name='Home' component={detallesScreen} />
      <Tab.Screen name='Car' component={CarScreen}/>
      <Tab.Screen name='Register' component={RegisterScreen}/>
    </Tab.Navigator>
  );
}



 