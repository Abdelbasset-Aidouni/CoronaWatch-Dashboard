import React,{useState,useEffect} from 'react'
import {StatusBadge,DropdownItem} from './style'
import {
    TableStyle,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '../Table'
import Dots from '../../../../assets/icons/dots.svg'
import SvgIcon from '../../../../components/SvgIcon'
import {getUser} from '../../../../services/accounts/users'
import {
    validateUserPost,
    rejectUserPost,
    setPendingUserPost,
    deleteUserPost,
    validatePost,
    rejectPost,
    deletePost,
    setPendingPost
} from '../../../../services/content'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'


import {setUnfetched} from '../../../../store/actions'



export default ({article,deleteHandler,articlesType}) =>{
    const [dropdownOpen, setOpen] = useState(false);
    const [status,setStatus] = useState(article.status)
    const [userObject,setUser] = useState({})
    const [articleState,setArticleState] = useState(article)

    const dispatch = useDispatch()
    let Articles = useSelector(state => state.content)
    Articles = Articles.filter(item => item.selected)[0]

    useEffect(()=>{
        const setArticle = () => {
            if (articlesType === "robots")
            setArticleState({...article,status:article.status === 1 ? "pending" : article.status === 2 ? "accepted" : "rejected"})
            else setArticleState(article)
        }
        setArticle()
    },[article,Articles.type])

    useEffect(()=>{
        const getUser_ = async () => {
            await getUser(article.user).then(res => {
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
    },[article])
    const toggle = () =>{ 
        setOpen(!dropdownOpen);
        console.log("dropdown")
    }
    const handleDelete = async () => {
        return await deletePost(articleState.pk,articlesType)
                .then(res => {
                    if (res.status === 200){
                        deleteHandler(articleState.pk)
                        window.$.alert({title:"Success",content:"Post has been Deleted Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const handleAccept = async () => {
        return await validatePost(articleState.pk,articlesType)
                .then(res => {
                    if (res.status === 200){
                        res.text(text => console.log(text))
                        setStatus("accepted")
                        dispatch(setUnfetched(Articles.type))
                        setArticleState(pre => ({...pre,status:"accepted"}))
                        window.$.alert({title:"Success",content:"Post has been validated Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const handleReject = async () => {
        return await rejectPost(articleState.pk,articlesType)
                .then(res => {
                    if (res.ok){
                        setStatus("rejected")
                        setArticleState(pre => ({...pre,status:"rejected"}))
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Post has been Rejected Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const handlePending = async () =>{
        return await setPendingPost(articleState.pk,articlesType)
                .then(res => {
                    if (res.ok){
                        setArticleState(pre => ({...pre,status:"pending"}))
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Post has been reset as  Pending Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    return (
        <Tr>{console.log( "article : ", articleState)}
            <Td> <Link to={`/content/${articlesType === "robots" ? "robots/" : ""}${articleState.pk}`} >{articleState.pk}</Link></Td>
            <Td>{articleState.title ? (articleState.title.length > 50 ? articleState.title.substr(0,50) + "..." : articleState.title) : articleState.title }</Td>
            {
                articlesType !== "robots" ?
                <>
                <Td>{userObject.email}</Td>
                <Td>{articleState.date_posted}</Td>
                </>
                : null
            }
            
            
            <Td>
                <StatusBadge
                type={articleState.status === "accepted" ? "success" : articleState.status === "rejected" ? "danger" : "warning"}
                >
                    {articleState.status}
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
                    onClick={handleDelete}
                    >Delete</DropdownItem>
                    {
                        articleState.status !== "accepted"  ?
                        <DropdownItem className="dropdown-item"
                        onClick={handleAccept}> Accept </DropdownItem> : 
                        <DropdownItem className="dropdown-item"
                        onClick={handlePending}> Reset as Pending </DropdownItem>
                    }
                    {
                        articleState.status !== "rejected" ?
                        <DropdownItem className="dropdown-item"
                        onClick={handleReject}
                        > Reject </DropdownItem> : 
                        <DropdownItem className="dropdown-item"
                        onClick={handlePending}> Reset as Pending </DropdownItem>
                    }
                    
                    
                </div>
                </div>
                </div>
            </Td>
        </Tr>
    )
}