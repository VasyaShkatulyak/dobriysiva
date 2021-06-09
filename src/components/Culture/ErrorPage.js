import React from 'react'
import { Link } from "react-router-dom";
import '../Culture/Error.css'

const ErrorPage = () => {


    return(
        <>
        <div className="error">
        <h1 className="ErrorH1">404</h1>
        <h2 className="description">Page not found</h2>
        <Link className="errorToHome" to="/">На головну</Link>
        </div>
        </>
    )
}
export default ErrorPage;