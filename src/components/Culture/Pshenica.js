import React, { memo } from 'react'
import { Header } from '../Header/Header'
import SimpleCalculate from '../Calculations/SimpleCalculate'
import ProCalculate from '../Calculations/Calculate'
import PosivnaPridatnistCalc from '../Calculations/PosivnaPridatnistCalculate'

export default memo(function Home() {
    return (
        <>
            <Header />
            <div className="main">
                <h1>Норма висіву пшениці</h1>
                <div className="calculates">
                    <SimpleCalculate />
                    <ProCalculate />
                </div>
                <PosivnaPridatnistCalc />
            </div>
        </>
    )
})