import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import SvgIcon from '../../../../components/SvgIcon'
import Avatar from '../../../../assets/resources/avatar.jpg'
import Calendar from '../../../../assets/icons/calendar.svg'
import { Player } from 'video-react';
import {getUser} from '../../../../services/accounts/users'
import {validateUserPost,rejectUserPost} from '../../../../services/content'
import Button from '../Button'
import {
    ArticleContainer,
    MediaContent,
    TextContent,
    Divider,
    UserInfo,
    Username,
    DateContainer,
    TimeStamp,
    ActionsContainer,
    Badge,
    BadgeContainer,
    Title
} from './style'
import Heading from '../../../../components/Heading'


var mime = require('mime-types')

const isImage = (path) => mime.lookup(path) && mime.lookup(path).search("image") > -1
const isVideo = (path) => mime.lookup(path) && mime.lookup(path).search("video") > -1

const TextContentAuto = styled(TextContent)`min-height:220px;height:auto; `

export default ({pk,title,file,content,user,date_posted,status}) => {
    var [userObject,setUser] = useState({})
    var [statusState,setStatus] = useState(status)
    useEffect(()=>{
        const getUser_ = async () => {
            await getUser(user).then(res => {
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
    },[])

    const handleValidate = async () =>{
        return await validateUserPost(pk)
                .then(res => {
                    if (res.ok){
                        res.text(text => console.log(text))
                        setStatus("accepted")
                        window.$.alert({title:"Success",content:"Post has been validated Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }

    const handleReject = async () =>{
        return await rejectUserPost(pk)
                .then(res => {
                    if (res.ok){
                        setStatus("rejected")
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Post has been Rejected Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    return (
        <ArticleContainer>
            <Title>
                <Truncate lines={1} ellipsis={<span>...</span>}>
                            {title} {console.log("user",content,pk)}
                </Truncate>
            </Title>
            {
                isImage(file) || isVideo(file) ? 
                <>
                    <MediaContent>
                        {
                        isImage(file) ? 
                        <img src={file} alt={title}/> 
                        : isVideo(file) ? 
                        <video controls > <source src={file} /> </video> 
                        : <span></span>
                        }
                    </MediaContent>
                    <TextContent>
                        <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>more</a></span>}>
                            {content}
                        </Truncate>
                    </TextContent>
                </>
                :
                <TextContentAuto>
                    <Truncate lines={20} ellipsis={<span>... <a href='/link/to/article'>more</a></span>}>
                        {content}
                    </Truncate>
                </TextContentAuto>
            }
            
            
            <Divider/>
            <UserInfo>
                <SvgIcon
                url={Avatar}
                size="cover"
                width="25px"
                height="25px"
                rounded
                />
                <Username>{userObject ? `${userObject.first_name} ${userObject.last_name}` : "" }</Username>
            </UserInfo>
            <DateContainer>
                <SvgIcon
                    url={Calendar}
                    size="contain"
                    width="20px"
                    height="20px"
                />
                <TimeStamp>{date_posted}</TimeStamp>
            </DateContainer>
            {statusState === "pending"?
                <ActionsContainer>
                    <Button active onClick={handleReject} > Reject </Button>
                    <Button active onClick={handleValidate} > Validate </Button>
                </ActionsContainer>
            :
                <BadgeContainer>
                    <Badge rejected={statusState === "rejected"} > {statusState[0].toUpperCase() +  statusState.slice(1)} </Badge>
                </BadgeContainer>
            }
            
        </ArticleContainer>
)}
