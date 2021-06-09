
import React, { useState } from 'react'
import { auth } from '../../server/firebase.config'
import {Header} from '../Header/Header'
import './Login.css'

const Login = () => {
  const [password,setPassowrd]=useState('')
  const [email,setEmail]=useState('')
  const [error,setError]=useState(null)
  const [isReg,setIsReg]=useState(false)

  const goToReg = 'Ще не зареєстровані? до реєстрації-> '
  const goToLogin = 'Є аккаунт? ротрібно ввійти в систему-> '

  const login = ()=>{
    auth.signInWithEmailAndPassword(email,password)
    .then((user)=>{
        if(user){
            window.location.href="/"
        }
    })
    .catch((e)=>{
        setError(e.message)
    })
}

const register = ()=>{
    auth.createUserWithEmailAndPassword(email,password)
    .then((user)=>{
        console.log(user);
    })
    .catch((e)=>{
        setError(e.message)
    })
}

return (
    <div className="signin">
         <Header />
        <div className="loginForm">
            {isReg?<h1 className="LoginH1">Реєстрація</h1>:<h1 className="LoginH1">Логін</h1>}
            <input className="inputLogin" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            <input className="inputLogin" value={password}  onChange={(e)=>setPassowrd(e.target.value)} type="password" />
           <div>{error}</div>
           {isReg
                ? <button className="btnLogin" onClick={register}>Реєстрація</button>
                : <button className="btnLogin" onClick={login}>Вхід</button>
                }
            <h6 className="titleQuestion">
                    {isReg
                    ?goToLogin
                    :goToReg
                    }
                    <button className="btrSwap" onClick={()=>setIsReg(!isReg)}>Перейти</button></h6>
            </div>
        </div>
    )
}

export default Login;