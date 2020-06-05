import React from 'react'
import {
    Button,
    ButtonsContainer,
    Container
} from './style'


export default ({setCurrentForm,currentForm}) => {
    return (
        <>
        <Container>
            <ButtonsContainer>
                <Button 
                left 
                selected={currentForm === "national"} 
                onClick={() => setCurrentForm("national") }
                >National</Button>
                <Button
                onClick={() => setCurrentForm("international") }
                selected={currentForm === "international"} 
                >International</Button>
            </ButtonsContainer>
        </Container>
        </>
    )
}