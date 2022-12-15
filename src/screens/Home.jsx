export const urlBase = "http://192.168.0.171:8000/";
import React from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import ListaTrabajos from "../componentes/ListaDeTrabajos.jsx";
import { View } from "react-native";
import { getNombre } from "../helpers/AsyncStorageHelper.js";

function HomeScreen(props) {
  const { navigation } = props;

  getNombre().then((a) => console.log(a));

  /*   const navegarASignUp = () => {
    navigation.navigate("SignIn");
  };
  const navegarALogIn = () => {
    navigation.navigate("LogIn");
  };
  const navegarAUsuario = () => {
    navigation.navigate("Usuario");
  }; */
  return (
    <View>
      <ListaTrabajos />
    </View>
  );
}

export default HomeScreen;
