import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#183d8a",
    flex: 1,
    justifyContent: "space-between",
  },
  contentContainer: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#183d8a",
  },
  footerText: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Footer;
