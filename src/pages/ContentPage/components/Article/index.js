import React from 'react'
import styled from 'styled-components'
import testVideo from '../../../../assets/resources/The Art of Web API Design.mp4'
import Truncate from 'react-truncate'
import SvgIcon from '../../../../components/SvgIcon'
import Avatar from '../../../../assets/resources/avatar.jpg'
import Calendar from '../../../../assets/icons/calendar.svg'
import { Player } from 'video-react';
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
    Title
} from './style'
import Heading from '../../../../components/Heading'

const TextContentAuto = styled(TextContent)`min-height:220px;height:auto; `

export default ({title,video,image,text,userImage,user,date}) => (
        <ArticleContainer>
            <Title>
                <Truncate lines={1} ellipsis={<span>...</span>}>
                            {title}
                </Truncate>
            </Title>
            {
                image || video ? 
                <>
                    <MediaContent>
                        {
                        image ? 
                        <img src={image} alt={title}/> 
                        : video ? 
                        <video controls > <source src={video} /> </video> 
                        : <span></span>
                        }
                    </MediaContent>
                    <TextContent>
                        <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>more</a></span>}>
                            {text}
                        </Truncate>
                    </TextContent>
                </>
                :
                <TextContentAuto>
                    <Truncate lines={20} ellipsis={<span>... <a href='/link/to/article'>more</a></span>}>
                        {text}
                    </Truncate>
                </TextContentAuto>
            }
            
            
            <Divider/>
            <UserInfo>
                <SvgIcon
                url={userImage}
                size="cover"
                width="25px"
                height="25px"
                rounded
                />
                <Username>{user}</Username>
            </UserInfo>
            <DateContainer>
                <SvgIcon
                    url={Calendar}
                    size="contain"
                    width="20px"
                    height="20px"
                />
                <TimeStamp>{date}</TimeStamp>
            </DateContainer>
            <ActionsContainer>
                <Button active > Reject </Button>
                <Button active > Validate </Button>
            </ActionsContainer>
        </ArticleContainer>
)
