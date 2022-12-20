import React from "react-native";
import { urlBase } from "../helpers/constantes";
import { View, Image, StyleSheet, Text, TextInput } from "react-native";
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
    console.log("aloha");
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
  console.log("---");
  console.log(postulaciones);

  return (
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
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  modalidad: {
    padding: 3,
    color: theme.colors.primary,
    alignSelf: "center",
    borderRadius: 4,
    overflow: "hidden",
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    alignSelf: "center",
    margin: 20,
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
});

export default MisPostulaciones;
