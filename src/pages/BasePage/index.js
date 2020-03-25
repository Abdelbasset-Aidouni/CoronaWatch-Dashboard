import React from 'react'
import SideBar from './components/SideBar'
import UserNav from './components/UserNav'
import styled from 'styled-components'
const Wrapper = styled.div`
    display:flex;
    position:absolute;
    width:100%;
    flex-direction:row;
    height:100% !important;
    background-color:#F7F7F7;
`
const MainContent = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    height:100% !important;
    
`

export default ({children}) => (
    <Wrapper>
        <SideBar/>
        <MainContent>
            <UserNav/>
            {children}
        </MainContent>
    </Wrapper>
    
)