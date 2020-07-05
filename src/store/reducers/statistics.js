import {fetchCommunes,fetchWilayas} from '../../services/statistics'


let currentMode = "national"




export const MapModeReducer = (state=currentMode,action) => {
    switch(action.type){
        case 'SWITCH_TO_NATIONAL':
            return "national"
        case 'SWITCH_TO_INTERNATIONAL':
            return "international"
        default:
            return "national"
    }
}

export const WilayasReducer = (state=[],action) => {
    switch(action.type){
        case 'FETCH_WILAYAS':
            return action.data
        default:
            return state
    }
    
}

export const CommunesReducer = (state=[],action) => {
    switch(action.type){
        case "FETCH_COMMUNES":
            return action.data
        default:
            return state
    }
    
}
