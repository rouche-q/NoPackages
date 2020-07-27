import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, Dimensions } from 'react-native'

const NotePreview = (props) => {
    let title = props.title ? props.title.length > 18 ? props.title.substr(0, 15) + "..." : props.title : "No Title"
    let text = props.text ? props.text.length > 115 ? props.text.substr(0, 112) + "..." : props.title : "Nothing to remember"

    return (
        <Pressable style={template.note} onPress={props.onPress} onLongPress={props.onLongPress}>
            <Text style={template.title}>{title}</Text>
            <Text style={template.text}>{text}</Text>
        </Pressable>
    )
}

const template = StyleSheet.create({
    note: {
        width: Dimensions.get('window').width / 2 - 10,
        height: Dimensions.get('window').height / 5,
        backgroundColor: "#4d80e4",
        margin: 5,
        borderRadius: 5,
    },

    title: {
        width: "95%",
        alignSelf: "center",
        padding: 5,
        color: "white",
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },

    text: {
        padding: 5,
        color: 'white',
    }
})

export default NotePreview