import React, {useEffect, useState, memo } from 'react'
import {Header} from '../Header/Header'

export default memo(function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isValid, setIsValid] = useState(false)

    const formSubmition = () => {
        if(email === '' || password === ''){
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

                <input className="data" type="email" placeholder="Введіть пошту"></input>
                <input className="data" type="password" placeholder="Введіть пароль"></input>

                <button className="LoginButton" onClick={() => formSubmition()}>Увійти</button>
            </div>

        </>
    )
})