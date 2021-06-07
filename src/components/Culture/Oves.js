import React, { memo } from 'react'
import CalculateBeet from '../Calculations/CalculationBeet'
import { Header } from '../Header/Header'

export default memo(function Home() {
    return (
        <>
            <Header />

            <div className="main">
                <h1>Норма висіву буряка</h1>
                   <CalculateBeet />            
            </div>

        </>
    )
})