import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme.js";

const HeaderTrabajo = ({ fechaPublicacion }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 12,
      }}
    >
      <View>
        <StyledText color="secondary" align="center">
          Fecha de publicación:
        </StyledText>
        <StyledText color="secondary" align="center">
          {fechaPublicacion}
        </StyledText>
      </View>
    </View>
  );
};

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

export default HeaderTrabajo;
