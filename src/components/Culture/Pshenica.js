import React, { memo, useState } from 'react'
import { Header } from '../Header/Header'
import SimpleCalculate from '../Calculations/SimpleCalculate'
import ProCalculate from '../Calculations/Calculate'
import PosivnaPridatnistCalc from '../Calculations/PosivnaPridatnistCalculate'

export default memo(function Home() {

    const [posivnaResult, setPosivnaResult] = useState(0);

    return (
        <>
            <Header />
            <div className="main">
                <h1>Норма висіву пшениці</h1>
                <div className="calculates">
                    <SimpleCalculate />
                    <ProCalculate posivnaResult={posivnaResult}/>
                </div>
                <PosivnaPridatnistCalc setPosivnaResult={setPosivnaResult}/>
            </div>
        </>
    )
})