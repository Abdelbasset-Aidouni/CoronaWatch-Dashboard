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

export const acceptInterNationalZone = (pk) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
        },
        body:JSON.stringify({status:"a"})
    };
    console.log(requestOptions)
    console.log("accepter international zone ")
    return fetch(`${mapUrl}/international-zone/update-status/${pk}/`, requestOptions)
}


export const rejectInterNationalZone = (pk) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
        },
        body:JSON.stringify({status:"r"})
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/international-zone/update-status/${pk}/`, requestOptions)
}

export const setPendingInterNationalZone = (pk) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
        },
        body:JSON.stringify({status:"p"})
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/international-zone/update-status/${pk}/`, requestOptions)
}


export const acceptNationalZone = (pk) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
        },
        body:JSON.stringify({status:"a"})
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/national-zone/update-status/${pk}/`, requestOptions)
}


export const rejectNationalZone = (pk) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
        },
        body:JSON.stringify({status:"r"})
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/national-zone/update-status/${pk}/`, requestOptions)
}

export const setPendingNationalZone = (pk) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
            
        },
        body:JSON.stringify({status:"p"})
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/national-zone/update-status/${pk}/`, requestOptions)
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


export const getInterationalZones =() =>{
    const requestOptions = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader()
        },
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/international-zone/?limit=1000000`, requestOptions)
}















export const updateNationalZone = (pk,data) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
            
        },
        body:JSON.stringify(data)
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/national-zone/update/${pk}/`, requestOptions)
}

export const updateInterNationalZone = (pk,data) =>{
    const requestOptions = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            ...authTokenHeader(),
            
        },
        body:JSON.stringify(data)
    };
    console.log(requestOptions)
    return fetch(`${mapUrl}/international-zone/update/${pk}/`, requestOptions)
}