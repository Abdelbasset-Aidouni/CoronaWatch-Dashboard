import React from 'react'
import {UserNavContainer,UserImage,NotificationBellContainer,NotificationIndicator,IconWithMargin} from "./style"
import Avatar from '../../../../assets/resources/avatar.jpg'
import SvgIcon from '../../../../components/SvgIcon'
import Bell from '../../../../assets/icons/bell.svg'
import Settings from '../../../../assets/icons/settings.svg'

export default () => (
    <UserNavContainer id="navBar">
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
    </UserNavContainer>
)
