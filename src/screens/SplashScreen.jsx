import React from "react-native";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import {
  getApellido,
  getId,
  getMail,
  getNombre,
} from "../helpers/AsyncStorageHelper.js";

function SplashScreen(props) {
  const { navigation } = props;

  const navegarALogin = () => {
    navigation.navigate("LogIn");
  };
  const navegarAHome = () => {
    navigation.navigate("Home");
  };

  const timerFunction = () => {
    setTimeout(() => {
      getId().then((id) => {
        if (id != null) {
          getNombre().then((n) => {
            if (n != null) {
              getApellido().then((a) => {
                if (a != null) {
                  getMail().then((m) => {
                    if (m != null) navegarAHome();
                    else navegarALogin();
                  });
                } else navegarALogin();
              });
            } else navegarALogin();
          });
        } else navegarALogin();
      });
    }, 2000);
  };

  useEffect(() => {
    timerFunction();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/logo.png")} />

      <View>
        <ActivityIndicator size={30} color="#183d8a" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
});

export default SplashScreen;
