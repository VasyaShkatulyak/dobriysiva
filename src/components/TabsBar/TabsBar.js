import React from 'react'
import { barley, oves, pshenica } from '../Culture/Pshenica'

export default function TabsBar({dispatch}) {

    const ChangePshenica = () =>{
        dispatch ({type: pshenica})
    }
    const ChangeOves = () =>{
        dispatch ({type: oves})
    }

    const ChangeBarley = () =>{
        dispatch ({type: barley})
    }


    return (
        <>
        <div>
            <button onClick={ChangePshenica}>Пшениця</button>
            <button onClick={ChangeOves}>Овес</button>
            <button onClick={ChangeBarley}>Ячмінь</button>
        </div>
        </>
    )
}
