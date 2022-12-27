import React from "react-native";
import ListaTrabajos from "../componentes/ListaDeTrabajos.jsx";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";
import { getId } from "../helpers/AsyncStorageHelper.js";
import Busqueda from "../componentes/Busqueda.jsx";
import { useState, useEffect } from "react";
import { urlBase } from "../helpers/constantes";
import Footer from "../componentes/Footer.jsx";

function HomeScreen(props) {
  const { navigation } = props;
  const isFocused = useIsFocused();
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    if (isFocused) getData();
  }, [isFocused]);

  const onSearchPress = async (ubicacion, nombreDelPuesto) => {
    if (ubicacion === "") ubicacion = ".*";
    if (nombreDelPuesto === "") nombreDelPuesto = ".*";
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
    <View style={{ flex: 1 }}>
      <Busqueda onSearchPress={onSearchPress} />
      <ListaTrabajos
        trabajos={trabajos}
        puedoPostularme={true}
        containerStyle={{ height: "55%" }}
      />
      <Footer />
    </View>
  );
}

export default HomeScreen;
