
import {apiUrl,accountsUrl} from "../../../global/config"
import $ from 'jquery'

// export const login = (email, password) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     };

//     return fetch(`${apiUrl}/login/staff`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));

//             return user;
//         });
// }

export const checkAuthenticated = (token) => {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization': 'Token ' + token
        },
        
    };
    return fetch(`${accountsUrl}/current-user/`, requestOptions)
        .then(res => res.text()
                        .then(text => {
                            if (res.ok){
                                var user = JSON.parse(text)
                                
                                console.log("------------Authenticated----------------\n",user)

                                return true
                            }else{
                                console.log("**************Not Authenticated***************",text)
                                return false
                                // window.location.reload(true);
                                
                            }
                            
                        }
                    )
            )
}


export const login = (email,password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch(`${accountsUrl}/login/staff/`, requestOptions)
        .then(res => res.text()
                        .then(text => {
                            if (res.ok){
                                var user = JSON.parse(text)
                                localStorage.setItem('user', JSON.stringify(user))
                                console.log("------------success----------------\n",user)
                                window.location.reload(true)
                            }else{
                                logout();
                                // window.location.reload(true);
                                $.alert({type:"orange",title:"Wrong Credentials",content:"please check your credentials and try again"})
                                console.log("**************error***************",text)
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


export const logout = () => localStorage.removeItem('user')

export default {
    login,
    logout
}

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
export function authTokenHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Token ' + user.token };
    } else {
        return {};
    }
}
export function authBasicHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Basic ' + user.token };
    } else {
        return {};
    }
}
function login_(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${apiUrl}/login/staff`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}