import React from "react-native";
import { View, Image, StyleSheet, Text } from "react-native";

function NoHayPostulaciones() {
  return (
    <View style={styles.noPostulaciones}>
      <Image
        style={styles.image}
        source={require("../../assets/noHayPostulaciones.jpg")}
      />
      <Text style={styles.textoPostulacion}>
        ¡Parece que no tienes postulaciones!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  noPostulaciones: {
    padding: 20,
  },
  textoPostulacion: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#999",
  },
});

export default NoHayPostulaciones;
