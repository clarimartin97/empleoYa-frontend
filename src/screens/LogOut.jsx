import React from "react-native";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { clearAll } from "../helpers/AsyncStorageHelper.js";

function LogOut(props) {
  const { navigation } = props;
  const isFocused = useIsFocused();
  const navegarALogIn = () => {
    navigation.navigate("LogIn");
  };

  useEffect(() => {
    if (isFocused)
      clearAll().then(() => {
        navegarALogIn();
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>Carganding...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default LogOut;
