import React, { memo, useState, useReducer } from 'react'
import { Header } from '../Header/Header'
import SimpleCalculate from '../Calculations/SimpleCalculate'
import ProCalculate from '../Calculations/ProCalculate'
import PosivnaPridatnistCalc from '../Calculations/PosivnaPridatnistCalculate'
import TabsBar from '../TabsBar/TabsBar'
import CalculateBerley from '../Calculations/CalculateBarley'
import CalculateOves from '../Calculations/CalculateOves'

export const pshenica = "SimpleCalculate";
export const oves = "CalculateOves";
export const barley = "CalculateBarley";

export default memo(function Home() {



    const [posivnaResult, setPosivnaResult] = useState(0);

    const initialState = { cid: 1 };

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case pshenica: return { cid: 1 };
            case barley: return { cid: 2 };
            case oves: return { cid: 3 };
            default: throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

console.log(state);
    return (
        <>
            <Header />
            <div className="main">
                <h1>Норма висіву зернових</h1>
                <TabsBar dispatch={dispatch} />
                {state.cid === 1 ? <SimpleCalculate /> : ""}
                {state.cid === 2 ? <CalculateBerley /> : ""}
                {state.cid === 3 ? <CalculateOves /> : ""}
                <div className="calculates">
                    <PosivnaPridatnistCalc setPosivnaResult={setPosivnaResult} />
                    <ProCalculate posivnaResult={posivnaResult} />
                </div>

            </div>
        </>
    )
})