import auth from '../../services/accounts/auth'



export const switchTab = (url) =>({
    type:"SWITCH_TO",
    url:url
})


export const login = (user) => {
    auth.login(user.username,user.password)
    return {type:'LOGIN',
    user:user}
}

export const logout = () => {
    auth.logout()
    return {
        type:'LOGOUT'
    }
}




