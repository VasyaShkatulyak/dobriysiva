import React, { memo } from 'react'
import CalculateCorn from '../Calculations/CalculateCorn'
import { Header } from '../Header/Header'

export default memo(function Home() {
    return (
        <>
            <Header />
            
            <div className="main">
            <h1>Норма висіву Кукурудзи</h1>
            <CalculateCorn />
            </div>

        </>
    )
})