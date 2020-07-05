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
var HtmlToReactParser = require('html-to-react').Parser;




export default ({title,file,date_posted,pk,content,vedio,postType}) => {
    const [articlesType,setArticleType] = useState(postType)
    const [videoState,setVideoState] = useState(vedio)

    const [fileType,setFileType] = useState("")

    useEffect(()=>{
        const setVideo = () => {
            setVideoState(vedio.replace('watch?v=','embed/'))
        }
    },[vedio])

    useEffect(()=>{
        const updateArticleType = () => {
            setArticleType(postType)
        }
        updateArticleType()
    },[postType])

    useEffect(()=>{
        console.log(title,file,date_posted)
        const getFileType = async () => {
            const tokenizer = await makeTokenizer(file)
            const type = await FileType.fromTokenizer(tokenizer)
            if (type) setFileType(type.mime)
            
        }
        if (articlesType !== "robots") getFileType()
    },[pk])
    var htmlToReactParser = new HtmlToReactParser()
    const isVideo = (fileType) => fileType.search("video") > -1 
    const isImage = (fileType) => fileType.search("image") > -1
    return (
        <>
            <ArticleHeader>
                <Heading size="h3" weight="600">{title}</Heading>
                <DateText>{date_posted}</DateText>
            </ArticleHeader>

            {   articlesType === "robots" ?
                <MediaContent>{console.log("video : ",videoState)}
                    <iframe src={videoState}>
                    </iframe>
                    
                </MediaContent>:
                isImage(fileType) || isVideo(fileType) ? 
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
            
            <TextContent> {
                articlesType === "redactors" ?
                htmlToReactParser.parse(content) :
                content
            } </TextContent>
        </>

    )
}

{/* <iframe width="713" height="401" src="https://www.youtube.com/embed/ePao0cTGG-o" ></iframe> */}