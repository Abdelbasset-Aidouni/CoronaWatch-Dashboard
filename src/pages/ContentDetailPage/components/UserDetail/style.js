import styled from 'styled-components'
import Heading from '../../../../components/Heading'


export const UserDetailsContainer = styled.div`
    position:relative;
    border-radius:10px;
    background:white;
    margin-top:4rem;
    padding:2rem 1rem;
    
`
export const CustomHeading = styled(Heading)`
    flex-basis:50%;
    max-width:50%;
`
export const InfoContainer = styled.div`
    display: flex;

`
export const InfoColumn = styled.div`
    flex-basis:50%;
    max-width:50%;
`
export const UserAvatar = styled.div`
    position:absolute;
    top:-40px;
    left:0;
    right:0;
    margin-left: auto;
    margin-right: auto;
    background-image:url(${props => props.src});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    border-radius:50%;
    width:60px;
    height:60px;
`

export const InfoLine = styled.div`
    display:flex;
    justify-content:space-between;
    width:80%;
`
