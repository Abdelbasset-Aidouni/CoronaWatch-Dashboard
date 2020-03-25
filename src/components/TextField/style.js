import styled from 'styled-components'

export default styled.input`
    background-color:#F7F7F7;
    border:none;
    color: #49514A;
    border-radius:5px;
    padding:.8rem 1.2rem;
    margin: .4rem .6rem;
    width:${props => props.width};
    font-size:${props => props.fontSize};
    outline:none;
`

