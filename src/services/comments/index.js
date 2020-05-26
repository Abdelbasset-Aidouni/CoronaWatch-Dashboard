import {contentUrl} from '../../global/config'
import axios from 'axios'
import {authHeader,authTokenHeader} from '../accounts/auth'

export const fetchComments = async () => {
    return axios.get(
        `${contentUrl}/comment/?limit=1000`,{
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