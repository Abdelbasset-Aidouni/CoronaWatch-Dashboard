import styled from 'styled-components'
import SvgIcon from '../../../../components/SvgIcon'


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
    justify-content:flex-end;
    align-items:center;
    padding:.8rem 1.4rem;
`
const IconWithMargin = styled(SvgIcon)`
    margin-left:1.2rem;
    margin-right:1.2rem;
`


export {
    UserNavContainer,
    UserImage,
    NotificationBellContainer,
    NotificationIndicator,
    IconWithMargin
}