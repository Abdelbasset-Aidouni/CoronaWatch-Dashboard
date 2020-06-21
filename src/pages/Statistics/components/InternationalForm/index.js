import React,{useState} from 'react'
import $ from 'jquery'
import validate from 'jquery-validation'
import {
    FormLine,
    Wrapper,
    SubmitContainer,
    InputContainer,
    Input
} from './style'
import Button from '../../../ContentPage/components/Button'
import SelectField from '../SelectField'
import NumberField from '../NumberField'
import Countries from '../../../../data/cases.json'
import {createInterNationalZone} from '../../../../services/statistics'


$.validate = validate


export default () =>{
    
    const [countries,setCountries] = useState(Countries.data.map(x => ({...x,value:x.id,display:x.name})))


    $("#InterNationalZone").validate({
        submitHandler: function(form) {
            SubmitHandler(form)
          }
    })

    const SubmitHandler = async (form) =>{
        let data = $(form).serializeArray()
        let formData = {};
        data.forEach(function (value,index){

            formData[value.name] = value.value
            if (value.name === "country") {
                let country = countries.filter(x => x.id === value.value)[0]
                formData["x"] = country.latitude
                formData["y"] = country.longitude
                formData["name"] = country.name
            }
        })
        formData["status"] = "a"
        console.log("formdata : ", formData)
        await createInterNationalZone(formData)
            .then(res => {
                if (res.status === 201){
                    window.$.alert({title:"Success",content:'Zone Created Successfully'})
                    
                }else{
                    window.$.alert({title:"Failed",content:'Sorry an Error Occured, Try Later'})
                    res.text().then(text => console.log(text))
                }
            } )
            
    }
  
    return (
        <Wrapper id="InterNationalZone">
            <FormLine>
               <SelectField
               name="country"
               options={countries}
                />
                <NumberField type="number" min="0" name="sick" placeholder="Active Cases" required />
            </FormLine>
            <FormLine>
                <InputContainer>
                    <Input type="number" min="0" name="infected" placeholder="Confirmed Cases" required />
                </InputContainer>
                <InputContainer>
                    <Input type="number" min="0" name="recovered" placeholder="Recovered Cases" required />
                </InputContainer>
                
            </FormLine>
            <FormLine>
                <NumberField type="number" min="0" name="dead" placeholder="Deaths" required />
                <NumberField type="number" min="0" name="carrier" placeholder="Virus Carrier" required />
            </FormLine>
            <SubmitContainer>
                <Button selected large> Create </Button>
            </SubmitContainer>
        </Wrapper>
    )
}