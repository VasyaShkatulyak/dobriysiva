import React from 'react'
import '../style.css'
import './header.css'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/">Dobriy Siva</Link>
            <Link className="headerItem" to="/zernovi">Зернові культури</Link>
            <Link className="headerItem" to="/corn">Кукурудза</Link>
            <Link className="headerItem" to="/oves">Буряк</Link>
            <Link className="headerItem" to="/logIn">Log in</Link>

        </header>
    )
}
