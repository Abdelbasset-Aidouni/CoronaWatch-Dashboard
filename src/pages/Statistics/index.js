import React,{useState,useEffect} from 'react'
import BasePage from '../BasePage'
import SwitchButtons from './components/SwitchButtons'
import NationalForm from './components/NationalForm'
import InternationalForm from './components/InternationalForm'
import {setUpSelectField} from '../../components/CustomSelect'
import {useSelector,useDispatch} from 'react-redux'
import {fetchCommunes,fetchWilayas} from '../../services/statistics'
import {fetchCommunes as fetchCommunesAction ,fetchWilayas as fetchWilayasAction } from '../../store/actions'






const PageWrapper = () => {
    const dispatch = useDispatch()
    const wilayas =  useSelector(state => state.wilayas)
    const communes =  useSelector(state => state.communes)

    const [currentForm,setCurrentForm] = useState("national")
    useEffect(() => {
            setUpSelectField()
    },[currentForm])


    

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
        <>
            <SwitchButtons setCurrentForm={setCurrentForm} currentForm={currentForm}/>
            {
                currentForm === "national" ?
                    <NationalForm/>
                :
                    <InternationalForm/>
            }
            
        </>
        
    )
}




export default () => <BasePage> <PageWrapper/> </BasePage>