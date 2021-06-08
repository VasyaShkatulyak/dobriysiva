import React from 'react'
import { Link } from "react-router-dom";
import '../Culture/Error.css'

const ErrorPage = () => {


    return(
        <>
        <h1>ERROR</h1>
        <Link className="errorToHome" to="/">На головну</Link>
        </>
    )
}
export default ErrorPage;