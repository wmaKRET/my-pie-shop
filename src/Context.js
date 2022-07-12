import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }){
    const [bakeryItems, setBakeryItems] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setBakeryItems(data.data))
            .catch(error => console.log(error))
    }, [])

    function addToCart(newItem) {
        if (cartItems.filter(item => item.id === newItem.id).length < 5)
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(itemID) {
        const indexInArray = cartItems.indexOf(itemID)
        console.log(indexInArray)
        if (indexInArray > -1) setCartItems(prevItems => prevItems.splice(indexInArray, 1))
    }

    return (
        <Context.Provider
            value={{
                bakeryItems,
                cartItems,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }