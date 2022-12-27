import React from "react";
import { Formik, useField } from "formik";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import StyledTextInput from "../componentes/StyledTextInput.jsx";
import StyledText from "../componentes/StyledText.jsx";
import { urlBase } from "../helpers/constantes";
import { agregarTrabajoValidationSchema } from "../validationSchemas/validacion.js";

const initialValues = {
  nombreDelPuesto: "",
  duracion: "",
  ubicacion: "",
  requisitos: "",
  descripcionDelPuesto: "",
  modalidad: "",
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

export default function AgregarTrabajos(props) {
  const { navigation } = props;

  const postData = async (
    nombreDelPuesto,
    duracion,
    ubicacion,
    requisitos,
    descripcionDelPuesto,
    modalidad
  ) => {
    const trabajosUrl = `${urlBase}trabajo`;
    const response = await fetch(trabajosUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreDelPuesto: nombreDelPuesto,
        duracion: duracion,
        ubicacion: ubicacion,
        requisitos: requisitos,
        descripcionDelPuesto: descripcionDelPuesto,
        modalidad: modalidad,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (!datos.error) {
          //limpiar campos
          alert("Se ha añadido el trabajo correctamente");
        } else {
          alert("Hubo un error");
        }
      });
  };

  return (
    <Formik
      validationSchema={agregarTrabajoValidationSchema}
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        postData(
          values.nombreDelPuesto,
          values.duracion,
          values.ubicacion,
          values.requisitos,
          values.descripcionDelPuesto,
          values.modalidad
        );
        resetForm();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <ScrollView style={styles.container}>
            <View style={styles.form}>
              <Image
                style={styles.image}
                source={require("../../assets/logo.png")}
              />

              <FormikInputValue
                name="nombreDelPuesto"
                placeholder="Escribir nombre del puesto"
              />
              <FormikInputValue name="duracion" placeholder="Duracion" />
              <FormikInputValue name="ubicacion" placeholder="Ubicacion" />

              <FormikInputValue name="requisitos" placeholder="Requisitos" />
              <FormikInputValue
                name="descripcionDelPuesto"
                placeholder="Descripcion del puesto"
              />
              <FormikInputValue name="modalidad" placeholder="Modalidad" />

              <TouchableOpacity style={styles.botoncin} onPress={handleSubmit}>
                <Text style={styles.textoBotoncin}>Añadir</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 13,
    marginBottom: 20,
    marginTop: -5,
  },
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
  link: {
    width: 180,
    height: 50,
    alignSelf: "center",
    padding: 5,
  },
  linkTexto: {
    color: "#183d8a",
    textAlign: "center",
  },
});
