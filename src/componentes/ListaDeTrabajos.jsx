import React from "react";
import { Text, FlatList } from "react-native";
import { urlBase } from "./Screens/Home";
import ItemTrabajo from "./ItemTrabajo.jsx";
import { useEffect, useState } from "react";

function ListaTrabajos() {
  const [trabajos, setTrabajos] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const trabajosUrl = `${urlBase}trabajos/6377de44f8af6fd15438d0c4`;
    console.log(trabajosUrl);
    const response = await fetch(trabajosUrl);
    console.log("response: " + response);
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
