import React from 'react'

import Header from '../components/home/Header'
import Main from '../components/home/Main'
import Footer from '../components/home/Footer'
import TestMenu from '../components/menu/TestMenu'


const Test = () => {
    return (
        <>
        <Header />
        <Main>
            <TestMenu />
            </Main>
        <Footer />
        </>
        )
    }

export default Test