import {fetchCommunes,fetchWilayas} from '../../services/statistics'







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
