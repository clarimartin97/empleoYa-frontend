import React from "react";
import { View, ViewPropTypes, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme.js";

function AppBar() {
  return <View horizontal style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
  },

  text: {
    color: theme.appBar.textPrimary,
  },
});
export default AppBar;
