import styled,{css} from 'styled-components'
import SvgIcon from '../../../../components/SvgIcon'
import {PrimaryTheme} from '../../../../global/Themes'

const UserImage = styled(SvgIcon)`
    border-radius:50%;
    margin-left:1.2rem;
`
const NotificationBellContainer = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:1.2rem;
    cursor:pointer;
`
const NotificationIndicator = styled.div`
    background-color:red;
    border-radius:50%;
    width:6px;
    height:6px;
    position:absolute;
    top:5%;
    right:5%;
    display: ${props => props.active ? "block" : "none"};
`

const UserNavContainer = styled.div`
    position:sticky;
    top:0;
    right:0;
    display:flex;
    background-color:#F7F7F7 !important;
    height:80px;
    justify-content: ${props => props.stat ? "space-between" : "flex-end"};
    align-items:center;
    padding:.8rem 1.4rem;
    
`

const NavElements = styled.div`
    display:flex;
    align-items:center;
    padding:.8rem 1.4rem;
`


const IconWithMargin = styled(SvgIcon)`
    margin-left:1.2rem;
    margin-right:1.2rem;
`

export const Container = styled.div`
    display:${props => props.stat ? "flex" : "none"};
    justify-content:center;
    margin:.4rem 0;
`

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:center;
    
   `

export const Button = styled.button`
    border:none;
    outline:none;
    background-color: ${props => props.selected ? "#121B54" : "white"};
    padding: .725rem;
    width:120px;
    font-weight:700;
    font-size:.875rem;
    color:${props => props.selected ? "white" : "#121B54" };
    &:focus{
        outline:none;
    }
    ${props => props.left ? css` border-radius:15px 0 0 15px;box-shadow: 2px 0px 10px -3px rgba(0,0,0,0.75); z-index:10;` : css` border-radius:0px 15px 15px 0px;box-shadow: 10px 10px 20px -20px rgba(0,0,0,0.75);z-index:9 `  };
`


export {
    UserNavContainer,
    UserImage,
    NotificationBellContainer,
    NotificationIndicator,
    IconWithMargin,
    NavElements
}