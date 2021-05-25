import React, { useEffect, useState, memo } from 'react'
import { Header } from '../components/Header'

export default memo(function Home() {

    const formSubmition = () => {

    }

    return (
        <>
            <Header />

            <div className="login">
                <span>Логування</span>
                <input className="data" type="email" placeholder="Введіть пошту"></input>
                <input className="data" type="password" placeholder="Введіть пароль"></input>
                <button className="LoginButton" onClick={}>Увійти</button>
            </div>

        </>
    )
})