import styled,{css} from 'styled-components'


export default styled.div`
    background-image: url('${props => props.url}');
    background-repeat:no-repeat;
    background-position:center;
    background-size:${props => props.size};
    width: ${props => props.width};
    height: ${props => props.height};
    ${props => props.white && css`
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(308deg) brightness(101%) contrast(103%);
    `}
`