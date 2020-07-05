import Robots from "../../data/articles/robots.json"
import Redactors from "../../data/articles/redactors.json"
import Users from "../../data/articles/users.json"
import {
    fetchUsersPosts,
    fetchRedactorsPosts,
    fetchRobotsPosts
} from '../../services/content'




let contentState = [
    {id:1,title:"Robots",data:[],fetch:fetchRobotsPosts,type:"robots",fetched:false,selected:false},
    {id:2,title:"Redactors",data:[],fetch:fetchRedactorsPosts,type:"redactors",fetched:false,selected:false},
    {id:3,title:"Users",data:[],fetch:fetchUsersPosts,type:"users",fetched:false,selected:false},
]

export const SwitchCategoryReducer = (state=contentState,action) =>{
    switch(action.type){
        case 'SWITCH_CATEGORY':
            return selectCategory(state,action.category)
        case 'SET_DATA':
            return changeData(state,action.data,action.dataType)
        case 'SET_UNFETCHED':
            return setUnfetched(state,action.dataType)
        default:
            return selectCategory(state,"Users")
    }
}

const setUnfetched = (state,type)=> {
    var element = state.filter(item => item.type === type)[0]
    return [...state.filter(item => item.type !== type),{...element,fetched:false}].sort((a,b)=> a.id-b.id)
}


const changeData = (state,data,type) => {
    var element = state.filter(item => item.type === type)[0]
    if (!element.fetched)
    return [...state.filter(item => item.type !== type),{...element,data:data,fetched:true}].sort((a,b)=> a.id-b.id)
    return state
}



const selectCategory = (state,category) =>{
    var element = state.filter(item => item.title === category)[0]
    return [...state.filter(item => item.title !== category).map(item => ({...item,selected:false})),{...element,selected:true}].sort((a,b)=> a.id-b.id)
}