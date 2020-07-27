import React, { useContext, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, ImagePropTypes, ScrollView, View, Alert } from 'react-native'

import { store } from './../context/NoteContext'
import NoteStorage from '../storage/NoteStorage'

import Header from "./../components/Header"
import FloatingButton from "./../components/FloatingButton"
import NotePreview from './../components/NotePreview'

const HomePage = (props) => {
    const { dispatch, state } = useContext(store)

    let goToCreateNote = () => {
        setTimeout(() => {
            props.goTo("CreateNotePage")
        }, 250)
    }

    let goToSeeNote = (note) => {
        dispatch({ type: "setCurrentNote", payload: note })
        setTimeout(() => {
            props.goTo("NotePage")
        }, 250)

    }

    let deleteAlert = (note) => {
        Alert.alert("Delete note", "Do you want to delete this Note", [
            { text: "Cancel", onPress: () => { } },
            {
                text: "Delete", onPress: () => {
                    NoteStorage.deleteNote(note)
                    dispatch({ type: "deleteNote", payload: note })
                }
            },
        ])
    }


    let renderNotes = () => {
        console.log(state);
        return state.notes.map((note, index) => (
            <NotePreview title={note[1].title} text={note[1].text} key={index}
                onPress={() => (goToSeeNote(note))} onLongPress={() => deleteAlert(note)} />
        ))
    }

    return (
        <>
            <SafeAreaView style={style.root}>
                <Header />
                <ScrollView>
                    <View style={style.noteList}>
                        {renderNotes()}
                    </View>
                </ScrollView>
                <FloatingButton onPress={goToCreateNote} />
            </SafeAreaView>
        </>
    )
}


const style = StyleSheet.create({
    root: {
        flex: 1,
    },

    noteList: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})
export default HomePage
