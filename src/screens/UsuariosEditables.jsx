import React from "react-native";
import { urlBase } from "../helpers/constantes";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import theme from "../theme.js";
import StyledText from "../componentes/StyledText.jsx";
import { useEffect, useState } from "react";
import Footer from "../componentes/Footer";
import { getNombre, getApellido, getId } from "../helpers/AsyncStorageHelper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const formacionesInitialValues = {
  fechaInicio: "",
  fechaFin: "",
  institucion: "",
};

function UsuariosEditables(props) {
  const { navigation } = props;
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [habilidadesText, setHabilidadesText] = useState("");
  const [formacionesText, setFormacionesText] = useState(
    formacionesInitialValues
  );

  const actualizarHabilidades = async (nuevasHabilidades) => {
    getId().then(async (id) => {
      const usuarioUrl = `${urlBase}habilidades/${id}`;
      const response = await fetch(usuarioUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          habilidades: nuevasHabilidades,
        }),
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setHabilidadesText("");
          console.log(datos);
          if (datos.err) {
            alert("Hubo un error");
          } else {
            setUsuario(datos.usuario);
          }
        });
    });
  };
  const agregarFormacion = async (formacion) => {
    getId().then(async (id) => {
      const usuarioUrl = `${urlBase}formaciones/${id}`;
      const response = await fetch(usuarioUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formacion: formacion,
        }),
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setFormacionesText(formacionesInitialValues);
          console.log(datos);
          if (datos.err) {
            alert("Hubo un error");
          } else {
            setUsuario(datos.usuario);
          }
        });
    });
  };
  const borrarFormaciones = async (idFormacion) => {
    getId().then(async (idUsuario) => {
      const usuarioUrl = `${urlBase}formaciones/${idFormacion}/${idUsuario}`;
      const response = await fetch(usuarioUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          console.log(datos);
          if (datos.err) {
            alert("Hubo un error");
          } else {
            setUsuario(datos.usuario);
          }
        });
    });
  };

  useEffect(() => {
    getNombre().then((n) => {
      getApellido().then((a) => {
        setNombreCompleto(`${n} ${a}`);
      });
    });
    getData();
  }, []);

  const getData = async () => {
    getId().then(async (id) => {
      const usersUrl = `${urlBase}usuarios/${id}`;
      const response = await fetch(usersUrl);
      const data = await response.json();
      setUsuario(data);
    });
  };

  function renderListaHabilidades() {
    if (usuario) {
      console.log(usuario.habilidades);
      return usuario.habilidades.map((habilidad) => {
        return (
          <View key={habilidad} /* style={{ flexDirection: "row" } }*/>
            <Text>{habilidad}</Text>

            <MaterialCommunityIcons
              name="delete-outline"
              size={28}
              color="#FF0000"
              onPress={() => {
                const nuevaLista = usuario.habilidades.filter(
                  (x) => x != habilidad
                );
                console.log(nuevaLista);
                actualizarHabilidades(nuevaLista);
              }}
            />
          </View>
        );
      });
    }
  }
  function renderListaFormaciones() {
    if (usuario) {
      console.log(usuario);
      return usuario.formaciones.map((formacion) => {
        return (
          <View key={formacion._id} /* style={{ flexDirection: "row" } }*/>
            <Text>{formacion.fechaInicio}</Text>
            <Text>{formacion.fechaFin}</Text>
            <Text>{formacion.institucion}</Text>

            <MaterialCommunityIcons
              name="delete-outline"
              size={28}
              color="#FF0000"
              onPress={() => {
                const idFormacion = formacion._id;
                borrarFormaciones(idFormacion);
              }}
            />
          </View>
        );
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "data:image/png;base64,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",
            }}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <StyledText align="center" fontWeight="bold">
            {nombreCompleto}
          </StyledText>
          <StyledText style={styles.modalidad}>Diseñadora Digital</StyledText>
        </View>
        <View>
          <StyledText style={styles.title} fontWeight="bold">
            Formacion:
          </StyledText>
          {renderListaFormaciones()}

          <TextInput
            style={styles.textInputDate}
            onChangeText={(newText) =>
              setFormacionesText({ ...formacionesText, fechaInicio: newText })
            }
            defaultValue={formacionesText.fechaInicio}
          />
          <TextInput
            style={styles.textInputDate}
            onChangeText={(newText) =>
              setFormacionesText({ ...formacionesText, fechaFin: newText })
            }
            defaultValue={formacionesText.fechaFin}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(newText) =>
              setFormacionesText({ ...formacionesText, institucion: newText })
            }
            defaultValue={formacionesText.institucion}
          />
        </View>

        <View>
          <StyledText style={styles.title} fontWeight="bold">
            Habilidades:
          </StyledText>
          {renderListaHabilidades()}
          <TextInput
            style={styles.textInput}
            onChangeText={(newText) => setHabilidadesText(newText)}
            defaultValue={habilidadesText}
          />
        </View>

        <TouchableOpacity
          style={styles.botoncin}
          onPress={() => {
            if (
              formacionesText.fechaInicio !== "" &&
              formacionesText.fechaFin !== "" &&
              formacionesText.institucion !== ""
            )
              agregarFormacion(formacionesText);
            if (habilidadesText !== "")
              actualizarHabilidades([...usuario.habilidades, habilidadesText]);
          }}
        >
          <Text style={styles.textoBotoncin}>Guardar</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  contentContainer: {
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    alignSelf: "center",
    margin: 10,
  },
  botoncin: {
    width: 180,
    height: 50,
    backgroundColor: "#183d8a",
    borderRadius: 8,
    alignSelf: "center",
    padding: 5,
    justifyContent: "center",
    margin: 30,
  },
  textoBotoncin: {
    color: "white",
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold",
  },
  title: {
    padding: 10,
    marginLeft: 5,
  },
  textInput: {
    width: "50%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    margin: 5,
  },
  textInputDate: {
    width: "20%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    margin: 5,
  },
  iconoLapiz: {
    alignSelf: "flex-end",
    padding: 5,
  },
});

export default UsuariosEditables;
