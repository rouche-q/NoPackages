import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from "react-native"

const Button = ({onPress, color, style, children}) => (
    <TouchableOpacity style={[template.button, style, color ? {backgroundColor: color} : {}]} onPress={onPress}>
        <Text style={template.text}>{children}</Text>
    </TouchableOpacity>
)

const template = StyleSheet.create({
    button: {
        width: "80%",
        backgroundColor: "#46b3e6",
        padding: 5,
        borderRadius: 2,
        margin: 10,
        alignSelf: "center"

    },

    text : {
        textAlign: "center",
        color: "white",
    }
})

export default Button