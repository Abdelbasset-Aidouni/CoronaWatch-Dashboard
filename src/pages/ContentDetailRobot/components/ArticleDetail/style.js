import styled from 'styled-components'



export const ArticleHeader = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
`

export const DateText = styled.span`
    font-size:.9rem;
    color:#A7A7A7;
    font-style:italic;
`

export const MediaContent = styled.div`
    width:100%;
    height:300px;
    margin-bottom:.6rem;
    & > div,& > img,& > video,& > iframe{
        width:100%;
        height:100%;
    }
`
export const TextContent = styled.p`
    font-size:.9rem;
    color:#252525;
    font-style:italic;
`