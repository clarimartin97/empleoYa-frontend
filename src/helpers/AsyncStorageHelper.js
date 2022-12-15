import AsyncStorage from "@react-native-async-storage/async-storage";
const NOMBRE_USUARIO_KEY = "nombre_usuario";
const APELLIDO_USUARIO_KEY = "apellido_usuario";
const MAIL_USUARIO_KEY = "mail_usuario";

export const storeData = async (nombre, apellido, mail) => {
    try {
        await AsyncStorage.setItem(NOMBRE_USUARIO_KEY, nombre);
        await AsyncStorage.setItem(APELLIDO_USUARIO_KEY, apellido);
        await AsyncStorage.setItem(MAIL_USUARIO_KEY, mail);
    }
    catch (e) {
        console.log("error storeData: " + e);
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
        await AsyncStorage.clear()
    }
    catch (e) {
        console.log("error clear: " + e);
    }
}