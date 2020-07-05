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

import {_getPost, getPost,validateUserPost,rejectUserPost,validatePost,rejectPost } from '../../services/content'
import { BadgeContainer, Badge } from '../ContentPage/components/Article/style'

const ContentDetailPage = (props) =>{
    let Articles = useSelector(state => state.content)
    Articles = Articles.filter(item => item.selected)[0]
    const [post,setPost] = useState({})
    const [articlesType,setArticlesType] = useState(Articles.type)
    

    useEffect(() => {
        const updateAeticleType = () =>{
            setArticlesType(Articles.type)
        }
        updateAeticleType()
    },[Articles])

    useEffect(()=>{
        const getPost_ = async () => {
            await _getPost(props.match.params.id,articlesType)
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
        return await validatePost(post.pk,articlesType)
                .then(res => {
                    if (res.ok){
                        res.text(text => console.log(text))
                        setPost(prev => ({...prev,status:"accepted"}))
                        window.$.alert({title:"Success",content:"Post has been validated Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }

    const handleReject = async () =>{
        return await rejectPost(post.pk,articlesType)
                .then(res => {
                    if (res.ok){
                        setPost(prev => ({...prev,status:"rejected"}))
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Post has been Rejected Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    return (
        <PageWrapper> { console.log("articles type ",articlesType)}
            <ArticleContainer id="articleContainer">
                <ArticleDetail {...post} postType={articlesType} />
            </ArticleContainer>
            <InfoContainer>
                <UserDetail userID={post.user}/>
                <ActionsContainer>
                    {
                        post.status === "pending" ?
                        <>
                            <Button active onClick={handleReject} >reject</Button>
                            <Button active onClick={handleValidate} >validate</Button>
                        </>
                        :
                        <BadgeContainer>
                            {console.log("post status ",post.status)}
                            <Badge rejected={post.status === "rejected"} > {post.status} </Badge>
                        </BadgeContainer>
                    }
                    
                </ActionsContainer>
            </InfoContainer>
            
        </PageWrapper>
    )
}

export default (props) => <BasePage> <ContentDetailPage {...props}/> </BasePage>