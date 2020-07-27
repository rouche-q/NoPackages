import React from 'react'
import { View, StyleSheet , Text} from 'react-native'

const Header = () => (
    <View style={style.container}>
        <Text style={style.title}>NoPackages</Text>
    </View>
)

const style = StyleSheet.create({
    container : {
        width: "50%",
        backgroundColor: "transparent",
        borderColor: "#4d80e4",
        borderWidth: 2,
        padding: 5,
        borderRadius: 2,
        alignSelf: "center",
        margin: 20,
    },

    title : {
        textAlign: "center",
        color: "#4d80e4",
        fontSize: 20
    }
})

export default Header