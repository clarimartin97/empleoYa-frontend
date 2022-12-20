import React from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import ListaTrabajos from "../componentes/ListaDeTrabajos.jsx";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";
import { getId, getNombre } from "../helpers/AsyncStorageHelper.js";
import Busqueda from "../componentes/Busqueda.jsx";
import { useState, useEffect } from "react";
import { urlBase } from "../helpers/constantes";

function HomeScreen(props) {
  const { navigation } = props;
  const isFocused = useIsFocused();
  const [trabajos, setTrabajos] = useState([]);

  getNombre().then((a) => console.log(a));
  useEffect(() => {
    if (isFocused) getData();
  }, [isFocused]);

  const onSearchPress = async (ubicacion, nombreDelPuesto) => {
    if (ubicacion === "") ubicacion = ".*";
    if (nombreDelPuesto === "") nombreDelPuesto = ".*";
    console.log(ubicacion);
    console.log(nombreDelPuesto);
    getId().then(async (idUsuario) => {
      const trabajosUrl = `${urlBase}trabajos/${idUsuario}/${ubicacion}/${nombreDelPuesto}`;

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
      <ListaTrabajos trabajos={trabajos} puedoPostularme={true} />
    </View>
  );
}

export default HomeScreen;
