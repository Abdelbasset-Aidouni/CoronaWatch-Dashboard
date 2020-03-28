import React from 'react'
import {StatusBadge} from './style'
import {Tr,Td,TableStyle,Th} from '../Table'
import Dots from '../../../../assets/icons/dots.svg'
import SvgIcon from '../../../../components/SvgIcon'


export default ({user}) => (
    <Tr>
        <Td>{user.username}</Td>
        <Td>{user.role}</Td>
        <Td>{user.date_joined}</Td>
        <Td>{user.last_login}</Td>
        <Td>
            <StatusBadge 
            type={user.status === "reported" ? "warning": user.status === "blocked" ? "danger" : "success"}
            >
            {user.status.toUpperCase()}   
            </StatusBadge>
        </Td>
        <Td>
            <SvgIcon
                url={Dots}
                width="6px"
                height="14px"
                size="contain"
            />
        </Td>
    </Tr>
)