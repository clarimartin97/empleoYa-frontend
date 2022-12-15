import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const BotonPostulaciones = ({ habilitado, onPress }) => {
  if (habilitado)
    return (
      <TouchableOpacity style={styles.habilitado} onPress={() => onPress()}>
        <Text style={styles.textoBotoncin}>Postularme</Text>
      </TouchableOpacity>
    );
  else
    return (
      <TouchableOpacity style={styles.deshabilitado}>
        <Text style={styles.textoBotoncin}>Postularme</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  habilitado: {
    width: 120,
    height: 40,
    backgroundColor: "#183d8a",
    borderRadius: 8,
    alignSelf: "center",
    padding: 5,
    justifyContent: "center",
  },

  deshabilitado: {
    width: 120,
    height: 40,
    backgroundColor: "#9B9999",
    borderRadius: 8,
    alignSelf: "center",
    padding: 5,
    justifyContent: "center",
  },
  textoBotoncin: {
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default BotonPostulaciones;
