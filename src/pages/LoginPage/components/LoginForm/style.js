import styled from 'styled-components'

const CenteredContent = styled.div`
    min-width:${props => props.width}%;
    flex-basis:${props => props.width}%;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
`
export default CenteredContent
export {
    CenteredContent,
}