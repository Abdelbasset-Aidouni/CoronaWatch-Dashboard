import styled from 'styled-components'
import {PrimaryTheme,FontSizes,Width} from "../../global/Themes"
export default styled.button`
    width:${props => props.width};
    background-color: ${props => props.color ? PrimaryTheme[props.color]["base"] : PrimaryTheme['primary']["base"]};
    padding:.5rem 0.8rem;
    color: ${props => PrimaryTheme[props.color].text};
    font-size:${props => props.size ? FontSizes[props.size] : FontSizes.md };
    
    border:none;
    border-radius:5px;
    transition:all .4s;
    cursor:pointer;
    outline:none;

    &:hover{
        background-color:${props => props.color ? PrimaryTheme[props.color]["light"] : PrimaryTheme['primary']["light"]};
    }
`

