import {mapUrl} from '../../global/config'
import axios from 'axios'
import {authHeader,authTokenHeader} from '../accounts/auth'

export const fetchWilayas = () => {
    const requestOptions = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/wilaya/?limit=100`, requestOptions)
    
}
export const fetchCommunes = () => {
    const requestOptions = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/communes/?limit=2000`, requestOptions)
    
}

export const createNationalZone = (data) =>{
    const requestOptions = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body:JSON.stringify(data)
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/national-zone/create/`, requestOptions)
}

export const createInterNationalZone = (data) =>{
    const requestOptions = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
        body:JSON.stringify(data)
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/international-zone/create/`, requestOptions)
}

export const getNationalZones =() =>{
    const requestOptions = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/national-zone/?limit=1000000`, requestOptions)
}
