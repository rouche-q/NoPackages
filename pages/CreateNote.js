import React, { useState, useContext } from 'react'
import { SafeAreaView } from "react-native"

import { store } from './../context/NoteContext'
import NoteStorage from '../storage/NoteStorage'

import Header from "./../components/Header"
import Input from "../components/Input"
import MultilineInput from "../components/MultilineInput"
import Button from "../components/Button"

const CreateNotePage = (props) => {
    const { dispatch } = useContext(store)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    let onChangeTitle = (value) => {
        setTitle(value)
    }

    let onChangeText = (value) => {
        setText(value)
    }

    let goToHome = () => {
        let key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let note = { title: title, text: text }
        dispatch({type: 'addNote', payload: [key, note]})
        NoteStorage.setNote(key, note)
        setTimeout(() => {
            props.goTo("HomePage")
        }, 250)
    }

    return (
        <>
            <SafeAreaView>
                <Header />
                <Input placeholder="Title" onChange={onChangeTitle} />
                <MultilineInput placeholder="Your Note" onChange={onChangeText} />
                <Button onPress={goToHome}>Save</Button>
            </SafeAreaView>
        </>
    )
}

export default CreateNotePage