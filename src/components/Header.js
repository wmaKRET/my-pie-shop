import React from "react"
import { Link } from "react-router-dom"

function Header(){
    return (
        <header className="header">
            <div className="header__item">
                <Link to="/" className="header__item-link">Home</Link>
            </div>
            <div className="header__item">
                <Link to="/pies" className="header__item-link">Pies</Link>
                <Link to="/cupcakes" className="header__item-link">Cupcakes</Link>
            </div>
            <div className="header__item">
                <Link to="/cart" className="header__item-link">Cart</Link>
            </div>
        </header>
    )
}

export default Header