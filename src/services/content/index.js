import {contentUrl} from '../../global/config'
import axios from 'axios'
import {authHeader,authTokenHeader} from '../accounts/auth'



export const fetchUsersPosts = async () => {
    return axios.get(
        `${contentUrl}/posts/?limit=1000`,{
            headers: {
                'Content-Type': 'application/json',
                ...authTokenHeader()
                
            }
        }
    ).then(res => {
        if (res.status === 200){
            console.log("success response data",res.data)
            return res.data
        }else{
            console.log("error response data",res.data)
            return []
        }
    })
}

export const validateUserPost = (pk) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status:"accepted" })
        
    };
    console.log(requestOptions)
    return fetch(`${contentUrl}/post/moderator/status/${pk}`, requestOptions)
    
}

export const rejectUserPost = (pk) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status:"rejected" })
        
    };
    console.log(requestOptions)
    return fetch(`${contentUrl}/post/moderator/status/${pk}`, requestOptions)
}
export const setPendingUserPost = (pk) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status:"pending" })
        
    };
    console.log(requestOptions)
    return fetch(`${contentUrl}/post/moderator/status/${pk}`, requestOptions)
}
export const deleteUserPost = (pk) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ deleted:true })
        
    };
    console.log(requestOptions)
    return fetch(`${contentUrl}/post/moderator/status/${pk}`, requestOptions)
}

export const getPost = (pk) =>{
    const requestOptions = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
    };
    
    return fetch(`${contentUrl}/posts/${pk}`, requestOptions)
}

export const fetchRedactorsPosts = () => {
    return axios.get(
        `${contentUrl}/writer-posts/?limit=1000`,{
            headers: {
                'Content-Type': 'application/json',
                ...authTokenHeader()
                
            }
        }
    ).then(res => {
        if (res.status === 200){
            console.log("success response data",res.data)
            return res.data
        }else{
            console.log("error response data",res.data)
            return []
        }
    })
}

export const fetchRobotsPosts = () => {
    return new Promise(function(resolve, reject) {

        setTimeout(() => resolve({results:[]}), 1000); // (*)
      
      })
}