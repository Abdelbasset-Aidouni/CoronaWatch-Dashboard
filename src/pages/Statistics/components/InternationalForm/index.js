import React,{useState} from 'react'
import {
    FormLine,
    Wrapper,
    SubmitContainer
} from './style'
import Button from '../../../ContentPage/components/Button'
import SelectField from '../SelectField'
import NumberField from '../NumberField'


export default () =>{
    
    const [countries,setCountries] = useState([
        {value:1,display:"Algeria"},
        {value:1,display:"France"},
        {value:1,display:"USA"}
    ])


    const SubmitHandler = async (event) =>{
        event.preventDefault()
        // let data = $('#NationalZone').serializeArray()
        // let formData = {};
        // data.forEach(function (value,index){

        //     formData[value.name] = value.value
        //     if (value.name === "commune") {
        //         let commune = communes.filter(x => x.pk === parseInt(value.value))[0]
        //         formData["x"] = commune.latitude
        //         formData["y"] = commune.longitude
        //         formData["name"] = commune.nom
        //     }
        // })
        // console.log("formdata : ", formData)
        // await createNationalZone(formData)
        //     .then(res => {
        //         if (res.status === 200){
        //             window.$.alert({title:"Success",content:'Zone Created Successfully'})
                    
        //         }else{
        //             window.$.alert({title:"Failed",content:'Sorry an Error Occured, Try Later'})
        //             res.text().then(text => console.log(text))
        //         }
        //     } )
            
    }
  
    return (
        <Wrapper>
            <FormLine>
               <SelectField
               name="country"
               options={countries}
                />
                <NumberField name="suspected_cases" placeholder="Suspected Cases" />
            </FormLine>
            <FormLine>
                <NumberField name="confirmed_cases" placeholder="Confirmed Cases" />
                <NumberField name="recovered_cases" placeholder="Recovered Cases" />
            </FormLine>
            <FormLine>
                <NumberField name="deaths" placeholder="Deaths" />
                <NumberField name="virus_carriers" placeholder="Virus Carrier" />
            </FormLine>
            <SubmitContainer>
                <Button selected large onClick={SubmitHandler}> Create </Button>
            </SubmitContainer>
        </Wrapper>
    )
}