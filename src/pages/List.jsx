import React from 'react'

import Header from '../components/home/Header'
import Main from '../components/home/Main'
import Footer from '../components/home/Footer'
import Table from '../components/list/Table'


const List = () => {
    return (
        <>
        <Header />
        <Main>
            <Table />
        </Main>
        <Footer />
        </>
        )
    }

export default List