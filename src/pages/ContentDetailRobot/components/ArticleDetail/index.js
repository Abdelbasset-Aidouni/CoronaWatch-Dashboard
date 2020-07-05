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





export default ({title,vedio,pk}) => {
    const [videoState,setVideoState] = useState(vedio)

    const [fileType,setFileType] = useState("")

    useEffect(()=>{
        const setVideo = () => {
            
        }
        setVideo()
    },[vedio])

    
    return (
        <>
            <ArticleHeader>
                <Heading size="h3" weight="600">{title}</Heading>
            </ArticleHeader>

            {  
                <MediaContent>
                    <iframe src={vedio} title={title}>
                    </iframe>
                    
                </MediaContent>
            }
            
        </>

    )
}