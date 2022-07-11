import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }){
    const [bakeryItems, setBakeryItems] = useState([])

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setBakeryItems(data.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <Context.Provider
            value={{
                bakeryItems
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }