import React, { useState, useContext } from 'react'
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native"

import { store } from './../context/NoteContext'
import NoteStorage from '../storage/NoteStorage'

import Header from "./../components/Header"
import Input from "../components/Input"
import MultilineInput from "../components/MultilineInput"
import Button from "../components/Button"

const NotePage = (props) => {
    const { dispatch, state } = useContext(store)

    let goToHome = () => {
        setTimeout(() => {
            props.goTo("HomePage")
        }, 250)
    }

    return (
        <>
            <SafeAreaView>
                <Header />
                <Text style={style.title}>{state.currentNote.title}</Text>
                <ScrollView style={style.scroll}>
                    <Text style={style.text}>{state.currentNote.text}</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    title: {
        borderBottomWidth: 2,
        borderBottomColor: "black",
        width: "95%",
        alignSelf: "center",
        fontSize: 20
    },

    scroll: {
        padding: 5
    }
})

export default NotePage