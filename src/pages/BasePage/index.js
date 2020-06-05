import React,{useEffect} from 'react'
import SideBar from './components/SideBar'
import UserNav from './components/UserNav'
import styled from 'styled-components'
import AddUserModal from '../AccountsPage/components/AddUserModal'

import {useSelector,useDispatch} from 'react-redux'
import {fetchCommunes,fetchWilayas} from '../../services/statistics'
import {fetchCommunes as fetchCommunesAction ,fetchWilayas as fetchWilayasAction } from '../../store/actions'


const Wrapper = styled.div`
    display:flex;
    position:absolute;
    width:100%;
    flex-direction:row;
    min-height:100% !important;
    background-color:#F7F7F7;
`
const MainContent = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    flex-grow:10;
    height:100% !important;
    
`

export default ({children}) => {
    

    const dispatch = useDispatch()
    const wilayas =  useSelector(state => state.wilayas)
    const communes =  useSelector(state => state.communes)

    useEffect(() =>{
        if (wilayas.length === 0){
            const _wilayas = async () => {
                await fetchWilayas().then(res => {
                    if (res.status === 200){
                        res.json().then(json =>{dispatch(fetchWilayasAction(json.results))} )
                    }else{
                        window.$.alert({title:"Failed to fetch wilaya list",content:"please refresh the page or contact the administration and help us get the app to work correctly"})
                    }
                })
                
            }
            _wilayas()
        } 
        if (communes.length === 0){
            const _communes = async () => {
                await fetchCommunes().then(res => {
                    if (res.status === 200){
                        res.json().then(json => {dispatch(fetchCommunesAction(json.results))})
                    }else{
                        window.$.alert({title:"Failed to fetch commune list",content:"please refresh the page or contact the administration and help us get the app to work correctly"})
                    }
                }) 
                
            }
            _communes()
        }
        
    },[])

    return (
    
        <Wrapper>
            <SideBar/>
            <MainContent>
                <UserNav/>
                {children}
            </MainContent>
        </Wrapper>
    
    
)}
