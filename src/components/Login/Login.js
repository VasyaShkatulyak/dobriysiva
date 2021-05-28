import React, { useEffect, useState, memo } from 'react'
import { Header } from '../Header/Header'

export default memo(function Login({ login, setEError, setEmail, error, email, password, hasAccaunt, setHasAccaunt }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isValid, setIsValid] = useState(false)

    const formSubmition = () => {
        if (email === '' || password === '') {
            alert("Логін або пароль неправильний")
        }
        else {
            setIsValid(true)
        }
    }



    return (
        <>
            <Header />

            <div className="login">
                <span>Логування</span>

                <input  placeholder="Введіть пошту" value={email} onChange={(e)=>setEmail(e.current.value)}></input>
                <input  placeholder="Введіть пароль" value={password} onChange={(e)=>setPassword(e.current.value)}></input>
                <div>{error}</div>

                <button className="LoginButton" onClick={() => formSubmition()}>Увійти</button>
            </div>

        </>
    )
})