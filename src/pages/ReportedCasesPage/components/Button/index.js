import styled,{css} from 'styled-components'



export default styled.button`
    background-color:${props => props.active | props.selected ? "#13C7E9B9" : "white"};
    color:${props => props.active | props.selected ? "white" : "#13C7E9"};
    font-size: ${props => props.large ? "1.125rem" : ".875rem"};
    font-weight:500;
    padding: ${props => props.large ? ".4rem 1.8rem" : ".3rem 1rem"} ;
    border:none;
    ${props => props.large && css`flex-grow:3;`}
    
    border-radius:50px;
    box-shadow:${props => props.selected ? "0px 14px 15px 0px rgba(0,0,0,0.18)" :"0px 14px 10px -7px rgba(0,0,0,0.18);" };
    outline:none;
    transition:all .4s ;
    &:focus{
        outline:none;
    }
    &:hover{
        box-shadow:0px 14px 18px 0px rgba(0,0,0,0.1);
        background-color:${props => props.active | props.selected ? "#13C7E9" : "F1F1F1"} ;
    }
`