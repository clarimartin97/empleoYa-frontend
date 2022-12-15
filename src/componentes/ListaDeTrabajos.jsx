import React from "react";
import { Text, FlatList } from "react-native";
import { urlBase } from "../screens/Home.jsx";
import ItemTrabajo from "./ItemTrabajo.jsx";
import { useEffect, useState } from "react";

function ListaTrabajos() {
  const [trabajos, setTrabajos] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const idUsuario = "639a65c7754feb9679a7000d";
    const trabajosUrl = `${urlBase}trabajos/${idUsuario}`;
    const response = await fetch(trabajosUrl);
    const data = await response.json();
    setTrabajos(data);
  };

  return (
    <FlatList
      data={trabajos}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: info }) => {
        return <ItemTrabajo {...info} />;
      }}
    ></FlatList>
  );
}

export default ListaTrabajos;
