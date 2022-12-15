import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import StyledTextInput from "../componentes/StyledTextInput.jsx";
import StyledText from "../componentes/StyledText.jsx";
import { Formik, useField } from "formik";

const initialValues = {
  ubicacion: "",
  nombreDelPuesto: "",
};
const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

export default function Busqueda({ onSearchPress }) {
  return (
    <Formik
      validator={() => {}}
      initialValues={initialValues}
      onSubmit={({ ubicacion, nombreDelPuesto }) => {
        onSearchPress(ubicacion, nombreDelPuesto);

        /*   postData(values.mail, values.contrasena); */
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <View style={styles.form}>
              <FormikInputValue
                name="ubicacion"
                placeholder="Escribir ubicación"
              />

              <FormikInputValue
                name="nombreDelPuesto"
                placeholder="Escribir puesto"
              />
              <TouchableOpacity
                style={styles.botoncin}
                title="Buscae"
                onPress={handleSubmit}
              >
                <Text style={styles.textoBotoncin}> Buscar</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  /*   error: {
    color: "red",
    fontSize: 13,
    marginBottom: 20,
    marginTop: -5,
  }, */
  form: {
    padding: 20,
    paddingVertical: 40,
  },
  container: {
    alignContent: "center",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignContent: "center",
    alignSelf: "center",
  },
  botoncin: {
    width: 180,
    height: 50,
    backgroundColor: "#183d8a",
    borderRadius: 8,
    alignSelf: "center",
    padding: 5,
    justifyContent: "center",
  },
  textoBotoncin: {
    color: "white",
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
