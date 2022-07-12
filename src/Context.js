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
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(itemID) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemID))
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