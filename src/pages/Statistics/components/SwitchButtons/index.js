import React from 'react'
import {
    Button,
    ButtonsContainer,
    Container
} from './style'


export default () => {
    return (
        <>
        <Container>
            <ButtonsContainer>
                <Button left selected >National</Button>
                <Button>International</Button>
            </ButtonsContainer>
        </Container>
        </>
    )
}