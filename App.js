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
 
let users = [{ username: 'Papablo', name: 'Pablo', password: 123456, rol: '1'
}, {
  username: 'jairito', name: 'Jairo ', password: 'Yoyo452', rol: '2'
},
 {
  username: 'Pedrolo', name: 'Pedro ', password: 'Lopez45', rol: '3'
},
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

function ChatScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> CHAT  </Text>

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
      <Tab.Screen name='Home' component={detallesScreen} />
      <Tab.Screen name='Login' component={LoginScreen}/>
      <Tab.Screen name='Chat' component={ChatScreen}/>

    </Tab.Navigator>
  );
}



 