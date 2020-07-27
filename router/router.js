import React, { useState, cloneElement, useEffect } from 'react'
import { Text } from "react-native"

const Router = (props) => {
    let pages = {}
    const [current, setCurrent] = useState(props.path)

    props.children.forEach((page) => { pages = { ...pages, ...{ [page.type.name]: page } } })

    useEffect(() => {
        setCurrent(props.path)
    }, [props.path])

    return (
        <>
            {pages[props.path]}
        </>
    )
}

export default Router