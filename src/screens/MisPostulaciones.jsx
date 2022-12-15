import React from "react-native";
import { urlBase } from "./Home.jsx";
import { View, Image, StyleSheet, Text, TextInput } from "react-native";
import theme from "../theme.js";
import StyledText from "../componentes/StyledText.jsx";
import { useEffect, useState } from "react";

function MisPostulaciones(props) {
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
    // const usersUrl = `${urlBase}usuarios`;
    // console.log(usersUrl);
    // const response = await fetch(usersUrl);
    // const data = await response.json();
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <StyledText align="center" fontWeight="bold">
          Mis Postulaciones
        </StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  modalidad: {
    padding: 3,
    color: theme.colors.primary,
    alignSelf: "center",
    borderRadius: 4,
    overflow: "hidden",
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    alignSelf: "center",
    margin: 20,
  },
  title: {
    padding: 10,
    marginLeft: 5,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    margin: 5,
  },
});

export default MisPostulaciones;
