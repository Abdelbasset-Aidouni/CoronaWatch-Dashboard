import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Logo from '../../../../assets/resources/Logo-header.svg'
import {NavItem,SideBarContainer,NavItemsContainer} from './style'
import SvgIcon from '../../../../components/SvgIcon'
import Heading from '../../../../components/Heading'
import Dashboard from '../../../../assets/icons/dashboard.svg'
import Accounts from '../../../../assets/icons/accounts.svg'
import Content from '../../../../assets/icons/content.svg'
import styled from 'styled-components'




const NavHeading = styled(Heading)`
    margin:0;
    padding:0;
    margin-left:.8rem;
    
`



export default () => {
        const [menu,setMenu] = useState([
            {id:0,item:"Dashboard",selected:true,icon:Dashboard,url:"/"},
            {id:1,item:"Accounts",selected:false,icon:Accounts,url:"/accounts"},
            {id:2,item:"Content",selected:false,icon:Content,url:"/content"},
        ])
        const history = useHistory()
        const onClickHandler = (element,e)=>{
            if (!element.selected) {
                setMenu(prev => [...prev.filter(item => item.id !== element.id).map(item => {return {...item,selected:false}} ),
                    {
                        ...element,
                        selected:true
                    }].sort((a,b)=> a.id-b.id))
                history.push(element.url)
            }
            
        }
    return (
        <>
    <SideBarContainer>
        <SvgIcon
            url={Logo}
            width="80%"
            height="80px"
            size="contain"
        />
        <NavItemsContainer>
            {menu.map(item => (
                <NavItem 
                    selected={item.selected} 
                    onClick={() => onClickHandler(item)} 
                    key={item.id}
                    type={console.log(item)}
                >   
                    <SvgIcon
                        url={item.icon}
                        size="contain"
                        width="28px"
                        height="26px"
                        white={!item.selected ? true : false}
                    />
                    <NavHeading
                        size="h5"
                        weight="500"
                        inherit
                    >
                        {item.item}
                    </NavHeading>
                    
                </NavItem>
                  )
                
            )}
            
            
        </NavItemsContainer>
        
    </SideBarContainer>
    </>
)
}