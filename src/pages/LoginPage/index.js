import React from 'react'
import LoginForm from './components/LoginForm'
import {FormContainer,Page} from './style'
import SvgIcon from '../../components/SvgIcon'
import {CenteredContent} from './components/LoginForm/style'
import Logo from '../../assets/resources/Logo-symbole.svg'
import Heading from '../../components/Heading'
export default () => (
  <Page>
      <FormContainer>
        <CenteredContent>
        <SvgIcon
            url={Logo}
            size="contain"
            width="60px"
            height="120px"
        />
        <Heading
            size="h4"
            weight="500"
        >
            Corona Watch <br/> Administration
        </Heading>
        </CenteredContent>
        <LoginForm />
      </FormContainer>
  </Page>
)