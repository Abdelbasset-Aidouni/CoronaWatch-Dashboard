import React,{useEffect, useState} from 'react'
import {
    InfoLine,
    UserDetailsContainer,
    InfoContainer,
    InfoColumn,
    UserAvatar,
    CustomHeading
} from './style'
import Heading from '../../../../components/Heading'
import Avatar from '../../../../assets/resources/avatar.jpg'
import { getUser } from '../../../../services/accounts/users'

export default ({userID,postID}) =>{
    const [user,setUser] = useState({})
    useEffect(()=>{
        const getUser_ = async () => {
            await getUser(userID).then(res => {
                if (res.status === 200){
                    console.log( "success user is :",res.data)
                    setUser(res.data)
                }else{
                    console.log( "error response is  :",res.data)
                    setUser({})
                }
            })
        }
        getUser_()
    },[userID])
    return (
    <UserDetailsContainer>
        <UserAvatar src={user.image ? user.image : Avatar} />
            <InfoLine>
                <CustomHeading size="h6">Full Name</CustomHeading>
                <CustomHeading size="h6" weight="500">{`${user.first_name} ${user.last_name}`}</CustomHeading>
            </InfoLine>
            <InfoLine>
                <CustomHeading size="h6">Email</CustomHeading>
                <CustomHeading size="h6" weight="500">{user.email}</CustomHeading>
            </InfoLine>
            <InfoLine>
                <CustomHeading size="h6">Role</CustomHeading>
                <CustomHeading size="h6" weight="500">  {user.role === 1 ? "Visitor" 
                                                        :user.role === 2 ? "Moderator"
                                                        :user.role === 3 ? "Writer"
                                                        :user.role === 4 ? "Health Agent"
                                                        : "Admin"}
                </CustomHeading>
            </InfoLine>
            <InfoLine>
                <CustomHeading size="h6">Status</CustomHeading>
                <CustomHeading size="h6" weight="500">{user.is_active  ? "Active": "Blocked"}</CustomHeading>
            </InfoLine>
            <InfoLine>
                <CustomHeading size="h6">Date Joined</CustomHeading>
                <CustomHeading size="h6" weight="500">{user.date_joined}</CustomHeading>
            </InfoLine>
    </UserDetailsContainer>
)}