import React,{useState,useEffect} from 'react'
import BasePage from '../BasePage'
import {AccountsContainer,TableContainer} from './style'
import {CenteredContent} from '../LoginPage/components/LoginForm/style'
import SvgIcon from '../../components/SvgIcon'
import Heading from '../../components/Heading'
import {Tr,Td,TableStyle,Th,Thead} from './components/Table'
import Arrow from '../../assets/icons/arrow.svg'
import Filter from '../../assets/icons/filter.svg'
import data from '../../data/accounts.json'
import AccountLine from './components/AccountLine'
import AddUserButton from './components/AddUser'
import AddUserModal from './components/AddUserModal'
import {fetchUsers} from '../../services/accounts/users'
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import {
    HeadingFilterContainer,
    FilterButtonContainer,
    FilterButton,
    LoadMoreButtonContainer,
    Header
} from './style'
import styled from 'styled-components'

const Tbody = styled.tbody`
     height: 300px;       /* Just for the demo          */
    overflow-y: auto;    /* Trigger vertical scroll    */
    overflow-x: hidden;
`

const override = css`
    position:absolute;
    top:150%;
    left:45%;
`
const AccountsWrapper = () =>{
    const [loading,setLoading] = useState(false)
    var [accounts,setAccounts] = useState([])
    useEffect(
        () =>{
            const fetchData = async ()=>{
                setLoading(true)
                const result = await fetchUsers()
                setAccounts(result)
                setLoading(false)
                
            }
            fetchData()
            
        },[]
    )
    const deleteUserHandler = (pk) =>{
        setAccounts(previosState => [...previosState.filter(account => account.pk !== pk)])
    }
    return (
    <>
    <AccountsContainer>
        <Header>
            
            <HeadingFilterContainer>
                <Heading
                    size="h2"
                    weight="600"
                >
                    Accounts {console.log(accounts)}
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
            <AddUserButton/>
        </Header>
        <TableContainer>
            
            <TableStyle>
            <colgroup>
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"20%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
            </colgroup>
            
            <Thead>
                    <Tr>
                        <Th>Email</Th>
                        
                        <Th>Role</Th>
                        <Th>Date Joined</Th>
                        <Th>Last Login</Th>
                        <Th>Status</Th>
                        <Th></Th>
                    </Tr>
                    
                </Thead>
                <Tbody>
                    {accounts.map(user =>(
                      <AccountLine user={user} deleteUserHandler={deleteUserHandler} />  
                    ))}
                </Tbody>
                
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
    <PulseLoader
        css={override}
        // size={60}
        color={"#13C7E9"}
        loading={loading}
        // margin={0}
        />
    <AddUserModal/>
    </>
)}

export default () => <BasePage> <AccountsWrapper/> </BasePage>