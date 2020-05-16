import React,{useEffect,useState} from 'react'
import {
    ArticleHeader,
    MediaContent,
    TextContent,
    DateText
} from './style'
import Heading from '../../../../components/Heading'

import FileType from 'file-type'
import {makeTokenizer} from '@tokenizer/http'





export default ({title,file,date_posted,pk,content}) => {
    
    const [fileType,setFileType] = useState("")
    useEffect(()=>{
        console.log(title,file,date_posted)
        const getFileType = async () => {
            const tokenizer = await makeTokenizer(file)
            const type = await FileType.fromTokenizer(tokenizer)
            if (type) setFileType(type.mime)
            
        }
        getFileType()
    },[pk])

    const isVideo = (fileType) => fileType.search("video") > -1 
    const isImage = (fileType) => fileType.search("image") > -1
    return (
        <>
            <ArticleHeader>
                <Heading size="h3" weight="600">{title}</Heading>
                <DateText>{date_posted}</DateText>
            </ArticleHeader>
            {   isImage(fileType) || isVideo(fileType) ? 
                <MediaContent>
                    {
                    isImage(fileType) ? 
                    <img src={file} alt={title}/> 
                    : isVideo(fileType) ? 
                    <video controls > <source src={file} /> </video> 
                    : <span></span>
                    }
                </MediaContent>
                : <span></span>
            }
            
            <TextContent> {content} </TextContent>
        </>

    )
}