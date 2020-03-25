import React from 'react'
import TextField from '../../../../components/TextField'
import Button from '../../../../components/Button'
import Container from '../../../../components/Container'
import CenteredContent from './style'
import styled from 'styled-components'
const CenteredContentWithMargin = styled(CenteredContent)`
    margin-bottom:1.2rem;
`
export default () =>(
    
    <Container>
        
        <CenteredContentWithMargin 
        width="100"
        >
            <TextField
                type={'text'}
                name={"username"}
                placeholder={"Username"}
                fontSize="1.125rem"
                width="100%"
            />
            <TextField
                type={'password'}
                name={"password"}
                placeholder={"Password"}
                fontSize="1.125rem"
                width="100%"
            />
        </CenteredContentWithMargin>

    
    <CenteredContent width="100">
        <Button
            text="Login"
            color="secondary"
            size="sm"
            width='50%'
        />
    </CenteredContent>
        
    </Container>
)
