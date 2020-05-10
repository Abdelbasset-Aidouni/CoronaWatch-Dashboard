import React,{useState} from 'react'
import {StatusBadge,DropdownItem} from './style'
import {Tr,Td,TableStyle,Th} from '../Table'
import Dots from '../../../../assets/icons/dots.svg'
import SvgIcon from '../../../../components/SvgIcon'
import {deleteUser,blockUser,unblockUser,unblock} from '../../../../services/accounts/users'


export default ({user,deleteUserHandler}) => {
    const [dropdownOpen, setOpen] = useState(false);
    const [isActive, setIsActive] = useState(user.is_active);

    const toggle = () =>{ 
        setOpen(!dropdownOpen);
        console.log("dropdown")
    }
    const handleDelete =  (pk) =>{
        window.$.confirm({
            title: 'Are You Sure !',
            content: `By confriming this, user "${user.email}" will be deleted permanantly `,
            buttons: {
                confirm: async function () {
                    await deleteUser(pk)
                    .then(response => {
                        if (response.status === 204){
                            deleteUserHandler(user.pk)
                            window.$.alert('User deleted Successfully')
                        }else{
                            window.$.alert('Sorry an Error Occured, Try Later')
                        }
                    })
                },
                cancel: {
                    text: 'Cancel',
                    btnClass: 'btn-green',
                    keys: ['enter'],
                    
                }
            }
        });    
    }

    const handleBlock = async ()  =>{
        await blockUser(user.pk)
            .then(response =>{
                response.text().then(text => console.log("response",text))
                if (response.ok){
                    setIsActive(pre => !pre)
                    window.$.alert({title:"Success",content:'User Blocked Successfully'})
                }else{
                    console.log("response", response.data,response)
                    window.$.alert({title:"Error",content:'Sorry an Error Occured, Try Later'})
                }
            })
    }
            
    const handleUnblock = async () => 
        await unblockUser(user.pk)
            
            .then(response =>{
                response.text().then(text => console.log("response",text))
                if (response.ok){
                    setIsActive(pre => !pre)
                    window.$.alert({title:"Success",content:'User unBlocked Successfully'})
                }else{
                    window.$.alert({title:"Error",content:'Sorry an Error Occured, Try Later'})
                }
            })
    
    return (
    <Tr>
        <Td>{user.email}</Td>
        <Td>{user.role === 1 ? "Visitor" 
            :user.role === 2 ? "Moderator"
            :user.role === 3 ? "Writer"
            :user.role === 4 ? "Health Agent"
            : "Admin"}</Td>
        <Td>{user.date_joined}</Td>
        <Td>{user.last_login ? user.last_login : "not yet"}</Td>
        <Td>
            <StatusBadge 
            type={isActive  ? "success": "danger" }
            >
            {isActive  ? "Active": "Blocked"}   
            </StatusBadge>
        </Td>
        <Td>
           
            
                <div>
                <div className="dropdown show">
               
                <SvgIcon
                    url={Dots}
                    width="6px"
                    height="14px"
                    size="contain"
                    onClick={toggle}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    pointer
                ></SvgIcon>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <DropdownItem className="dropdown-item"
                    onClick={() => handleDelete(user.pk)}
                    >Delete</DropdownItem>
                    <DropdownItem className="dropdown-item"
                    onClick={user.is_active ?  handleBlock : handleUnblock} >{isActive ? "Block" : "unBlock"}</DropdownItem>
                </div>
                </div>
                </div>
            
        </Td>
    </Tr>
)}