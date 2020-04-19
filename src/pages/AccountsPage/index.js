import React from 'react'
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
import {
    HeadingFilterContainer,
    FilterButtonContainer,
    FilterButton,
    LoadMoreButtonContainer,
    Header
} from './style'




const AccountsWrapper = () =>(
    <>
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
                        <Th>Username</Th>
                        <Th>Role</Th>
                        <Th>Date Joined</Th>
                        <Th>Last Login</Th>
                        <Th>Status</Th>
                        <Th></Th>
                    </Tr>
                    
                </thead>
                
                <tbody>
                    {data.data.map(user =>(
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
)

export default () => <BasePage> <AccountsWrapper/> </BasePage>