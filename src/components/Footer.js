import React from "react"
import { Link } from "react-router-dom"

function Footer(){
    return (
        <footer className="footer">
            <div className="footer__item">
                <Link to="/pies" className="footer__item-link">Pies</Link>
                <Link to="/cupcakes" className="footer__item-link">Cupcakes</Link>
            </div>
            <div className="footer__item">
                <p>About Us</p>
            </div>
            <div className="footer__item">
                <p>Contact</p>
            </div>
            <a className="footer__githublink" href="https://github.com/wmaKRET/">wmaKRET</a>
        </footer>
    )
}

export default Footer