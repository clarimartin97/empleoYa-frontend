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
        <Menu.Screen name="Home" title="Inicio" component={HomeScreen} />
        <Menu.Screen name="SignUp" title="Registrarme" component={SignUp} />
        <Menu.Screen
          name="MisPostulaciones"
          title="Mis Postulaciones"
          component={MisPostulaciones}
        />
        <Menu.Screen
          name="Usuario"
          title="Mi usuario"
          component={InfoUsuario}
        />
        <Menu.Screen
          name="LogIn"
          title="Iniciar Sesion"
          component={LogInScreen}
        />
        <Menu.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />

        <Menu.Screen name="LogOut" component={LogOut} />
      </Menu.Navigator>
    </NavigationContainer>
  );
};

export default Main;
