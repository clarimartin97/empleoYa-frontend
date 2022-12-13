import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme.js";

const HeaderEmpresa = ({
  logo,
  nombreDeLaEmpresa,
  modalidad,
  fechaDePublicacion,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 2,
      }}
    >
      <View>
        <Image style={styles.image} source={{ uri: logo }} />
      </View>
      <View style={{ justifyContent: "center" }}>
        <StyledText align="center" fontWeight="bold">
          {nombreDeLaEmpresa}
        </StyledText>
        <StyledText align="center" style={styles.modalidad}>
          {modalidad}
        </StyledText>
      </View>
      <View>
        <StyledText color="secondary" align="center">
          Fecha de publicación:{" "}
        </StyledText>
        <StyledText color="secondary" align="center">
          {fechaDePublicacion}
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

export default HeaderEmpresa;
