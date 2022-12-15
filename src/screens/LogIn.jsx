import React from "react";
import { Formik, useField } from "formik";
import { StyleSheet, View, Image } from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import StyledTextInput from "../componentes/StyledTextInput.jsx";
import StyledText from "../componentes/StyledText.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";

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

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
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

              <FormikInputValue name="mail" placeholder="Escribir E-mail" />

              <FormikInputValue
                name="contrasena"
                placeholder="Escribir contraseña"
                secureTextEntry
              />

              <Button
                onPress={handleSubmit}
                title="Iniciar Sesión"
                style={styles.button}
              />
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
  button: {
    width: 140,
    height: 140,
    alignItems: "center",
    alignSelf: "center",
  },
});
