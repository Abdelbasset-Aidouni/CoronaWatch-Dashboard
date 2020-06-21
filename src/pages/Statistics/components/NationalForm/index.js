import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import SelectField from '../SelectField'
import $ from 'jquery'
import validate from 'jquery-validation'
import {
    CenteredContent,
    Select,
    SelectFieldsContainer,
    Input,
    NumberFieldsContainer,
    Wrapper,
    FlexContainer,
    SubmitContainer,
    StyledSelect,
    SelectContainer,
    InputContainer
} from './style'
import SwitchButton from '../../../../components/SwitchButton'
import Heading from '../../../../components/Heading'
import Button from '../../../ContentPage/components/Button'
import {fetchCommunes,fetchWilayas,createNationalZone} from '../../../../services/statistics'
import {fetchCommunes as fetchCommunesAction ,fetchWilayas as fetchWilayasAction } from '../../../../store/actions'
import {setUpSelectField , ReInitializeSelect} from '../../../../components/CustomSelect'

$.validate = validate



export default () => {
    const wilayas =  useSelector(state => state.wilayas)
    const communes =  useSelector(state => state.communes)
    const [selectedWilaya,setSelectedWilaya] = useState(1)


    window.communes = communes
    
    
    $("#NationalZone").validate({
        submitHandler: function(form) {
            SubmitHandler(form)
          }
    })

    const ChangeWilayaHandler = (event) =>{
        const value = event.target.value
        const wilayaID = parseInt(value)
        console.log("selected wilaya : " , wilayaID)
        setSelectedWilaya(wilayaID)
    } 

    const SubmitHandler = async (form) =>{
        let data = $(form).serializeArray()
        let formData = {};
        
        data.forEach(function (value,index){

            formData[value.name] = value.value
            if (value.name === "commune") {
                let f = window.communes.filter(x => x.pk === parseInt(value.value))
                let commune = f[0]
                console.log({value:value.value,commune,f,communes:window.communes,selectedWilaya})
                formData["x"] = commune.latitude
                formData["y"] = commune.longitude
                formData["name"] = commune.nom
                
            }
        })
        formData["status"] = "a"
        console.log("formdata : ", formData)
        await createNationalZone(formData)
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
        <Wrapper id="NationalZone">
            <CenteredContent>
                <SelectFieldsContainer>
                    {/* <Select
                    options={
                        wilayas.length !== 0 ?
                        wilayas.map(wilaya => ({...wilaya,value:wilaya.pk,display:wilaya.nom}))
                        :
                        [{value:1,display:""},]
                    }
                    
                    onChangeHandler={filterCommuneByWilaya}
                    /> */}
                    
                    {/* <Select
                    options={
                        communes.length ?
                        communes.map(commune => ({...commune,value:commune.pk,display:commune.nom}))
                        :
                        [{value:1,display:""},]
                    }

                    name="commune"
                    // selected={selectedWilaya}
                    /> */}

                    <SelectContainer>
                        <StyledSelect 
                        onChange={ChangeWilayaHandler}
                        class="form-control">
                        {   wilayas.length !== 0 ?
                            wilayas.map(wilaya => <option value={wilaya.pk} > {wilaya.nom} </option>)
                            :
                            <option></option>  }
                        </StyledSelect>
                        <sub class="text-muted ml-2" >select wilaya</sub>
                    </SelectContainer>
                    

                    <SelectContainer>
                        <StyledSelect class="form-control" name="commune">
                        {   communes.length ?
                            communes.filter(item => item.wilaya === selectedWilaya).map(commune => <option value={commune.pk}>{commune.nom}</option> )
                            :
                            <option></option>  }
                        </StyledSelect>
                        <sub class="text-muted ml-2" >Select commune as Zone </sub>
                    </SelectContainer>
                    
                </SelectFieldsContainer>
                
            </CenteredContent>
            <NumberFieldsContainer>
                <InputContainer>
                    <Input type="number" min="0"  name="infected" placeholder="Confirmed Cases" required />
                </InputContainer>
                <InputContainer>
                    <Input type="number" min="0"  name="dead" placeholder="Deaths" required/>
                </InputContainer>
                <InputContainer>
                    <Input type="number" min="0"  name="recovered" placeholder="Recovered Cases" required />
                </InputContainer>
                <InputContainer>
                    <Input type="number" min="0"  name="sick" placeholder="Active Cases" required />
                </InputContainer>
                
                
            </NumberFieldsContainer>
            <FlexContainer>
                <Heading size="h6">Risky Area </Heading>
                <SwitchButton name="risk"  required />
            </FlexContainer>
            <SubmitContainer>
                <Button selected large> Create </Button>
            </SubmitContainer>
            
        </Wrapper>
    )
}