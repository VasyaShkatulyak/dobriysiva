import React, { memo } from 'react'
import {Header} from '../components/Header'
import SimpleCalculate from '../components/SimpleCalculate'

export default memo(function Home() {
    return (
        <>
            <Header />
            <SimpleCalculate />
        </>
    )
})