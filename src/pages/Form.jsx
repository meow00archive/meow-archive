import React from 'react'

import Header from '../components/home/Header'
import Main from '../components/home/Main'
import Footer from '../components/home/Footer'
import TestMenu from '../components/menu/TestMenu'
import Form from '../components/test/Form'

const Test = () => {
    return (
        <>
        <Header />
        <Main>
            <TestMenu />
            <Form />
            </Main>
        <Footer />
        </>
        )
    }

export default Test