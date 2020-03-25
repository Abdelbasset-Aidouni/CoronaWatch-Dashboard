import styled from 'styled-components'
import {PrimaryTheme} from '../../global/Themes'
const FormContainer = styled.div`
    width : 30%;
    padding:.2em .4em;
    border:solid ${PrimaryTheme.secondary.base} 1px;
    border-radius:5px;
`
const Page = styled.div`
    position:absolute;
    top:15%;
    width:100%;
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
`

export {
    FormContainer,
    Page
}