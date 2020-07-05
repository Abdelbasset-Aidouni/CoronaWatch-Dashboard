import styled from 'styled-components'
import {PrimaryTheme} from '../../../../global/Themes'

const NavItem = styled.div`
    background-color:${props => props.selected ? "white":PrimaryTheme.primary.base };
    color: ${props => props.selected ? PrimaryTheme.secondary.base : "white"};
    width:90%;
    padding: .6rem 1rem;
    border-top-left-radius:50px;
    border-bottom-left-radius:50px;
    margin-top:.4rem;
    margin-bottom:.4rem;
    display:flex;
    align-items:center;
    justify-content:left;
    transition: all .4s;
  
        


`
const NavItemsContainer =styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:flex-end;
    margin-top:1rem;
    cursor:pointer;
`

const SideBarContainer = styled.div`
    
    background-color:${PrimaryTheme.primary.base};
    display:flex;
    flex-direction:column;
    width:18%;
    min-width:250px;
    min-height:100% !important;
    box-shadow: 13px -2px 18px -18px rgba(0,0,0,0.49);
`
export const LogoutContainer = styled.div`
    /* margin-top:2rem; */
    display:flex;
    flex-direction:column;
    
    align-items:center;
`
export const Divider = styled.hr`
    color:white;
    width:60%;
    border-top:solid #B7B7B749 .5px;
`

export {
    NavItem,
    SideBarContainer,
    NavItemsContainer
}