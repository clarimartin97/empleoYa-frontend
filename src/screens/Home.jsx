export const urlBase = "http://192.168.0.171:8000/";
import React from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import ListaTrabajos from "../componentes/ListaDeTrabajos.jsx";
import { View } from "react-native";
import { getId, getNombre } from "../helpers/AsyncStorageHelper.js";
import Busqueda from "../componentes/Busqueda.jsx";
import { useState, useEffect } from "react";

function HomeScreen(props) {
  const { navigation } = props;
  const [trabajos, setTrabajos] = useState([]);

  getNombre().then((a) => console.log(a));
  useEffect(() => {
    getData();
  }, []);

  const onSearchPress = async (ubicacion, nombreDelPuesto) => {
    if (ubicacion === "") ubicacion = ".*";
    if (nombreDelPuesto === "") nombreDelPuesto = ".*";
    console.log(ubicacion);
    console.log(nombreDelPuesto);
    getId().then(async (idUsuario) => {
      const trabajosUrl = `${urlBase}trabajos/${idUsuario}/${ubicacion}/${nombreDelPuesto}`;
      console.log(trabajosUrl);
      const response = await fetch(trabajosUrl);
      const data = await response.json();
      setTrabajos(data);
    });
  };

  const getData = async () => {
    getId().then(async (idUsuario) => {
      const trabajosUrl = `${urlBase}trabajos/${idUsuario}`;
      const response = await fetch(trabajosUrl);
      const data = await response.json();
      setTrabajos(data);
    });
  };
  return (
    <View>
      <Busqueda onSearchPress={onSearchPress} />
      <ListaTrabajos trabajos={trabajos} />
    </View>
  );
}

export default HomeScreen;
