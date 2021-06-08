import React, { memo } from 'react'
import ZernoviCard from '../CalculationCards/Zernovi'
import {Header} from '../Header/Header'
import './Home.css'

export default memo(function Home() {
    return (
        <>
            <Header />

            
            <div classname="main1">
            <h1 className="h1">Виберіть культуру для обчислення</h1>
            <ZernoviCard/>
            </div>
        </>
    )
})