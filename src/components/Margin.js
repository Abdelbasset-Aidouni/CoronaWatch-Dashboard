import styled from 'styled-components'


export default styled.css`
    margin-left: ${props => props.all ? props.all : props.x ? props.x : props.left };
    margin-right: ${props => props.all ? props.all : props.x ? props.x : props.right};
    margin-top: ${props => props.all ? props.all : props.y ? props.y : props.top};
    margin-bottom: ${props => props.all ? props.all : props.y ? props.y : props.bottom};
`