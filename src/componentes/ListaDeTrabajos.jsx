import React from "react";
import { Text, FlatList } from "react-native";
import appInfo from "./data/appInfo.js";
import ItemTrabajo from "./ItemTrabajo.jsx";

function ListaTrabajos() {
  return (
    <FlatList
      data={appInfo}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: info }) => <ItemTrabajo {...info} />}
    ></FlatList>
  );
}

export default ListaTrabajos;
