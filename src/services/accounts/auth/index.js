
import {apiUrl,accountsUrl} from "../../../global/config"


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