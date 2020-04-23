import React from 'react'
import SideBar from './components/SideBar'
import UserNav from './components/UserNav'
import styled from 'styled-components'
import AddUserModal from '../AccountsPage/components/AddUserModal'
const Wrapper = styled.div`
    display:flex;
    position:absolute;
    width:100%;
    flex-direction:row;
    min-height:100% !important;
    background-color:#F7F7F7;
`
const MainContent = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    flex-grow:10;
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