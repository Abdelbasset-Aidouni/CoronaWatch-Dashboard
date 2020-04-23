import {contentUrl} from '../../global/config'
import axios from 'axios'
import {authHeader,authTokenHeader} from '../accounts/auth'



export const fetchUsersPosts = async () => {
    return axios.get(
        `${contentUrl}/posts/`,{
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
                
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

export const fetchRedactorsPosts = () => {
    return new Promise(function(resolve, reject) {

        setTimeout(() => resolve([]), 1000); // (*)
      
      })
}

export const fetchRobotsPosts = () => {
    return new Promise(function(resolve, reject) {

        setTimeout(() => resolve([]), 1000); // (*)
      
      })
}