import React from 'react'
import {ModalContainer,ModalWrapper} from './style'
import Heading from '../../../../components/Heading'
import TextField from '../../../../components/TextField'

export default () =>(
    <>
        <ModalWrapper/>
        <ModalContainer>
            <Heading
            size="h3"
            >Add User</Heading>
            <hr/>
            <form>
                <TextField 
                placeholder="username"
                />
                <TextField 
                placeholder="email"
                />
                <TextField 
                placeholder="password"
                />
            </form>
        </ModalContainer>
    </>
    
)


