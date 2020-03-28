import styled from 'styled-components'
import {PrimaryTheme} from '../../../../global/Themes'

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

export {
    AddUserButton
}
