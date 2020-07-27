import React, { useEffect, useContext } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import { store } from '../context/NoteContext'
import NoteStorage from '../storage/NoteStorage'

import Button from '../components/Button'

const SplashPage = (props) => {
    const { dispatch, state } = useContext(store)

    useEffect(() => {
        let getNotes = async () => {
            let notes = await NoteStorage.getAllNote()
            dispatch({ type: "setSavedNotes", payload: notes })
        }
        getNotes()
    })


    let onPressEnter = () => {
        setTimeout(() => {
            props.goTo("HomePage")
        }, 250)
    }

    return (
        <>
            <SafeAreaView style={style.root}>
                <Text>No Packages</Text>
                <Button style={style.button} onPress={onPressEnter}>Enter</Button>
            </SafeAreaView>
        </>
    )
}


const style = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100
    },

    button: {
        marginTop: 30,
    }
})
export default SplashPage
