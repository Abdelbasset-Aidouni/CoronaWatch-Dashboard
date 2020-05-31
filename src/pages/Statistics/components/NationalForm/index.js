import React,{useState} from 'react'
// import SelectField from '../SelectField'
import {
    CenteredContent,
    Select,
    SelectFieldsContainer,
    Input,
    NumberFieldsContainer,
    Wrapper,
    FlexContainer
} from './style'
import SwitchButton from '../../../../components/SwitchButton'
import Heading from '../../../../components/Heading'


export default () => {
    const [states,setState]  = useState([{value:1,display:"Boumerdes"},{value:1,display:"Boumerdes"}])
    const [dairas,setDairas] = useState([{value:1,display:"Dellys"}])
    const [towns,setTowns] = useState([{value:1,display:"Afir"}])
    return (
        <Wrapper>
            <CenteredContent>
                <SelectFieldsContainer>
                    <Select
                    options={states}
                    name="wilaya"
                    />
                    <Select
                    options={dairas}
                    name="daira"
                    />
                    <Select
                    options={towns}
                    name="commune"
                    />
                </SelectFieldsContainer>
                
            </CenteredContent>
            <NumberFieldsContainer>
                <Input placeholder="Confirmed Cases" />
                <Input placeholder="Deaths" />
                <Input placeholder="Recovered Cases" />
                <Input placeholder="Suspected Cases" />
                
            </NumberFieldsContainer>
            <FlexContainer>
                    <Heading size="h6">Risky Area </Heading>
                    <SwitchButton name="risk" />
                </FlexContainer>
            
            
        </Wrapper>
    )
}