import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import SvgIcon from '../../../../components/SvgIcon'
import Avatar from '../../../../assets/resources/avatar.jpg'
import Calendar from '../../../../assets/icons/calendar.svg'
import FileType from 'file-type'
import got from 'got'
import {getUser} from '../../../../services/accounts/users'
import {validateUserPost,rejectUserPost} from '../../../../services/content'
import {rejectCase,validateCase} from './../../../../services/reportedCases'
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
    Title,
    ArticleHeader
} from './style'
import Heading from '../../../../components/Heading'
import {contentUrl} from '../../../../global/config'
import {makeTokenizer} from '@tokenizer/http'
import { Link } from 'react-router-dom'

var mime = require('mime-types')


const TextContentAuto = styled(TextContent)`min-height:220px;height:auto; `

export default ({pk,title,file,description,user,date_posted,status}) => {
    var [userObject,setUser] = useState({})
    var [statusState,setStatus] = useState(status)
    const [fileType,setFileType] = useState("")
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
        const getFileType = async () => {
            if (file){
                const tokenizer = await makeTokenizer(file)
                const type = await FileType.fromTokenizer(tokenizer)
                setFileType(type.mime)
            }else{
                setFileType(null)
            }
            
        }
        getUser_()
        getFileType()
    },[])

    const handleValidate = async () =>{
        return await validateCase(pk)
                .then(res => {
                    if (res.ok){
                        res.text(text => console.log(text))
                        setStatus(2)
                        window.$.alert({title:"Success",content:"Reported Case has been validated Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }

    const handleReject = async () =>{
        return await rejectCase(pk)
                .then(res => {
                    if (res.ok){
                        setStatus(3)
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Reported Case has been Rejected Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const isVideo = (fileType) => fileType.search("video") > -1 
    const isImage = (fileType) => fileType.search("image") > -1
    return (
        <ArticleContainer>
            
                
                    <Title>
                        Corona Virus Reported Case 
                    </Title>
                
                
            
            
            {
                fileType ?
                isImage(fileType) || isVideo(fileType) ? 
                <>
                    <MediaContent>
                        {
                        isImage(fileType) ? 
                        <img src={file} alt={title}/> 
                        : isVideo(fileType) ? 
                        <video controls > <source src={file} /> </video> 
                        : <span></span>
                        }
                    </MediaContent>
                    <TextContent>
                        <Truncate lines={3} ellipsis={<span>...</span>}>
                            {description}
                        </Truncate>
                    </TextContent>
                </>
                :
                <TextContentAuto>
                    <Truncate lines={20} ellipsis={<span>... </span>}>
                        {description}
                    </Truncate>
                </TextContentAuto>
                :
                <TextContentAuto>
                    <Truncate lines={20} ellipsis={<span>... </span>}>
                        {description}
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
            {statusState === 1?
                <ActionsContainer>
                    <Button active onClick={handleReject} > Reject </Button>
                    <Button active onClick={handleValidate} > Validate </Button>
                </ActionsContainer>
            :
                <BadgeContainer>
                    <Badge rejected={statusState === 3} > { statusState === 3 ? "Rejected" : "Accepted"} </Badge>
                </BadgeContainer>
            }
            
        </ArticleContainer>
)}
