import React, { memo, useState } from 'react'
import CalculateCorn from '../Calculations/CalculateCorn'
import PosivnaPridatnistCalc from '../Calculations/PosivnaPridatnistCalculate'
import { Header } from '../Header/Header'

export default memo(function Home() {

    const [posivnaResult, setPosivnaResult] = useState(0);

    return (
        <>
            <Header />

            <div className="main">
                <h1>Норма висіву Кукурудзи</h1>
                <div className="calculates">
                    <PosivnaPridatnistCalc setPosivnaResult={setPosivnaResult}/>
                    <CalculateCorn posivnaResult={posivnaResult}/>
                </div>

            </div>

        </>
    )
})