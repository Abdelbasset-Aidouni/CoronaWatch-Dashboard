import React from 'react'
import Logo from '../../../../assets/resources/Logo-header.svg'
import {NavItem,SideBarContainer,NavItemsContainer} from './style'
import SvgIcon from '../../../../components/SvgIcon'
import Heading from '../../../../components/Heading'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {switchTab} from '../../../../store/actions'

import {useSelector,useDispatch} from 'react-redux'




const NavHeading = styled(Heading)`
    margin:0;
    padding:0;
    margin-left:.8rem;
    
`



export default () => {
    const dispatch = useDispatch()
    const menu =  useSelector(state => state.menu)
    console.log(menu)
    const history = useHistory()
    const onClickHandler = (element,e)=>{
        dispatch(switchTab(element.url))
        history.push(element.url)
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
                    onClick={() => onClickHandler(item) }
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