
const user = localStorage.getItem('user')
const initialState = user ? {loggedIn:true,user} : {}
console.log(initialState)
export const authReducer = (state=initialState,action) =>{
    switch (action.type){
        case 'LOGIN':
            return {
                loggedIn: true,
                user: action.user
            }
        default :
            return {}
    }
}