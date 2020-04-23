import styled,{css} from 'styled-components'

export const ArticlesWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin:.8rem 1.2rem;
    height:100%;
    min-height:400px;
    ${props => props.blur && css`opacity:.4`}
    transition:all .4s; 
`
export const NextButtonContainer = styled.div`
    width:20px;
    display:flex;
    align-items:center;
`


export default ArticlesWrapper