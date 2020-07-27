import React from 'react'
import {TouchableOpacity, StyleSheet, Image} from "react-native"
import Add from './../assets/add.png'

const FloatingButton = ({onPress, color, style}) => (
    <TouchableOpacity style={[template.button, style, color ? {backgroundColor: color} : {}]} onPress={onPress}>
        <Image style={template.icon} source={Add}/>
    </TouchableOpacity>
)

const template = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        backgroundColor: "#46b3e6",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        position: "absolute",
        bottom: 50,
        right: 20,
        zIndex: 10
    },

    text : {
        textAlign: "center",
        color: "white",
        fontSize: 30
    },

    icon : {
        width: 30,
        height: 30,
    }
})

export default FloatingButton