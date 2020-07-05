import {reportUrl} from '../../global/config'
import axios from 'axios'
import {authHeader,authTokenHeader} from '../accounts/auth'





export const fetchReportedCases = async () => {
    return axios.get(
        `${reportUrl}/cases/?limit=1000`,{
            headers: {
                'Content-Type': 'application/json',
                ...authTokenHeader()
                
            }
        }
    ).then(res => {
        if (res.status === 200){
            console.log("success response data",res.data)
            return res.data
        }else{
            console.log("error response data",res.data)
            return []
        }
    })
}



export const validateCase = (pk) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status:2 })
        
    };
    console.log(requestOptions)
    return fetch(`${reportUrl}/case/update/accept/${pk}`, requestOptions)
    
}

export const rejectCase = (pk) => {
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body: JSON.stringify({ status:3 })
        
    };
    console.log(requestOptions)
    return fetch(`${reportUrl}/case/update/reject/${pk}`, requestOptions)
}
