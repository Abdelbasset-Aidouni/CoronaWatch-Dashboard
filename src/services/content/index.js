import {contentUrl,robotUrl} from '../../global/config'
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



export const _getPost = (pk,type) =>{
    const requestOptions = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
    };
    var endpoint;
    if (type !== "robots"){
        endpoint = contentUrl
        endpoint += type === "users" ? "/post/" :  "/writer-post/moderator/accept/"
        // endpoint +=  "/moderator/status"
    }else{
        endpoint = robotUrl + '/youtube-vedios-accept/'
    }
    
    return fetch(`${endpoint}${pk}`, requestOptions)
}



export const getRobotPost = (pk,) =>{
    const requestOptions = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
    };
  
    var endpoint = robotUrl + '/youtube-vedios-accept/'

    
    return fetch(`${endpoint}${pk}`, requestOptions)
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
    return axios.get(
        `${robotUrl}/youtube-vedios-list/?limit=1000`,{
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





export const publishPost = (data) =>{
    const requestOptions = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
            
        },
        body:JSON.stringify(data)
    };
    
    return fetch(`${contentUrl}/writer-post/create/`, requestOptions)
}






















export const validatePost = (pk,type) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status: type !== "robots" ? "accepted" : 2 })
        
    };
    var endpoint;
    if (type !== "robots"){
        endpoint = contentUrl
        endpoint += type === "users" ? "/post" :  "/writer-post"
        endpoint +=  "/moderator/status"
    }else{
        endpoint = robotUrl + '/youtube-vedios-accept'
    }
    
    console.log({endpoint,type})
    return fetch(`${endpoint}/${pk}`, requestOptions)
    
}

export const rejectPost = (pk,type) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status: type !== "robots" ? "rejected" : 3 })
        
    };
    
    var endpoint;
    if (type !== "robots"){
        endpoint = contentUrl
        endpoint += type === "users" ? "/post" :  "/writer-post"
        endpoint +=  "/moderator/status"
    }else{
        endpoint = robotUrl + '/youtube-vedios-reject'
    }
    console.log({endpoint,type})
    return fetch(`${endpoint}/${pk}`, requestOptions)
}
export const setPendingPost = (pk,type) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status: type !== "robots" ? "pending" : 1 })
        
    };
    var endpoint;
    if (type !== "robots"){
        endpoint = contentUrl
        endpoint += type === "users" ? "/post" :  "/writer-post"
        endpoint +=  "/moderator/status"
    }else{
        endpoint = robotUrl + '/youtube-vedios-reject'
    }
    console.log({endpoint,type})
    return fetch(`${endpoint}/${pk}`, requestOptions)
}
export const deletePost = (pk,type) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ deleted:true })
        
    };
    var endpoint = contentUrl
    endpoint += type === "users" ? "/post" :  "/writer-post"
    endpoint +=  "/moderator/status"
    console.log({endpoint,type})
    return fetch(`${endpoint}/${pk}`, requestOptions)
}