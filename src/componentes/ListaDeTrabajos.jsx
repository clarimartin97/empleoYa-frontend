import React from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemTrabajo from "./ItemTrabajo.jsx";

function ListaTrabajos({
  trabajos,
  puedoPostularme,
  deleteItem,
  containerStyle,
}) {
  const keyExtractor = (item) => {
    return item._id;
  };
  return (
    <View style={containerStyle}>
      <FlatList
        data={trabajos}
        ItemSeparatorComponent={() => <Text></Text>}
        keyExtractor={keyExtractor}
        renderItem={({ item: info }) => {
          return (
            <ItemTrabajo
              item={info}
              puedoPostularme={puedoPostularme}
              deleteItem={deleteItem}
            />
          );
        }}
      ></FlatList>
    </View>
  );
}

export default ListaTrabajos;
