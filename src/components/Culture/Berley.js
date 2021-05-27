import React, { memo } from 'react'
import CalculateBerley from '../Calculations/CalculateBarley'
import CalculateBarleyPro from '../Calculations/CalculateBarleyPro'
import PosivnaPridatnistCalc from '../Calculations/PosivnaPridatnistCalculate'
import { Header } from '../Header/Header'

export default memo(function Home() {
    return (
        <>
            <Header />
            
            <div className="main">
            <h1>Норма висіву ячменю</h1>
            <CalculateBerley />
                <div className="calculates">
            <PosivnaPridatnistCalc />
            <CalculateBarleyPro />
            </div>
            </div>

        </>
    )
})