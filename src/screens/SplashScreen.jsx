import React from "react-native";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useEffect } from "react";
import {
  getApellido,
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
      getNombre().then((n) => {
        console.log(n);
        if (n != null) {
          getApellido().then((a) => {
            console.log(a);
            if (a != null) {
              getMail().then((m) => {
                console.log(m);
                if (m != null) navegarAHome();
                else navegarALogin();
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
      <Text>Holiii</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default SplashScreen;
