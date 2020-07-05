import React,{useState} from 'react'
import Button from '../../../ContentPage/components/Button'
import {HeaderContainer,ButtonsContainer} from './style'

import {switchCategory} from '../../../../store/actions'
import { Link } from 'react-router-dom'



export default ({changeZoneType}) =>{ 
    const [buttonsState,setButtonsState] = useState({
        national:true,
        international:false
    })
    const onClickHandler = (event) =>{
        changeZoneType(event.target.name)
        setButtonsState(pre => ({national:!pre.national,international:!pre.international}))
    }

    return (
    <HeaderContainer>
        <Link to="/statistics/create-zone/"> <Button large id="createZone">Create Zone <i class="fas fa-globe-africa"></i> </Button> </Link>
        
        <ButtonsContainer>
        <Button large selected={buttonsState.national} onClick={onClickHandler} name="national">National</Button>
        <Button large selected={buttonsState.international} onClick={onClickHandler} name="international" >International</Button>
        </ButtonsContainer>
    </HeaderContainer>
)}