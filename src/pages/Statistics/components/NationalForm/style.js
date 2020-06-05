import styled,{css} from 'styled-components'
import SelectField from '../SelectField'
import NumberField from '../NumberField'



export const Wrapper = styled.form`
    margin-top:3rem;
`
export const FlexContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin:.6rem 3rem;
`
export const SubmitContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:.6rem 3rem;
    & button{
        ${css`flex-grow:1 !important;max-width:40% !important;`}
    }
`

export const Input = styled(NumberField)`
    flex-basis:45%;
    max-width:45%;
    margin:.6rem 1.2rem;
`

export const Select = styled(SelectField)`
    background-color:white !important;
    width:80% !important;
`
export const SelectFieldsContainer = styled.div`
    display:flex;
    justify-content:center;
    width:80%;
    margin-top:2rem;
`
export const CenteredContent = styled.div`
    display:flex;
    justify-content:center;
    
`
export const NumberFieldsContainer = styled.div`

    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    margin:.6rem 1.2rem;
`