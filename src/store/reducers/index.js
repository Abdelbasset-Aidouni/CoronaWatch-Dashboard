import {SwitchTabReducer} from './menu'
import {authReducer} from './auth'
import {combineReducers} from 'redux'
const RootReducers = combineReducers({
    menu:SwitchTabReducer,
    auth:authReducer
})




export default RootReducers