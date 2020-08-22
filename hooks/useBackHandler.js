import React, { useEffect } from 'react'
import {BackHandler} from 'react-native'

const useBackHandler = (callback) => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => {
                callback()
                return true
            }
          );
          return () => backHandler.remove()
    })

}


export default useBackHandler