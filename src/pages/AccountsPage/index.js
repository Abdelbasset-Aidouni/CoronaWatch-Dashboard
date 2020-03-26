import React from 'react'
import BasePage from '../BasePage'
import styled from 'styled-components'
import {AccountsContainer,TableContainer} from './style'
import {CenteredContent} from '../LoginPage/components/LoginForm/style'
import { PrimaryTheme } from '../../global/Themes'
import Arrow from '../../assets/icons/arrow.svg'
import SvgIcon from '../../components/SvgIcon'
import Heading from '../../components/Heading'
import Plus from '../../assets/icons/plus.svg'
import Filter from '../../assets/icons/filter.svg'




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
    font-size:.875rem;
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
    background-color:#F7F7F7;
    border:none;
    cursor:pointer;
    padding:.5rem;

`

const Header = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
`
const AddUserButton = styled.div`
    border:solid ${PrimaryTheme.secondary.base} 1px;
    border-radius: 5px;
    background-color:transparent;
    color: ${PrimaryTheme.secondary.base};
    padding:.4rem .8rem;
    font-weight:500;
    font-size:1.125rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor: pointer;
    transition:all .4s;
    &:hover{
        color:white;
        background-color:${PrimaryTheme.secondary.base};
        
    }
    &:hover div{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(308deg) brightness(101%) contrast(103%);
    }
`
const HeadingFilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    width:25%;
`


const FilterButton = styled.button`
    border:none;
    border-radius:5px;
    padding:.1rem .2rem;
    background-color:#EBEBEB;
    outline:none;
    cursor:pointer;
    margin-right:.4rem;
`
const FilterButtonContainer = styled.div`
    display:flex;
    align-items:baseline;
`



const AccountsWrapper = () =>(
    <AccountsContainer>
        <Header>
            <HeadingFilterContainer>
                <Heading
                    size="h2"
                    weight="600"
                >
                    Accounts
                </Heading>
                <FilterButtonContainer>
                    <FilterButton>
                        <SvgIcon
                            url={Filter}
                            width="18px"
                            height="15px"
                        />
                    </FilterButton>
                    <Heading
                        size="h5"
                        weight="500"
                    >
                        Filter
                    </Heading>
                </FilterButtonContainer>
                
            </HeadingFilterContainer>
            
            <AddUserButton>
                <SvgIcon
                    url={Plus}
                    height="20px"
                    width="20px"
                />
                Add User
            </AddUserButton>
        </Header>
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
                        <Td>Mohamed</Td>
                        <Td>Moderator</Td>
                        <Td>12/03/2020</Td>
                        <Td>23/03/2020</Td>
                        <Td> <StatusBadge>Active</StatusBadge>  </Td>
                        <Td></Td>
                    </Tr>
                
                    <Tr>
                        <Td>Djamila</Td>
                        <Td>Visitor</Td>
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
                        <Td><StatusBadge type="danger">Blocked</StatusBadge> </Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>Karim</Td>
                        <Td>Visitor</Td>
                        <Td>12/03/2020</Td>
                        <Td>23/03/2020</Td>
                        <Td><StatusBadge>Active</StatusBadge> </Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>Kamal</Td>
                        <Td>Visitor</Td>
                        <Td>12/03/2020</Td>
                        <Td>23/03/2020</Td>
                        <Td><StatusBadge type="warning">Reported</StatusBadge> </Td>
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