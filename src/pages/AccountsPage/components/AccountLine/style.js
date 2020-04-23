import styled from 'styled-components'
import {PrimaryTheme} from '../../../../global/Themes'





const StatusBadge = styled.span`
    color: ${props => props.type ? PrimaryTheme[props.type].base : PrimaryTheme.success.base};
    background-color: ${props => props.type ? PrimaryTheme[props.type].light : PrimaryTheme.success.light};
    border-radius:5px;
    padding:.2rem 1.4rem;
    font-weight:500;
    font-size:.8rem;
    
`
const DropdownItem = styled.span`
    color:${PrimaryTheme.secondary.base};
    font-weight:500;
    font-size:.8rem;
    &:hover{
        
    }
`


export {
    DropdownItem,
    StatusBadge
}