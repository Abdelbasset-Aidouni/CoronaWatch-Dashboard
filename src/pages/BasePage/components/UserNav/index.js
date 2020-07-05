import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {
    NavElements,
    UserNavContainer,
    UserImage,
    NotificationBellContainer,
    NotificationIndicator,
    IconWithMargin,
    Button,
    ButtonsContainer,
    Container
} from "./style"
import Avatar from '../../../../assets/resources/avatar.jpg'
import SvgIcon from '../../../../components/SvgIcon'
import Bell from '../../../../assets/icons/bell.svg'
import Settings from '../../../../assets/icons/settings.svg'
import {switchToInterNational,switchToNational} from './../../../../store/actions'









export default ({stat}) =>  { 
    const dispatch = useDispatch()
    const currentMode =  useSelector(state => state.currentMapMode)

    const changeHandler = (mode) => {
        if (mode === "national"){
            dispatch(switchToNational())
        }else dispatch(switchToInterNational())
    }


    return (
    <UserNavContainer id="navBar" stat={stat}>
        <Container stat={stat}>
            <ButtonsContainer>
                <Button 
                left 
                selected={currentMode === "national"}
                onClick={() => changeHandler("national") } 
                >National</Button>
                <Button
                selected={currentMode === "international"} 
                onClick={() => changeHandler("international")} 
                >International</Button>
            </ButtonsContainer>
        </Container>
        <NavElements>
            <NotificationBellContainer>
                <SvgIcon
                    url={Bell}
                    size="contain"
                    width="20px"
                    height="20px"
                />
                <NotificationIndicator  active />
            </NotificationBellContainer>

            <IconWithMargin
                url={Settings}
                size="contain"
                width="20px"
                height="20px"
            />
            <UserImage
                url={Avatar}
                size="cover"
                width="60px"
                height="60px"
            />
        </NavElements>
        
    </UserNavContainer>
)
    }