import React from 'react'
import '../style.css'
import './header.css'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/">Dobriy Siva</Link>
            <Link className="headerItem" to="/pshenica">Пшениця</Link>
            <Link className="headerItem" to="/berley">Ячмінь</Link>
            <Link className="headerItem" to="/oves">Овес</Link>
            <Link className="headerItem" to="/logIn">Log in</Link>


        </header>
    )
}
