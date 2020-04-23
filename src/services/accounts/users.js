import {apiUrl,accountsUrl} from '../../global/config'
import {authHeader,authTokenHeader} from './auth'
import axios from 'axios'
export const fetchUsers = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' ,...authHeader()},
    };
    return fetch(`${accountsUrl}/users/`, requestOptions)
        .then(res => res.text()
                        .then(text => {
                            if (res.ok){
                                var users = JSON.parse(text)
                                console.log("**************success***************\n",text)
                                return users

                            }else{
                                console.log("**************error***************",text)
                            }
                            
                        }
                    )
            )
}

export const deleteUser = (pk) => {
    
    return axios.delete(
        `${accountsUrl}/delete-user/${pk}`,{
            headers:{ 'Content-Type': 'application/json' ,...authTokenHeader()},
        }
    )
}

// export const blockUser = (pk) => {
    
//     return axios.put(
//         `${accountsUrl}/block-user/${pk}`,{
//             headers:{ 'Content-Type': 'application/json' ,...authTokenHeader()},
//         }
//     )
// }

// export const unblockUser = (pk) => {
    
//     return axios.put(
//         `${accountsUrl}/unblock-user/${pk}`,{
//             headers:{ 'Content-Type': 'application/json' ,...authTokenHeader()},
//         }
//     )
// }


export const getUser = (pk) =>{
    return axios.get(
        `${accountsUrl}/user/${pk}`,{
            headers:{ 'Content-Type': 'application/json' ,...authTokenHeader()},
        }
    )
}


export const blockUser = (pk) =>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' ,...authTokenHeader()},
        
    };
    console.log(requestOptions)
    return fetch(`${accountsUrl}/block-user/${pk}`, requestOptions)
}
export const unblockUser = (pk) =>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' ,...authTokenHeader()},
        
    };
    console.log(requestOptions)
    return fetch(`${accountsUrl}/unblock-user/${pk}`, requestOptions)
}