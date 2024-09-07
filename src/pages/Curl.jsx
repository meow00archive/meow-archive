import React from 'react'

import Header from '../components/home/Header'
import Main from '../components/home/Main'
import Footer from '../components/home/Footer'
import TestMenu from '../components/menu/TestMenu'
import Terminal from '../components/test/terminal'

const Curl = () => {
    return (
        <>
        <Header />
        <Main>
            <TestMenu />
            <Terminal />
            </Main>
        <Footer />
        </>
        )
    }

export default Curl