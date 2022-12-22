import React from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemTrabajo from "./ItemTrabajo.jsx";
import { useState } from "react";

function ListaTrabajos({ trabajos, puedoPostularme, deleteItem }) {
  const keyExtractor = (item) => {
    return item._id;
  };
  return (
    <View style={styles.container}>
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
const styles = StyleSheet.create({
  container: { height: "100%" },
});

export default ListaTrabajos;
