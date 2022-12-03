import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'
import HeaderEmpresa from './HeaderEmpresa.jsx'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5,
    }
})


const ItemTrabajo = (props) => (
    <View key={props.id} style={styles.container}>
        <HeaderEmpresa {...props} />
        <StyledText fontSize='subheading' fontWeight='bold'>Nombre del puesto: {props.nombreDelPuesto}</StyledText>
        <StyledText >Días y horarios: {props.diasYHorarios}</StyledText>
        <StyledText >Categoría: {props.categoria}</StyledText>
        <StyledText >Requisitos: {props.requisitos}</StyledText>
        <StyledText >Descripción del puesto: {props.descripcionDelPuesto}</StyledText>
        <StyledText >Estado del trabajo: {props.estadoDelTrabajo}</StyledText>

    </View>
)

export default ItemTrabajo