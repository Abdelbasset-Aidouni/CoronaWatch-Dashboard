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
import Dots from '../../assets/icons/dots.svg'
import data from '../../data/accounts.json'
import Container from '../../components/Container/style'




const TableStyle = styled.table`
    width:100%;
    border-collapse: collapse;
    margin-bottom:1.2rem;
    
    
`
const Tr = styled.tr`
    border-bottom:solid #E8E8E8 1px;
    padding: .6rem .8rem;
   
    &:last-child {
        border:none;
    }
    &:first-child{
        border-bottom:solid #E8E8E8 1px;
    }
    
`
const Td = styled.td`
    padding: .6rem .8rem;
    margin:1.2rem 1.6rem;
    font-size:1rem;
    /* border-bottom:solid #E8E8E8 1px; */
    text-align:center;
    color:#49514A;
    &:nth-child(2){
        font-weight:700;
        font-size:.8rem;
    }
    &:last-child{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        border:none;
        margin:0;
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
const TBody = styled.tbody`
    
    height:50vh;
    overflow-y:scroll;
    &::-webkit-scrollbar {
    width: 3px;
    height: 1px;

  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
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
            <colgroup>
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"20%"}} />
            </colgroup>
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
                <TBody>
                    {data.data.map(user =>(
                        <Tr>
                            <Td>{user.username}</Td>
                            <Td>{user.role}</Td>
                            <Td>{user.date_joined}</Td>
                            <Td>{user.last_login}</Td>
                            <Td>
                                <StatusBadge 
                                type={user.status === "reported" ? "warning": user.status === "blocked" ? "danger" : "success"}
                                >
                                {user.status.toUpperCase()}   
                                </StatusBadge>
                            </Td>
                            <Td>
                                <SvgIcon
                                    url={Dots}
                                    width="6px"
                                    height="14px"
                                    size="contain"
                                />
                            </Td>
                        </Tr>
                    ))}
                    
                
                   
                </TBody>
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