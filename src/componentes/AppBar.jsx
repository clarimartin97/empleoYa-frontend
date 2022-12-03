import React from "react";
import { View, ViewPropTypes, StyleSheet, Text } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import theme from "./theme.js";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
  },

  text: {
    color: theme.appBar.textPrimary,
  },
});

function AppBar() {
  return <View horizontal style={styles.container}></View>;
}

export default AppBar;
