import * as yup from 'yup'
export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Escribe un e-mail valido')
        .required('El e-mail es requerido'),
    contrasena: yup
        .string()
        .min(5, 'La contraseña es muy corta')
        .max(30, 'La contraseña es muy larga')
        .required('La contraseña es requerida'),
})