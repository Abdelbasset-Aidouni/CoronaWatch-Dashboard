import {SwitchTabReducer} from './menu'
import {combineReducers} from 'redux'
const RootReducers = combineReducers({
    menu:SwitchTabReducer,
})




export default RootReducers