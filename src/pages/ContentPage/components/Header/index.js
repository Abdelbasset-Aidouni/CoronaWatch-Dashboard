import React from 'react'
import Button from '../Button'
import {HeaderContainer,ButtonsContainer} from './style'

import {switchCategory} from '../../../../store/actions'

import {useSelector,useDispatch} from 'react-redux'


export default () =>{ 
    const dispatch = useDispatch()
    const content =  useSelector(state => state.content)
    const onClickHandler = (element,e)=>{
        dispatch(switchCategory(element.title))
    }
    return (
    <HeaderContainer>
        <ButtonsContainer>
        {content.map(btn => 
            <Button 
            large 
            selected={btn.selected}
            onClick={() => onClickHandler(btn)}
            >{btn.title}</Button>)
        }
        </ButtonsContainer>
    </HeaderContainer>
)}