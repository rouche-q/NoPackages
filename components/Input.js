import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = ({ onChange, placeholder, style }) => {
    const [value, setValue] = useState('')

    let onChangeText = (text) => {
        setValue(text)
        onChange(text)
    }

    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[template.input, style]}
        />
    )
}

const template = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        width: "95%",
        alignSelf: "center",
    }
})

export default Input