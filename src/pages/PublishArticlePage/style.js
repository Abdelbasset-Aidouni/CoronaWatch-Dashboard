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

export const ProgressBarContainer = styled.div`
    position: absolute;
    z-index:1100;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    display: ${props => props.active ? "flex" : "none"};
    background-color:white;
    width:500px;
    height:200px;
    padding:1.6rem 2rem;
    border-radius:5px;
    border:none;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    & p{
        margin-bottom:3rem;
    }
`
