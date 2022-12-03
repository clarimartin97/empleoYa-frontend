import React from "react";
import AppBar from "./AppBar.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/Home.jsx";
import SignUp from "./Screens/SignUp.jsx";
import LogInScreen from "./Screens/LogIn.jsx";
import InfoUsuario from "./Screens/Usuarios.jsx";

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
