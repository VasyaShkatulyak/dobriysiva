import React from 'react'
import '../style.css'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            {/* <div className="headerLogo">Dobriy Siva</div> */}
            <Link to="/">Dobriy Siva</Link>
            <Link to="/page">Простий калькулятор</Link>
            <Link to="/pagepro">Розширений калк</Link>
            <Link to="/logIn">Log in</Link>

        </header>
    )
}
