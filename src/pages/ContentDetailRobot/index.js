import React,{useEffect,useState} from 'react'
import BasePage from '../BasePage'
import ArticleDetail from './components/ArticleDetail'
import UserDetail from './components/UserDetail'
import Button from '../ContentPage/components/Button'
import {
    PageWrapper,
    ArticleContainer,
    InfoContainer,
    ActionsContainer
} from './style'
import {useSelector,useDispatch} from 'react-redux'

import {getRobotPost,validatePost,rejectPost } from '../../services/content'
import { BadgeContainer, Badge } from '../ContentPage/components/Article/style'

const ContentDetailPage = (props) =>{
    let Articles = useSelector(state => state.content)
    Articles = Articles.filter(item => item.selected)[0]
    const [post,setPost] = useState({})
    

    

    useEffect(()=>{
        const getPost_ = async () => {
            await getRobotPost(props.match.params.id)
            .then(res => res.json().then(data => {
                if (res.status === 200){
                    console.log( "post user is :",data)
                    setPost(data)
                }else{
                    console.log( "error response is  :",data)
                    setPost({})
                }
            }))
        }
        
        getPost_()
    },[])
    const handleValidate = async () =>{
        return await validatePost(post.pk,"robots")
                .then(res => {
                    if (res.ok){
                        res.text(text => console.log(text))
                        setPost(prev => ({...prev,status:2}))
                        window.$.alert({title:"Success",content:"Post has been validated Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }

    const handleReject = async () =>{
        return await rejectPost(post.pk,"robots")
                .then(res => {
                    if (res.ok){
                        setPost(prev => ({...prev,status:3}))
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Post has been Rejected Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    return (
        <PageWrapper> 
            <ArticleContainer id="articleContainer">
                <ArticleDetail {...post}  />
            </ArticleContainer>
            <InfoContainer>
                <ActionsContainer>
                    {
                        post.status === 1 ?
                        <>
                            <Button active onClick={handleReject} >reject</Button>
                            <Button active onClick={handleValidate} >validate</Button>
                        </>
                        :
                        <BadgeContainer>
                            {console.log("post status ",post.status)}
                            <Badge rejected={post.status === 3} > {post.status === 3 ? "rejected" : "accepted" } </Badge>
                        </BadgeContainer>
                    }
                    
                </ActionsContainer>
            </InfoContainer>
            
        </PageWrapper>
    )
}

export default (props) => <BasePage> <ContentDetailPage {...props}/> </BasePage>