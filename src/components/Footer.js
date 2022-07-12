import React from "react"
import { Link } from "react-router-dom"

function Footer(){
    return (
        <footer className="footer">
            <div className="footer__item">
                <Link to="/products" className="footer__item-link">Products</Link>
            </div>
            <div className="footer__item">
                <p>About Us</p>
            </div>
            <div className="footer__item">
                <p>Contact</p>
            </div>
        </footer>
    )
}

export default Footer