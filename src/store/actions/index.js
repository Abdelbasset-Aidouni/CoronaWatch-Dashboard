import auth from '../../services/accounts/auth'



export const switchTab = (url) =>({
    type:"SWITCH_TO",
    url:url
})


export const switchCategory = (category) =>({
    type:"SWITCH_CATEGORY",
    category
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
export const fetchWilayas = (data) => ({
    type:"FETCH_WILAYAS",
    data
})
export const fetchCommunes = (data) => ({
    type:"FETCH_COMMUNES",
    data
})


export const switchToNational = () => ({
    type:"SWITCH_TO_NATIONAL",
})


export const switchToInterNational = () => ({
    type:"SWITCH_TO_INTERNATIONAL",
})


export const setData = (data,dataType) => ({
    type:"SET_DATA",
    data,
    dataType
})


export const setUnfetched = (dataType) => ({
    type:"SET_UNFETCHED",
    dataType
})


