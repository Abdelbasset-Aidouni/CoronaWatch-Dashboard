import React from 'react'
import BasePage from '../BasePage'
import SwitchButtons from './components/SwitchButtons'
import NationalForm from './components/NationalForm'


const PageWrapper = () => {
    return (
        <>
            <SwitchButtons/>
            <NationalForm/>
        </>
        
    )
}




export default () => <BasePage> <PageWrapper/> </BasePage>