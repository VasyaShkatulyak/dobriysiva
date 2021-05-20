import React, { memo } from 'react'
import {Header} from '../components/Header'
import Calculate from '../components/Calculate'

export default memo(function Home() {
    return (
        <>
            <Header />
            <Calculate />
        </>
    )
})