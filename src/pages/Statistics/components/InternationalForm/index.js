import React,{useState} from 'react'
import $ from 'jquery'
import {
    FormLine,
    Wrapper,
    SubmitContainer
} from './style'
import Button from '../../../ContentPage/components/Button'
import SelectField from '../SelectField'
import NumberField from '../NumberField'
import Countries from '../../../../data/cases.json'
import {createInterNationalZone} from '../../../../services/statistics'



export default () =>{
    
    const [countries,setCountries] = useState(Countries.data.map(x => ({...x,value:x.id,display:x.name})))


    const SubmitHandler = async (event) =>{
        event.preventDefault()
        let data = $('#InterNationalZone').serializeArray()
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
                <NumberField type="number" min="0" name="sick" placeholder="Active Cases" />
            </FormLine>
            <FormLine>
                <NumberField type="number" min="0" name="infected" placeholder="Confirmed Cases" />
                <NumberField type="number" min="0" name="recovered" placeholder="Recovered Cases" />
            </FormLine>
            <FormLine>
                <NumberField type="number" min="0" name="dead" placeholder="Deaths" />
                <NumberField type="number" min="0" name="carrier" placeholder="Virus Carrier" />
            </FormLine>
            <SubmitContainer>
                <Button selected large onClick={SubmitHandler}> Create </Button>
            </SubmitContainer>
        </Wrapper>
    )
}