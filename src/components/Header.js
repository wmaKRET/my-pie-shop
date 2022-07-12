import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { Context } from "../Context"

function Header(){
    const { cartItems } = useContext(Context)

    return (
        <header className="header">
            <div className="header__item">
                <Link to="/" className="header__item-link">Home</Link>
            </div>
            <div className="header__item">
                <Link to="/products" className="header__item-link">Products</Link>
            </div>
            <div className="header__item">
                <Link to="/cart" className="header__item-link">{cartItems.length}</Link>
            </div>
        </header>
    )
}

export default Header