import React from "react-native";
import { urlBase } from "./Home.jsx";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { View, Image, StyleSheet } from "react-native";
import theme from "../theme.js";
import appInfo from "../data/appInfo.js";
import StyledText from "../StyledText.jsx";
import { useEffect, useState } from "react";

function InfoUsuario(props) {
  const { navigation } = props;

  const navegarASignUp = () => {
    navigation.navigate("SignIn");
  };
  const navegarALogIn = () => {
    navigation.navigate("LogIn");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const usersUrl = `${urlBase}usuarios`;
    console.log(usersUrl);
    const response = await fetch(usersUrl);
    console.log("response: " + response);
    const data = await response.json();
    console.log("data: " + data);
  };

  return (
    <View>
      <Button title="Registrarme" onPress={navegarASignUp} />
      <Button title="Iniciar sesion" onPress={navegarALogIn} />
      {/*       <View>
        <Image style={styles.image} source={{ uri: logo }} />
      </View> */}
      <View style={{ justifyContent: "center" }}>
        <StyledText align="center" fontWeight="bold">
          Clara Martin
        </StyledText>
        <StyledText align="center" style={styles.modalidad}>
          Diseñadora Digital
        </StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalidad: {
    padding: 3,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default InfoUsuario;
