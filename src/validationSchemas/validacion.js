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