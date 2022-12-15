import React from "react";
import { Formik, useField } from "formik";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import StyledTextInput from "../componentes/StyledTextInput.jsx";
import StyledText from "../componentes/StyledText.jsx";
import {
  logInValidationSchema,
  validationSchema,
} from "../validationSchemas/validacion.js";
import { urlBase } from "./Home.jsx";
import { storeData } from "../helpers/AsyncStorageHelper.js";

const initialValues = {
  mail: "",
  contrasena: "",
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

export default function LogInScreen(props) {
  const { navigation } = props;
  const navegarAHome = () => {
    navigation.navigate("Home");
  };

  const postData = async (mail, contrasena) => {
    const loginUrl = `${urlBase}login`;
    console.log(loginUrl);
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail: mail,
        contrasena: contrasena,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (!datos.error) {
          //loguear
          console.log(datos);
          storeData(datos._id, datos.nombre, datos.apellido, datos.mail);
          navegarAHome();
        } else {
          //error
          alert("E-mail o contraseña incorrecto");
        }
      });
  };

  return (
    <Formik
      validationSchema={logInValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log("hola!!");
        postData(values.mail, values.contrasena);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <View style={styles.form}>
              <Image
                style={styles.image}
                source={require("../../assets/logo.png")}
              />

              <FormikInputValue name="mail" placeholder="Escribir E-mail" />

              <FormikInputValue
                name="contrasena"
                placeholder="Escribir contraseña"
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.botoncin}
                title="Iniciar Sesión"
                onPress={handleSubmit}
              >
                <Text style={styles.textoBotoncin}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
          </View>
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
});
