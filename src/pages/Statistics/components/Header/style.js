import styled from 'styled-components'



export const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-right:5rem;
    margin-left:3rem;
    & #createZone{
        max-width:200px !important;
        margin:.6rem .6rem;
    }
`
export const ButtonsContainer = styled.div`
    display:flex;
    & button{
        margin:.6rem .6rem;
    }
`

export default {
    HeaderContainer,
    ButtonsContainer,
}