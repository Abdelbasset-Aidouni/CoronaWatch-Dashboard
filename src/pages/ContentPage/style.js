import styled,{css} from 'styled-components'

export const ArticlesWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin:.8rem 1.2rem;
    height:100%;
    
    
    ${props => props.blur && css`opacity:.4;`}
    transition:all .2s; 
`
export const NextButtonContainer = styled.div`
    width:20px;
    display:flex;
    align-items:center;
`

export const TableContainer = styled.div`
    background-color:white;
    border-radius: 5px;
    max-height:420px;
    overflow-y:scroll;
    overflow-x:hidden;
    width:100%;
    border:none;
    padding:.8rem 1.2rem;
    &::-webkit-scrollbar {
        width: .3em;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }
    
`

