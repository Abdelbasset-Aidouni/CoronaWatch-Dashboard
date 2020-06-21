import styled,{css} from 'styled-components'
import NumberField from '../NumberField'

export const FormLine = styled.div`
    display:flex;
    justify-content:space-between;
    
    & > div,& > input{
        flex-basis:45%;
        max-width:45%;
        margin:.4rem .8rem;
    }
`
export const Wrapper = styled.form`
    margin-top:8rem;
    margin-left:1.8rem;
    margin-right:1.8rem;
`

export const Input = styled(NumberField)`
    width:100%;
`

export const InputContainer = styled.div`
    flex-basis:45%;
    max-width:45%;
    margin:.6rem 1.2rem;
`
export const SubmitContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:.6rem 3rem;
    margin-top:2rem;
    & button{
        ${css`flex-grow:1 !important;max-width:40% !important;`}
    }
`