import AsyncStorage from "@react-native-async-storage/async-storage";
const NOMBRE_USUARIO_KEY = "nombre_usuario";
const APELLIDO_USUARIO_KEY = "apellido_usuario";
const MAIL_USUARIO_KEY = "mail_usuario";
const ID_USUARIO_KEY = "id_usuario";

export const storeData = async (id, nombre, apellido, mail) => {
    console.log(id)
    try {
        await AsyncStorage.setItem(ID_USUARIO_KEY, id);
        await AsyncStorage.setItem(NOMBRE_USUARIO_KEY, nombre);
        await AsyncStorage.setItem(APELLIDO_USUARIO_KEY, apellido);
        await AsyncStorage.setItem(MAIL_USUARIO_KEY, mail);
    }
    catch (e) {
        console.log("error storeData: " + e);
    }
}

export const getId = async () => {
    try {
        return await AsyncStorage.getItem(ID_USUARIO_KEY);
    }
    catch (e) {
        console.log("error getId: " + e);
    }
}
export const getNombre = async () => {
    try {
        return await AsyncStorage.getItem(NOMBRE_USUARIO_KEY);
    }
    catch (e) {
        console.log("error getNombre: " + e);
    }
}

export const getApellido = async () => {
    try {
        return await AsyncStorage.getItem(APELLIDO_USUARIO_KEY);
    }
    catch (e) {
        console.log("error getApellido: " + e);
    }
}


export const getMail = async () => {
    try {
        return await AsyncStorage.getItem(MAIL_USUARIO_KEY);
    }
    catch (e) {
        console.log("error getMail: " + e);
    }
}
export const clearAll = async () => {
    try {
        console.log("cccclari")
        await AsyncStorage.clear()
        console.log("chau")
    }
    catch (e) {
        console.log("error clear: " + e);
    }
}