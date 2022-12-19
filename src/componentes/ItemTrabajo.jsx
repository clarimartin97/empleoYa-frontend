import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StyledText from "./StyledText.jsx";
import HeaderTrabajo from "./HeaderTrabajo.jsx";
import BotonPostulaciones from "./BotonPostulaciones.jsx";
import { urlBase } from "../helpers/constantes";
import { useState } from "react";
import { getId } from "../helpers/AsyncStorageHelper.js";

function ItemTrabajo({ item, puedoPostularme, deleteItem }) {
  const [trabajo, setTrabajo] = useState({ ...item });

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
          estaPostulado: datos.postulacion.trabajo == idTrabajo,
        });
      });
  };
  const deleteData = async (idPostulacion) => {
    const postulacionUrl = `${urlBase}postulacion/${idPostulacion}`;
    console.log(postulacionUrl);
    fetch(postulacionUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then(() => {
        deleteItem();
      });
  };
  if (puedoPostularme)
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
  else
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
        <TouchableOpacity
          style={styles.botoncin}
          onPress={() => {
            const idPostulacion = trabajo.idPostulacion;
            console.log(idPostulacion);
            deleteData(idPostulacion);
          }}
        >
          <Text style={styles.textoBotoncin}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    );
}

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
  botoncin: {
    width: 180,
    height: 50,
    backgroundColor: "red",
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
export default ItemTrabajo;
