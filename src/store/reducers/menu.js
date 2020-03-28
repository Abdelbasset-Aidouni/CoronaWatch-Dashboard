import Dashboard from '../../assets/icons/dashboard.svg'
import Accounts from '../../assets/icons/accounts.svg'
import Content from '../../assets/icons/content.svg'
import Comments from '../../assets/icons/comments.svg'
import Warning from '../../assets/icons/warning.svg'


let globalState = [
    {id:0,item:"Dashboard",selected:true,icon:Dashboard,url:"/"},
    {id:1,item:"Accounts",selected:false,icon:Accounts,url:"/accounts"},
    {id:2,item:"Content",selected:false,icon:Content,url:"/content"},
    {id:3,item:"Comments",selected:false,icon:Comments,url:"/comments"},
    {id:4,item:"Reported Cases",selected:false,icon:Warning,url:"/reported-cases"},
]



const goTo = (state,url = "/")=>{
    
    const element = state.filter(item => item.url === url)[0]
    let newState = state
    if (element){
        console.log(element)
        newState = [...state.filter(item => item.id !== element.id).map(item => {return {...item,selected:false}} ),
            {
                ...element,
                selected:true
            }].sort((a,b)=> a.id-b.id)
    }
    console.log(newState)
    
    return newState
}


export const SwitchTabReducer = (state=globalState,action) =>{
    switch (action.type){
        case 'SWITCH_TO':
            return goTo(state,action.url)
        default: 
            return goTo(state,window.location.pathname)
    }
}


