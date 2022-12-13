import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const BotonPostulaciones = ({ habilitado, onPress }) => {
  if (habilitado)
    return (
      <TouchableOpacity style={styles.habilitado} onPress={() => onPress()}>
        <Text>Postularme</Text>
      </TouchableOpacity>
    );
  else
    return (
      <TouchableOpacity style={styles.deshabilitado}>
        <Text>Postularme</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  habilitado: {
    height: 40,
    flex: 1,
    width: 60,
    backgroundColor: "blue",
  },

  deshabilitado: {
    flex: 1,
    width: 60,
    backgroundColor: "gray",
  },
});

export default BotonPostulaciones;
