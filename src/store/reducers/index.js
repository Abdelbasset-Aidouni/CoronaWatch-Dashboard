import {SwitchTabReducer} from './menu'
import {authReducer} from './auth'
import {SwitchCategoryReducer} from './content'
import {combineReducers} from 'redux'

const RootReducers = combineReducers({
    menu:SwitchTabReducer,
    auth:authReducer,
    content:SwitchCategoryReducer
})




export default RootReducers