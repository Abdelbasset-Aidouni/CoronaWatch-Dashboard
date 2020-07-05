import {SwitchTabReducer,setDataReducer} from './menu'
import {authReducer} from './auth'
import {SwitchCategoryReducer} from './content'
import {WilayasReducer,CommunesReducer,MapModeReducer} from './statistics'
import {combineReducers} from 'redux'

const RootReducers = combineReducers({
    menu:SwitchTabReducer,
    auth:authReducer,
    content:SwitchCategoryReducer,
    wilayas:WilayasReducer,
    communes:CommunesReducer,
    currentMapMode:MapModeReducer
})




export default RootReducers