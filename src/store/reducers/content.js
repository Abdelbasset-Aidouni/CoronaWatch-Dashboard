import Robots from "../../data/articles/robots.json"
import Redactors from "../../data/articles/redactors.json"
import Users from "../../data/articles/users.json"
let contentState = [
    {id:1,title:"Robots",data:Robots.data,selected:false},
    {id:2,title:"Redactors",data:Redactors.data,selected:false},
    {id:3,title:"Users",data:Users.data,selected:false},
]

export const SwitchCategoryReducer = (state=contentState,action) =>{
    switch(action.type){
        case 'SWITCH_CATEGORY':
            return selectCategory(state,action.category)
        default:
            return selectCategory(state,"Robots")
    }
}

const selectCategory = (state,category) =>{
    var element = state.filter(item => item.title === category)[0]
    return [...state.filter(item => item.title !== category).map(item => ({...item,selected:false})),{...element,selected:true}].sort((a,b)=> a.id-b.id)
}