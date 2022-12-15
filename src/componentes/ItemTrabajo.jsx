import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StyledText from "./StyledText.jsx";
import HeaderTrabajo from "./HeaderTrabajo.jsx";
import BotonPostulaciones from "./BotonPostulaciones.jsx";
import { urlBase } from "../screens/Home.jsx";
import { useState } from "react";
import { getId } from "../helpers/AsyncStorageHelper.js";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

function ItemTrabajo(props) {
  const [trabajo, setTrabajo] = useState({ ...props });

  const postData = async (idUsuario, idTrabajo) => {
    console.log(idUsuario);
    const trabajosUrl = `${urlBase}postulacion`;
    console.log(trabajosUrl);
    const response = await fetch(trabajosUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuario: idUsuario,
        idTrabajo: idTrabajo,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTrabajo({
          ...trabajo,
          estaPostulado: datos.postulacion.idTrabajo == idTrabajo,
        });
      });
  };

  return (
    <View key={trabajo._id} style={styles.container}>
      <HeaderTrabajo {...trabajo} />
      <StyledText fontSize="subheading" fontWeight="bold">
        Nombre del puesto: {trabajo.nombreDelPuesto}
      </StyledText>
      <StyledText>Duracion: {trabajo.duracion}</StyledText>
      <StyledText>Ubicacion: {trabajo.ubicacion}</StyledText>
      <StyledText>Categoría: {trabajo.categoria}</StyledText>
      <StyledText>Requisitos: {trabajo.requisitos}</StyledText>
      <StyledText>
        Descripción del puesto: {trabajo.descripcionDelPuesto}
      </StyledText>
      <StyledText>Modalidad: {trabajo.modalidad}</StyledText>
      <BotonPostulaciones
        habilitado={!trabajo.estaPostulado}
        onPress={() => {
          const idTrabajo = trabajo._id;
          getId().then((idUsuario) => {
            console.log(idUsuario);
            postData(idUsuario, idTrabajo);
          });
        }}
      />
    </View>
  );
}

export default ItemTrabajo;
