import styled from 'styled-components'

import { PrimaryTheme } from '../../global/Themes'


export const Wrapper = styled.form`
    margin:1rem 2rem; 
    width:80%;
`



export const TitleInputContainer = styled.div`
    width:100%;
    margin:1.6rem 0;
`

export const SubmitButtonContainer = styled.div`
    margin:1rem 0;
    display:flex;
    justify-content:flex-end;
    &  button{
        flex-grow:1 !important;
        max-width:30% !important;
    }
`

export const Input = styled.input`
    border:none;
    border-radius:15px;
    padding:1rem .8rem;
    font-weight:500;
    color:${PrimaryTheme.secondary.base};
    background-color:white;
    width:100%;
    &:focus{
        outline:none;
    }
`