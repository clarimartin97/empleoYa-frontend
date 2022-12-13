import React from "react";
import AppBar from "./componentes/AppBar.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home.jsx";
import SignUp from "./screens/SignUp.jsx";
import LogInScreen from "./screens/LogIn.jsx";
import InfoUsuario from "./screens/Usuarios.jsx";

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <AppBar />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" title="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" title="Registrarme" component={SignUp} />
        <Stack.Screen
          name="Usuario"
          title="Mi usuario"
          component={InfoUsuario}
        />
        <Stack.Screen
          name="LogIn"
          title="Iniciar Sesion"
          component={LogInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
