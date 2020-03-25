import React from 'react'
import BasePage from '../BasePage'
import styled from 'styled-components'
import {AccountsContainer,TableContainer} from './style'
import {CenteredContent} from '../LoginPage/components/LoginForm/style'
import { PrimaryTheme } from '../../global/Themes'
import Arrow from '../../assets/icons/arrow.svg'
import SvgIcon from '../../components/SvgIcon'

const TableStyle = styled.table`
    width:100%;
    border-collapse: collapse;
    margin-bottom:1.2rem;
`
const Tr = styled.tr`
    border-bottom:solid #E8E8E8 1px;
    padding: .6rem .8rem;
    
    
`
const Td = styled.td`
    padding: .6rem .8rem;
    margin:1.2rem 1.6rem;
    border-bottom:solid #E8E8E8 1px;
    text-align:center;
    color:#49514A;

    &:nth-child(2){
        font-weight:700;
        font-size:.8rem;
    }
    
    &:first-child{
        font-weight:500;
        text-align:left;
    }
`
const Th = styled.th`
    color:#8C918D;
    font-size:1rem;
    font-weight:500;
    padding: .6rem .8rem;
    margin:1.2rem 1.6rem;
    
    &:first-child{
        text-align:left;
    }
`


const Divider = styled.hr`
    width:100%;
    color:#E8E8E8;
`

const StatusBadge = styled.span`
    color: ${props => props.type ? PrimaryTheme[props.type].base : PrimaryTheme.success.base};
    background-color: ${props => props.type ? PrimaryTheme[props.type].light : PrimaryTheme.success.light};
    border-radius:5px;
    padding:.2rem 1.4rem;
    font-weight:500;
    font-size:.8rem;
`

const LoadMoreButtonContainer = styled.div`
    border-radius:50%;
    background-color:#F7F7F7 ;
    border:none;
    cursor:pointer;
    padding:.5rem;

`

const AccountsWrapper = () =>(
    <AccountsContainer>
        <TableContainer>
            <TableStyle>
                <thead>
                    <Tr>
                        <Th>Username</Th>
                        <Th>Role</Th>
                        <Th>Date Joined</Th>
                        <Th>Last Login</Th>
                        <Th>Status</Th>
                        <Th></Th>
                    </Tr>
                    
                </thead>
                <tbody>
                    <Tr>
                        <Td>Ahmed</Td>
                        <Td>Moderator</Td>
                        <Td>12/03/2020</Td>
                        <Td>23/03/2020</Td>
                        <Td> <StatusBadge>Active</StatusBadge>  </Td>
                        <Td></Td>
                    </Tr>
                
                    <Tr>
                        <Td>Ahmed</Td>
                        <Td>Moderator</Td>
                        <Td>12/03/2020</Td>
                        <Td>23/03/2020</Td>
                        <Td><StatusBadge>Active</StatusBadge> </Td>
                        <Td></Td>
                    </Tr>
                   
                    <Tr>
                        <Td>Ahmed</Td>
                        <Td>Moderator</Td>
                        <Td>12/03/2020</Td>
                        <Td>23/03/2020</Td>
                        <Td><StatusBadge type="danger">Active</StatusBadge> </Td>
                        <Td></Td>
                    </Tr>
                </tbody>
            </TableStyle>
            <CenteredContent width="100">
                <LoadMoreButtonContainer>
                    <SvgIcon
                        url={Arrow}
                        width="20px"
                        height="20px"
                        size="contain"
                    />
                </LoadMoreButtonContainer>
            </CenteredContent>
        </TableContainer>
    </AccountsContainer>
)

export default () => <BasePage> <AccountsWrapper/> </BasePage>