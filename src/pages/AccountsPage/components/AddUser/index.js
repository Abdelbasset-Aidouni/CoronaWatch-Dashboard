import React from 'react'
import {AddUserButton} from './style'
import Plus from '../../../../assets/icons/plus.svg'
import SvgIcon from '../../../../components/SvgIcon'
import $ from 'jquery'


export default () => (
    <AddUserButton onClick={() => $('#modalWrapper,#addUserModal').fadeToggle('slow')}>
        <SvgIcon
            url={Plus}
            height="20px"
            width="20px"
        />
        Add User
    </AddUserButton>
)