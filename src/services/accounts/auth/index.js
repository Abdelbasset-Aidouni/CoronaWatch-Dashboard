

export const login = (username,password) => {
    if (username === "admin" && password === "admin"){
        localStorage.setItem('user', {
            loggedIn:true,
            user:"admin"
        });
    }
}


export const logout = () => localStorage.removeItem('user')

export default {
    login,
    logout
}