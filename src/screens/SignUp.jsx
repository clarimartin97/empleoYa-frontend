import React from "react";
import { Formik, useField } from "formik";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { Button } from "@rneui/themed";
import StyledTextInput from "../componentes/StyledTextInput.jsx";
import StyledText from "../componentes/StyledText.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";
import { urlBase } from "./Home.jsx";
import { storeData } from "../helpers/AsyncStorageHelper.js";

const initialValues = {
  nombre: "",
  apellido: "",
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

export default function SignUp(props) {
  const { navigation } = props;
  const navegarAHome = () => {
    navigation.navigate("Home");
  };

  const postData = async (nombre, apellido, mail, contrasena) => {
    const usuariosUrl = `${urlBase}usuarios`;
    console.log(usuariosUrl);
    const response = await fetch(usuariosUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        contraseña: contrasena,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (!datos.error) {
          //loguear
          storeData(nombre, apellido, mail);
          navegarAHome();
        } else {
          //error
          alert("errorcin jaja");
        }
      });
  };

  return (
    <Formik
      validator={() => {}}
      initialValues={initialValues}
      onSubmit={(values) => {
        postData(
          values.nombre,
          values.apellido,
          values.mail,
          values.contrasena
        );
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <View style={styles.form}>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/new-balance-png-logo/red-new-icon-png-logo-33.png",
                }}
              />

              <FormikInputValue name="nombre" placeholder="Escribir nombre" />
              <FormikInputValue
                name="apellido"
                placeholder="Escribir apellido"
              />
              <FormikInputValue name="mail" placeholder="Escribir E-mail" />

              <FormikInputValue
                name="contrasena"
                placeholder="Escribir contraseña"
                secureTextEntry
              />

              <TouchableOpacity style={styles.botoncin} onPress={handleSubmit}>
                <Text style={styles.textoBotoncin}> Crear cuenta</Text>
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
    margin: 12,
  },
  container: {
    alignContent: "center",
    textAlign: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignContent: "center",
    alignSelf: "center",
    margin: 20,
  },
  botoncin: {
    width: 100,
    height: 46,
    backgroundColor: "#0080FF",
    borderRadius: 8,
    alignSelf: "center",
    padding: 5,
  },
  textoBotoncin: {
    color: "white",
  },
});
