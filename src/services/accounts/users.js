import {apiUrl} from '../../global/config'
import {authHeader} from './auth'
import axios from 'axios'
export const fetchUsers = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' ,...authHeader()},
    };
    return fetch(`${apiUrl}/users/`, requestOptions)
        .then(res => res.text()
                        .then(text => {
                            if (res.ok){
                                var users = JSON.parse(text)
                                console.log("------------success----------------\n",users)
                                return users
                            }else{
                                console.log("**************error***************")
                            }
                            
                        }
                    )
            )
        
    // if (username === "admin" && password === "admin"){
    //     localStorage.setItem('user', {
    //         loggedIn:true,
    //         user:"admin"
    //     });
    // }
}