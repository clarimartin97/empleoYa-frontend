import * as yup from 'yup'
export const signUpValidationSchema = yup.object().shape({
    mail: yup
        .string()
        .email('Escribe un e-mail valido')
        .required('El e-mail es requerido'),
    contrasena: yup
        .string()
        .min(5, 'La contraseña es muy corta')
        .max(30, 'La contraseña es muy larga')
        .required('La contraseña es requerida'),
    nombre: yup.string()
        .min(3, "Debes escribir tu nombre")
        .max(30, "Debes escribir tu nombre")
        .required("Debes escribir tu nombre"),
    apellido: yup.string()
        .min(3, "Debes escribir tu apellido")
        .max(30, "Debes escribir tu apellido")
        .required("Debes escribir tu apellido"),
})
export const agregarTrabajoValidationSchema = yup.object().shape({
    nombreDelPuesto: yup
        .string()
        .required('El nombre del puesto es requerido'),
    duracion: yup
        .string()
        .required('La duración es requerida'),
    ubicacion: yup.string()
        .required('La ubicación es requerida'),
    requisitos: yup.string()
        .required('Los requisitos son requeridos'),
    descripcionDelPuesto: yup.string()
        .required('La descripción del puesto es requerida'),
    modalidad: yup.string()
        .required('La modalidad es requerida'),
})
export const logInValidationSchema = yup.object().shape({
    mail: yup
        .string()
        .email('Escribe un e-mail valido')
        .required('El e-mail es requerido'),
    contrasena: yup
        .string()
        .min(5, 'La contraseña es muy corta')
        .max(30, 'La contraseña es muy larga')
        .required('La contraseña es requerida'),
})
