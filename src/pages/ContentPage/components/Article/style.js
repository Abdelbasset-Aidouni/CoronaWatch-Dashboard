import styled from 'styled-components'
import { PrimaryTheme} from '../../../../global/Themes'


export const Title = styled.h3`
    color:${PrimaryTheme.secondary.base};
    font-size:1rem;
    font-weight:500;
    padding:.6rem 0rem;
    margin-left:.8rem;
    margin-right:.8rem;
`

export const ArticleContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    border:none;
    max-width:250px;
    flex-basis:250px;
    border-radius:15px;
    padding:.8rem 0rem;
    margin:.6rem 1.2rem;
`
export const MediaContent = styled.div`
    width:100%;
    height:160px;
    & > div,& > img,& > video{
        width:100%;
        height:100%;
    }
`
export const TextContent = styled.div`
    width:90%;
    height:60px;
    font-size:.725rem;
    color: #444;
    margin-top:.6rem;
    margin-left:.8rem;
    
`
export const Divider = styled.hr`
    color:#707070;
    width:75%;
    text-align:center;
    margin-top:.3rem;
    margin-bottom:.3rem;
`

export const UserInfo = styled.div`
    display:flex;
    align-items:center; 
    width:100%;
    padding:.3rem .8rem;
`
export const Username = styled.h3`
    font-size:.775rem;
    color:${PrimaryTheme.secondary.base};
    margin-left:.6rem;
    margin-bottom:0;
`

export const DateContainer = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    padding:.3rem 1rem;
`
export const TimeStamp = styled.p`
    font-size:.775rem;
    color:${PrimaryTheme.secondary.base};
    margin-left:.8rem;
    margin-bottom:0;
`
export const ActionsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    margin:.3rem .8rem;
    & button{
        margin-left:.4rem
    }
`