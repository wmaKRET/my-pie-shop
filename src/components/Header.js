import React from "react"
import { Link } from "react-router-dom"

function Header(){
    return (
        <header className="header">
            <div className="header__item">
                <Link to="/main" className="header__item-link">Home</Link>
            </div>
            <div className="header__item">
                <p>Pies</p>
                <p>Cupcakes</p>
            </div>
            <div className="header__item">
                <Link to="/cart" className="header__item-link">Cart</Link>
            </div>
        </header>
    )
}

export default Header