import styled from 'styled-components'



export const HeaderContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-right:5rem;
`
export const ButtonsContainer = styled.div`
    display:flex;
    & button{
        margin:.6rem .6rem
    }
`

export default {
    HeaderContainer,
    ButtonsContainer,
}