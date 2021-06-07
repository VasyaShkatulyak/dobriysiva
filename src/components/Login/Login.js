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
        <div style={{display:'flex', flexDirection:'column', maxWidth:300}} >
            {isReg?<h1>Реєстрація</h1>:<h1>Логін</h1>}
            <input style={{background: "green"}} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            <input style={{background: "grey"}} value={password}  onChange={(e)=>setPassowrd(e.target.value)} type="password" />
           <div>{error}</div>
           {isReg
                ? <button onClick={register}>реєстрація</button>
                : <button onClick={login}>вхід</button>
                }
            <h6>
                    {isReg
                    ?goToReg
                    :goToLogin
                    }
                    <button onClick={()=>setIsReg(!isReg)}>перейти</button></h6>
            </div>
        </div>
    )
}

export default Login;