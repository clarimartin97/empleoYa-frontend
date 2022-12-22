import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StyledText from "./StyledText.jsx";
import FooterTrabajo from "./FooterTrabajo.jsx";
import BotonPostulaciones from "./BotonPostulaciones.jsx";
import { urlBase } from "../helpers/constantes";
import { useState } from "react";
import { getId } from "../helpers/AsyncStorageHelper.js";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

function ItemTrabajo({ item, puedoPostularme, deleteItem }) {
  const [trabajo, setTrabajo] = useState({ ...item });
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) setTrabajo({ ...item });
  }, [isFocused]);

  const postData = async (idUsuario, idTrabajo) => {
    const trabajosUrl = `${urlBase}postulacion`;
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
        alert(`Te has postulado a ${trabajo.nombreDelPuesto} `);
        setTrabajo({
          ...trabajo,
          estaPostulado: datos.postulacion.trabajo == idTrabajo,
        });
      });
  };
  const deleteData = async (idPostulacion) => {
    const postulacionUrl = `${urlBase}postulacion/${idPostulacion}`;
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
        <Text style={styles.nombreDelPuesto}>
          Nombre del puesto: {trabajo.nombreDelPuesto}
        </Text>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Duracion: {trabajo.duracion}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Ubicacion: {trabajo.ubicacion}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Requisitos: {trabajo.requisitos}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Descripción del puesto: {trabajo.descripcionDelPuesto}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Modalidad: {trabajo.modalidad}
        </StyledText>
        <FooterTrabajo {...trabajo} />
        <BotonPostulaciones
          habilitado={!trabajo.estaPostulado}
          onPress={() => {
            const idTrabajo = trabajo._id;
            getId().then((idUsuario) => {
              postData(idUsuario, idTrabajo);
            });
          }}
        />
      </View>
    );
  else
    return (
      <View key={trabajo._id} style={styles.container}>
        <Text style={styles.nombreDelPuesto}>
          Nombre del puesto: {trabajo.nombreDelPuesto}
        </Text>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Duracion: {trabajo.duracion}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Ubicacion: {trabajo.ubicacion}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Requisitos: {trabajo.requisitos}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Descripción del puesto: {trabajo.descripcionDelPuesto}
        </StyledText>
        <StyledText style={styles.estiloInformacion} fontWeight="bold">
          Modalidad: {trabajo.modalidad}
        </StyledText>
        <FooterTrabajo {...trabajo} />

        <TouchableOpacity
          style={styles.botoncin}
          onPress={() => {
            const idPostulacion = trabajo.idPostulacion;
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
    backgroundColor: "#E3E6E4",
    borderRadius: 8,
    padding: 20,
    margin: 20,
    justifyContent: "center",
  },
  estiloInformacion: {
    padding: 2,
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
  nombreDelPuesto: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "bold",
  },
});
export default ItemTrabajo;
