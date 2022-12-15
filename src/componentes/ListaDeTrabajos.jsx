import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemTrabajo from "./ItemTrabajo.jsx";

function ListaTrabajos({ trabajos }) {
  const keyExtractor = (item) => {
    return item._id;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={trabajos}
        // ItemSeparatorComponent={() => <Text></Text>}
        keyExtractor={keyExtractor}
        renderItem={({ item: info }) => {
          return <ItemTrabajo {...info} />;
        }}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { height: "60%" },
});

export default ListaTrabajos;
