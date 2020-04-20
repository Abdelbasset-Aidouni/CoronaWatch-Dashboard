import React,{useState,useEffect} from 'react'
import BasePage from '../BasePage'
import {AccountsContainer,TableContainer} from './style'
import {CenteredContent} from '../LoginPage/components/LoginForm/style'
import SvgIcon from '../../components/SvgIcon'
import Heading from '../../components/Heading'
import {Tr,Td,TableStyle,Th} from './components/Table'
import Arrow from '../../assets/icons/arrow.svg'
import Filter from '../../assets/icons/filter.svg'
import data from '../../data/accounts.json'
import AccountLine from './components/AccountLine'
import AddUserButton from './components/AddUser'
import AddUserModal from './components/AddUserModal'
import {fetchUsers} from '../../services/accounts/users'
import {
    HeadingFilterContainer,
    FilterButtonContainer,
    FilterButton,
    LoadMoreButtonContainer,
    Header
} from './style'




const AccountsWrapper = () =>{
    var [accounts,setAccounts] = useState([])
    useEffect(
        () =>{
            const fetchData = async ()=>{
                const result = await fetchUsers()
                setAccounts(result)
            }
            fetchData()
        },[]
    )
    return (
    <>
    <AccountsContainer>
        <Header>
            
            <HeadingFilterContainer>
                <Heading
                    size="h2"
                    weight="600"
                >
                    Accounts {console.log(typeof(accounts))}
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
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"16%"}} />
                <col span="1" style={{width:"20%"}} />
            </colgroup>
                <thead>
                    <Tr>
                        <Th>Email</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Role</Th>
                        <Th>Birth Day</Th>
                        
                        <Th></Th>
                    </Tr>
                    
                </thead>
                
                <tbody>
                    {accounts.map(user =>(
                      <AccountLine user={user} />  
                    ))}
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
    
    </>
)}

export default () => <BasePage> <AccountsWrapper/> </BasePage>