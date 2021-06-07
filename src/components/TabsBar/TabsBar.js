import React from 'react'
import { barley, oves, pshenica } from '../Culture/Zernovi'
import '../style.css'
import './tabs.css'

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
        <div className="bar">
            <button className="tab_button" onClick={ChangePshenica}>Пшениця</button>
            <button className="tab_button" onClick={ChangeBarley}>Ячмінь</button>
            <button className="tab_button" onClick={ChangeOves}>Овес</button>

        </div>
        </>
    )
}
