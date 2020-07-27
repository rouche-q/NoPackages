import React, { useState } from 'react'
import {View, StyleSheet, TextInput } from 'react-native'

const MultilineInput = ({ onChange, placeholder, style }) => {
    const [value, setValue] = useState('')

    let onChangeText = (text) => {
        setValue(text)
        onChange(text)
    }

    return (
        <View style={template.input}>
            <TextInput
                multiline
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}

const template = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "black",
        width: "95%",
        alignSelf: "center",
        height:"77%"
    }
})

export default MultilineInput