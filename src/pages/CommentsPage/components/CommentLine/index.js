import React,{useState,useEffect} from 'react'

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

import Button from '../../../ContentPage/components/Button'




export default ({comment,deleteHandler}) =>{
    
    
    const [userObject,setUser] = useState({})

    useEffect(()=>{
        const getUser_ = async () => {
            await getUser(comment.user).then(res => {
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
    
    const handleDelete = async () => {
        // return await deleteUserPost(comment.pk)
        //         .then(res => {
        //             if (res.status === 200){
        //                 deleteHandler(comment.pk)
        //                 window.$.alert({title:"Success",content:"Post has been Deleted Successfully"})
        //             }else{
        //                 res.text().then(text => console.log("text response",text))
        //                 window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
        //             }
        //         })
    }
    
    
    return (
        <Tr>
            <Td>{userObject.email}</Td>
            <Td>{comment.times}</Td>
            <Td> 10 </Td>
            <Td>{comment.content ? (comment.content.length > 100 ? comment.content.substr(0,100) + "..." : comment.content) : comment.content }</Td>
            <Td>
                <Button selected small onClick={handleDelete}> Delete </Button>
            </Td>
        </Tr>
    )
}