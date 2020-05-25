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
import {validateUserPost,rejectUserPost,setPendingUserPost,deleteUserPost} from '../../../../services/content'




export default ({article,deleteHandler}) =>{
    const [dropdownOpen, setOpen] = useState(false);
    const [status,setStatus] = useState(article.status)
    const [userObject,setUser] = useState({})

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
    },[])
    const toggle = () =>{ 
        setOpen(!dropdownOpen);
        console.log("dropdown")
    }
    const handleDelete = async () => {
        return await deleteUserPost(article.pk)
                .then(res => {
                    if (res.status === 200){
                        deleteHandler(article.pk)
                        window.$.alert({title:"Success",content:"Post has been Deleted Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const handleAccept = async () => {
        return await validateUserPost(article.pk)
                .then(res => {
                    if (res.status === 200){
                        res.text(text => console.log(text))
                        setStatus("accepted")
                        window.$.alert({title:"Success",content:"Post has been validated Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const handleReject = async () => {
        return await rejectUserPost(article.pk)
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
    const handlePending = async () =>{
        return await setPendingUserPost(article.pk)
                .then(res => {
                    if (res.ok){
                        setStatus("pending")
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Post has been reset as  Pending Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    return (
        <Tr>
            <Td>{article.pk}</Td>
            <Td>{article.title ? (article.title.length > 50 ? article.title.substr(0,50) + "..." : article.title) : article.title }</Td>
            <Td>{userObject.email}</Td>
            <Td>{article.date_posted}</Td>
            <Td>
                <StatusBadge
                type={status === "accepted" ? "success" : status === "rejected" ? "danger" : "warning"}
                >
                    {status}
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
                        status !== "accepted" ?
                        <DropdownItem className="dropdown-item"
                        onClick={handleAccept}> Accept </DropdownItem> : 
                        <DropdownItem className="dropdown-item"
                        onClick={handlePending}> Reset as Pending </DropdownItem>
                    }
                    {
                        status !== "rejected" ?
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