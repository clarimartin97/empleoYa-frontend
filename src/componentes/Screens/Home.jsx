export const urlBase = "http://192.168.1.6:8000/";
import React from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import ListaTrabajos from "../ListaDeTrabajos.jsx";
import { View } from "react-native";

function HomeScreen(props) {
  const { navigation } = props;

  const navegarASignUp = () => {
    navigation.navigate("SignIn");
  };
  const navegarALogIn = () => {
    navigation.navigate("LogIn");
  };
  const navegarAUsuario = () => {
    navigation.navigate("Usuario");
  };
  return (
    <View>
      <Button title="Registrarme" onPress={navegarASignUp} />
      <Button title="Iniciar sesion" onPress={navegarALogIn} />
      <Button title="Mi Usuario" onPress={navegarAUsuario} />
      <ListaTrabajos />
    </View>
  );
}

export default HomeScreen;
