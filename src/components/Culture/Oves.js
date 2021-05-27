import React, { memo } from 'react'
import CalculateOves from '../Calculations/CalculateOves'
import CalculateOvesPro from '../Calculations/CalculateOvesPro'
import PosivnaPridatnistCalc from '../Calculations/PosivnaPridatnistCalculate'
import { Header } from '../Header/Header'

export default memo(function Home() {
    return (
        <>
            <Header />

            <div className="main">
                <h1>Норма висіву вівса</h1>
                <CalculateOves />
                <div className="calculates">
                    <PosivnaPridatnistCalc />
                    <CalculateOvesPro />
                </div>
                
            </div>

        </>
    )
})