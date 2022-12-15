import React from "react";
import AppBar from "./componentes/AppBar.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home.jsx";
import SignUp from "./screens/SignUp.jsx";
import LogInScreen from "./screens/LogIn.jsx";
import InfoUsuario from "./screens/Usuarios.jsx";
import SplashScreen from "./screens/SplashScreen.jsx";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MisPostulaciones from "./screens/MisPostulaciones.jsx";
import LogOut from "./screens/LogOut.jsx";

const Menu = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <AppBar />
      <Menu.Navigator initialRouteName="Splash">
        <Menu.Screen
          name="Home"
          options={{
            title: "Inicio",
          }}
          component={HomeScreen}
        />

        <Menu.Screen
          name="MisPostulaciones"
          options={{
            title: "Mis postulaciones",
          }}
          component={MisPostulaciones}
        />
        <Menu.Screen
          name="Usuario"
          options={{
            title: "Mi Usuario",
          }}
          component={InfoUsuario}
        />
        <Menu.Screen
          name="SignUp"
          options={{
            title: "Registrarme",
            /*          headerShown: false,
            drawerItemStyle: {
              display: "none",
            }, */
          }}
          component={SignUp}
        />
        <Menu.Screen
          name="LogIn"
          options={{
            title: "Iniciar Sesión",
            /*    headerShown: false,
            drawerItemStyle: {
              display: "none",
            }, */
          }}
          component={LogInScreen}
        />

        <Menu.Screen
          name="LogOut"
          options={{
            title: "Cerrar Sesión",
          }}
          component={LogOut}
        />

        <Menu.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
      </Menu.Navigator>
    </NavigationContainer>
  );
};

export default Main;
