import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from "react-native"
import Add from './../assets/add.png'

const chooseIcon = (icon) => {
    switch (icon) {
        case 'Add':return Add
        case 'Modif':return null
        case "Back": return null
        default:
            return Add
    }
}

const FloatingButton = ({ onPress, color, style, icon }) => (
    <TouchableOpacity style={[template.button, style, color ? { backgroundColor: color } : {}]} onPress={onPress}>
        <Image style={template.icon} source={chooseIcon(icon)} />
    </TouchableOpacity>
)

const template = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        backgroundColor: "#46b3e6",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        position: "absolute",
        bottom: 50,
        right: 20,
        zIndex: 10
    },

    icon: {
        width: 30,
        height: 30,
    }
})

export default FloatingButton