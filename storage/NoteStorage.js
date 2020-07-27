import React from 'react'
import { AsyncStorage } from 'react-native'

const NoteStorage = {
    getAllNote: async () => {
        let keys = []
        let notes = []
        try {
            keys = await AsyncStorage.getAllKeys()
            notes = await AsyncStorage.multiGet(keys)
        } catch (e) {
            console.log(e)
            return []
        }

        notes = notes.map((note) => {
            return [note[0], JSON.parse(note[1])]
        })
        return notes
    },

    setNote: async (key, note) => {
        try {
            const jsonValue = JSON.stringify(note)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            console.log(e)
        }

        console.log('Note set.')
    },
    deleteNote : async (note) => {
        try {
            await AsyncStorage.removeItem(note[0])
          } catch(e) {
            console.log(e)
          }
          console.log('Delete Done.')
    },

    clearAll: async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.log(e)
        }

        console.log('Clear done.')
    }
}

export default NoteStorage