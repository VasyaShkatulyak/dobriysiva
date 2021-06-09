import React, { memo } from 'react'
import ZernoviCard from '../CalculationCards/Zernovi'
import {Header} from '../Header/Header'
import './Home.css'

export default memo(function Home() {
    return (
        <>
            <Header />

            
            <div classname="home_main">
            <ZernoviCard/>
            </div>
        </>
    )
})