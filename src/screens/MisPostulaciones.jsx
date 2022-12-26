import React from "react-native";
import { urlBase } from "../helpers/constantes";
import { View, StyleSheet, Text, TextInput } from "react-native";
import theme from "../theme.js";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getId } from "../helpers/AsyncStorageHelper.js";
import ListaTrabajos from "../componentes/ListaDeTrabajos.jsx";
import Footer from "../componentes/Footer";
function MisPostulaciones(props) {
  const { navigation } = props;
  const isFocused = useIsFocused();
  const [postulaciones, setPostulaciones] = useState([]);
  useEffect(() => {
    if (isFocused) getData();
  }, [isFocused]);

  const getData = async () => {
    getId().then(async (idUsuario) => {
      const postulacionesUrl = `${urlBase}postulaciones/${idUsuario}`;
      console.log(postulacionesUrl);
      const response = await fetch(postulacionesUrl);
      const data = await response.json();
      setPostulaciones(data);
    });
  };
  console.log(postulaciones);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titulo}>Lista de postulaciones</Text>
      <View style={styles.container}>
        <ListaTrabajos
          trabajos={postulaciones.map((e) => {
            return { ...e.trabajo, idPostulacion: e._id };
          })}
          puedoPostularme={false}
          deleteItem={() => {
            getData();
          }}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    padding: 10,
    marginLeft: 5,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    margin: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
    padding: 15,
  },
});

export default MisPostulaciones;
