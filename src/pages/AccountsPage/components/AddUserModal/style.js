import styled from "styled-components"
import { PrimaryTheme } from "../../../../global/Themes"


export const ModalWrapper = styled.div`
    position:absolute;
    height:100vh;
    width:100%;
    background-color:black;
    opacity:.3;
`

export const ModalContainer = styled.div`
    position:absolute;
    background-color:white;
    border-radius:5px;
    top:10%;
    width:70%;
    margin-left:15% !important;
    margin-right:15% !important;
    z-index:1000;
    padding:.6rem .8rem;
`
export const FormContainer = styled.form`
    display: flex;
    justify-content:space-between;
    padding:1rem 1rem;
`

export const Col = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:45%;
    max-width:45%;
`
export const Label = styled.label`
    color:${PrimaryTheme.secondary.base};
    font-weight:500;
    font-size:1rem;
    margin-left:1.4rem;
    margin-bottom:0.1rem;
`
export const TextField = styled.input`
    display:${props => props.inline ? "inline" : "block"};
    background-color:#F7F7F7;
    border:none;
    color: #49514A;
    border-radius:15px;
    padding:.8rem 1.2rem;
    margin: .4rem .6rem;
    width:${props => props.width};
    font-size:${props => props.fontSize};
    outline:none;
`



export const SelectField = styled.select`
    padding:.2rem;
    border-radius:15px;
`

export const DateInputContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-basis:75%;
    max-width:75%;
`

export const BirthDateField = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

