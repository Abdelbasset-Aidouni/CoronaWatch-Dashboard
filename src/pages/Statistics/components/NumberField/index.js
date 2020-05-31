import styled from 'styled-components'
import { PrimaryTheme } from '../../../../global/Themes'


export default styled.input`
    border:none;
    border-radius:15px;
    padding:1rem .8rem;
    font-weight:500;
    color:${PrimaryTheme.secondary.base};
    &:focus{
        outline:none;
    }
`