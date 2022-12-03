import React from "react";
import { Formik, useField } from "formik";
import { StyleSheet, View } from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import StyledTextInput from "../StyledTextInput.jsx";
import StyledText from "../StyledText.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";

const initialValues = {
  mail: "",
  contrasena: "",
};

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
});

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
          <View style={styles.form}>
            <Button title="Ir al inicio" onPress={navegarAHome} />

            <FormikInputValue name="mail" placeholder="Escribir E-mail" />

            <FormikInputValue
              name="contrasena"
              placeholder="Escribir contraseña"
              secureTextEntry
            />

            <Button onPress={handleSubmit} title="Iniciar Sesión" />
          </View>
        );
      }}
    </Formik>
  );
}
