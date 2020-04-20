import React from 'react'
import {StatusBadge} from './style'
import {Tr,Td,TableStyle,Th} from '../Table'
import Dots from '../../../../assets/icons/dots.svg'
import SvgIcon from '../../../../components/SvgIcon'


export default ({user}) => (
    <Tr>
        <Td>{user.email}</Td>
        <Td>{user.first_name}</Td>
        <Td>{user.last_name}</Td>
        <Td>{user.role === 1 ? "Visitor" 
            :user.role === 2 ? "Moderator"
            :user.role === 3 ? "Writer"
            :user.role === 4 ? "Health Agent"
            : "Admin"}</Td>
        <Td>{user.birth_date}</Td>
        {/* <Td>{user.last_login}</Td> */}
        {/* <Td>
            <StatusBadge 
            type={user.status === "reported" ? "warning": user.status === "blocked" ? "danger" : "success"}
            >
            {user.status.toUpperCase()}   
            </StatusBadge>
        </Td> */}
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