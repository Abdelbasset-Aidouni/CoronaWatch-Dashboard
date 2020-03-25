import styled from 'styled-components'


export default styled.div`
    background-image: url('${props => props.url}');
    background-repeat:no-repeat;
    background-position:center;
    background-size:${props => props.size};
    width: ${props => props.width};
    height: ${props => props.height};
`