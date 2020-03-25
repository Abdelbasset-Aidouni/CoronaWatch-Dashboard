import styled from 'styled-components'
import {Headings,PrimaryTheme} from '../global/Themes'

export default styled.p`
    font-size: ${props => Headings[props.size]};
    font-weight: ${props => props.weight};
    color:${props =>props.inherit ? "inherit" : props.color ? PrimaryTheme[props.color].base : PrimaryTheme["secondary"].base};
`