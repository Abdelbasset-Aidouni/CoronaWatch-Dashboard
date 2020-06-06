import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import SelectField from '../SelectField'
import $ from 'jquery'
import {
    CenteredContent,
    Select,
    SelectFieldsContainer,
    Input,
    NumberFieldsContainer,
    Wrapper,
    FlexContainer,
    SubmitContainer
} from './style'
import SwitchButton from '../../../../components/SwitchButton'
import Heading from '../../../../components/Heading'
import Button from '../../../ContentPage/components/Button'
import {fetchCommunes,fetchWilayas,createNationalZone} from '../../../../services/statistics'
import {fetchCommunes as fetchCommunesAction ,fetchWilayas as fetchWilayasAction } from '../../../../store/actions'
import {setUpSelectField , ReInitializeSelect} from '../../../../components/CustomSelect'




export default () => {
    const wilayas =  useSelector(state => state.wilayas)
    const communes =  useSelector(state => state.communes)
    const [selectedWilaya,setSelectedWilaya] = useState(1)
    
    const filterCommuneByWilaya = (event) =>{
        const value = event.target.value
        const wilayaID = parseInt(value)
        console.log("selected wilaya : " , wilayaID)
        setSelectedWilaya(wilayaID)
    } 

    const SubmitHandler = async (event) =>{
        event.preventDefault()
        let data = $('#NationalZone').serializeArray()
        let formData = {};
        data.forEach(function (value,index){

            formData[value.name] = value.value
            if (value.name === "commune") {
                let commune = communes.filter(x => x.pk === parseInt(value.value))[0]
                formData["x"] = commune.latitude
                formData["y"] = commune.longitude
                formData["name"] = commune.nom
            }
        })
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
                    <Select
                    options={
                        wilayas.length !== 0 ?
                        wilayas.map(wilaya => ({...wilaya,value:wilaya.pk,display:wilaya.nom}))
                        :
                        [{value:1,display:""},]
                    }
                    
                    onChangeHandler={filterCommuneByWilaya}
                    />
                    
                    <Select
                    options={
                        communes.length ?
                        communes.map(commune => ({...commune,value:commune.pk,display:commune.nom}))
                        :
                        [{value:1,display:""},]
                    }

                    name="commune"
                    // selected={selectedWilaya}
                    />
                </SelectFieldsContainer>
                
            </CenteredContent>
            <NumberFieldsContainer>
                <Input type="number" min="0" name="infected" placeholder="Confirmed Cases" />
                <Input type="number" min="0" name="dead" placeholder="Deaths" />
                <Input type="number" min="0" name="recovered" placeholder="Recovered Cases" />
                <Input type="number" min="0" name="sick" placeholder="Suspected Cases" />
                
            </NumberFieldsContainer>
            <FlexContainer>
                <Heading size="h6">Risky Area </Heading>
                <SwitchButton name="risk" />
            </FlexContainer>
            <SubmitContainer>
                <Button selected large onClick={SubmitHandler}> Create </Button>
            </SubmitContainer>
            
        </Wrapper>
    )
}