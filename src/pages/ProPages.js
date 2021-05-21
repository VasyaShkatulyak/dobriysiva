import React, { memo } from 'react'
import {Header} from '../components/Header'
import ProCalculate from '../components/Calculate'

export default memo(function Home() {
    return (
        <>
            <Header />
            <ProCalculate />
        </>
    )
})