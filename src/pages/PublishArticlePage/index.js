import React from 'react'

import BasePage from '../BasePage'
import Editor from './components/Editor'
import {Wrapper,Input,TitleInputContainer,SubmitButtonContainer} from './style'
import Heading from '../../components/Heading'
import Button from '../ContentPage/components/Button'








const PublishPage = () => {
    return (
        <Wrapper>
            <TitleInputContainer>
                <Heading size="h4" >Title : </Heading>
                <Input type="text" placeholder="10 Advices to keep yourself ..." /> 
            </TitleInputContainer>
            
            <Editor />
            <SubmitButtonContainer>
                <Button active large >Submit</Button>
            </SubmitButtonContainer>
            
        </Wrapper>
        
    )
}











export default () => <BasePage> <PublishPage/> </BasePage>