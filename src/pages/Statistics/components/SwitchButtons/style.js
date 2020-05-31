import styled,{css} from 'styled-components'

export const Button = styled.button`
    border:none;
    outline:none;
    background-color: ${props => props.selected ? "#121B54" : "white"};
    padding: .8rem 1.2rem;
    width:50%;
    font-weight:700;
    font-size:1.2rem;
    color:${props => props.selected ? "white" : "#121B54" };
    &:focus{
        outline:none;
    }
    ${props => props.left ? css` border-radius:15px 0 0 15px;box-shadow: 2px 0px 10px -3px rgba(0,0,0,0.75); z-index:10;` : css` border-radius:0px 15px 15px 0px;box-shadow: 10px 10px 20px -20px rgba(0,0,0,0.75);z-index:9 `  }
`
export const Container = styled.div`
    display:flex;
    justify-content:center;
`

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:center;
    width:40%;
    
    
`