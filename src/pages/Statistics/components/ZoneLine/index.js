import React,{useState,useEffect} from 'react'
import $ from 'jquery'
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {StatusBadge,DropdownItem} from './style'
import {Input,
    NumberFieldsContainer,
    FlexContainer,
    InputContainer
} from './../NationalForm/style'
import Heading from '../../../../components/Heading'
import SwitchButton from '../../../../components/SwitchButton'
import {
    TableStyle,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '../Table'
import Dots from '../../../../assets/icons/dots.svg'
import SvgIcon from '../../../../components/SvgIcon'
import {getUser} from '../../../../services/accounts/users'
import {acceptInterNationalZone,
    rejectInterNationalZone,
    acceptNationalZone,
    rejectNationalZone,
    setPendingInterNationalZone,
    setPendingNationalZone,
    updateInterNationalZone,
    updateNationalZone
} from '../../../../services/statistics'

import CustomButton from '../../../ContentPage/components/Button'



export default ({zone,deleteHandler,zonesType}) =>{
    const [dropdownOpen, setOpen] = useState(false);
    const [status,setStatus] = useState(zone.status)
    const [zoneUpdatedState,UpdateState ] = useState(zone)
    const [zoneState,setZoneState] = useState(zone)
    const [modal,setModal] = useState(false)
    const [valChanged,setValChanged] = useState(false)

    useEffect(() =>{
        const getCurrentState = ()=>{
            setZoneState(zone)
            UpdateState(zone)
            setStatus(zone.status)
        }
        getCurrentState()
    },[zone])


    

    const updateInputValue = (event) =>{
        const value = event.target.value
        const name = event.target.name
        var changed = !checkForChanges(name,value)
        console.log("changed : ",changed)
        setValChanged(changed)
        UpdateState(pre => ({...pre,[name]:parseInt(value)}))
        
    }
    
    const switchValue = () => {
        var changed = !checkForChanges("is_risky",!zoneUpdatedState.is_risky)
        console.log("changed : ",changed)
        setValChanged(changed)
        UpdateState(pre => ({...pre,is_risky:!zoneUpdatedState.is_risky}))
        
    }
    
    const toggle = () =>{ 
        setOpen(!dropdownOpen);
        console.log("dropdown")
    }
    const checkForChanges = (changed,value) =>{
        const newState = {...zoneUpdatedState,[changed]:value}
        return newState.infected === zone.infected 
        && newState.sick === zone.sick 
        && newState.recovered === zone.recovered 
        && newState.dead === zone.dead
        && newState.is_risky === zone.is_risky
    }

    const handleUpdate = async () =>{
        let message = "";
        console.log(zoneUpdatedState)
        if (zoneUpdatedState.infected < zoneUpdatedState.death ) message += "Deaths cannot be greater than total infected cases <br>"
        if (zoneUpdatedState.infected < zoneUpdatedState.recovered ) message += "Recovered cases cannot be greater than total infected cases <br>"
        if (zoneUpdatedState.infected < zoneUpdatedState.sick ) message += "Active cases cannot be greater than total infected cases <br>"
        if (zoneUpdatedState.infected < zone.infected) message += "total Infected cases cannot decrease !! <br>"
        if (zoneUpdatedState.dead < zone.dead) message += "total deaths cannot decrease !! <br>"
        if (zoneUpdatedState.recovered < zone.recovered) message += "Recovered cases cannot decrease !! <br>"
        if (message.length > 1){
            return $.alert({
                title:"Validation Error",
                type:"orange",
                icon:"fas fa-exclamation-triangle",
                content:message
            })
        }
        var response;
        if (zonesType === "national"){
              response =  updateNationalZone(zone.pk,zoneUpdatedState)
        }else response =  updateInterNationalZone(zone.pk,zoneUpdatedState)
        
        await response.then(res => {
            if (res.status === 200){
                $.alert({
                    type:"green",
                    title:"Success",
                    icon:"fas fa-check-circle",
                    content:` Zone ${zone.name} updated Successfully `
                })
                setModal(!modal)
                setZoneState(pre => ({...pre,...zoneUpdatedState}))
            }else{
                $.alert({
                    type:"red",
                    title:"Failed",
                    icon:"fas fa-exclamation-triangle",
                    content:` Oops! An Error Occurred while trying to update ${zone.name} Zone, Please try again later`
                })
            }
        })
    }

    const handleDelete = async () => {
        // return await deleteUserPost(zone.pk)
        //         .then(res => {
        //             if (res.status === 200){
        //                 deleteHandler(article.pk)
        //                 window.$.alert({title:"Success",content:"Post has been Deleted Successfully"})
        //             }else{
        //                 res.text().then(text => console.log("text response",text))
        //                 window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
        //             }
        //         })
    }
    const handleAccept = async () => {
        console.log("zones type : ",zonesType)
        const handler = zonesType === "national" ? acceptNationalZone : acceptInterNationalZone
        return await handler(zone.pk)
                .then(res => {
                    if (res.status === 200){
                        res.text(text => console.log(text))
                        setStatus("a")
                        window.$.alert({title:"Success",content:"Zone has been validated Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const handleReject = async () => {
        console.log("zones type : ",zonesType)
        const handler = zonesType === "international" ? rejectInterNationalZone : rejectNationalZone
        return await handler(zone.pk)
                .then(res => {
                    if (res.ok){
                        setStatus("r")
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Zone has been Rejected Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    const handlePending = async () =>{
        console.log("zone type : ",zonesType)
        const handler = zonesType === "international" ? setPendingInterNationalZone : setPendingNationalZone
        return await handler(zone.pk)
                .then(res => {
                    if (res.ok){
                        setStatus("p")
                        res.text(text => console.log(text))
                        window.$.alert({title:"Success",content:"Zone has been reset as  Pending Successfully"})
                    }else{
                        res.text().then(text => console.log("text response",text))
                        window.$.alert({title:"Failed",content:"Oops, an error occured, please try later"})
                    }
                })
    }
    return (
        <Tr>{console.log({name:zone.name,status:zone.status})}
            <Td>{zoneState.pk}</Td>
            <Td>{zoneState.name ? (zoneState.name.length > 50 ? zoneState.name.substr(0,50) + "..." : zoneState.name) : zoneState.name }</Td>
            {
                zonesType === "national" ? <Td>{zoneState.is_risky ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}</Td> : null
            }
            
            <Td>{zoneState.dead}</Td>
            <Td>{zoneState.sick}</Td>
            <Td>{zoneState.recovered}</Td>
            <Td>{zoneState.infected}</Td>
            <Td>
                <StatusBadge
                type={status === "a" ? "success" : status === "r" ? "danger" : "warning"}
                >
                    {status === "a" ? "Accepted": status === "r" ? "Rejected" : "Pending"}
                </StatusBadge>
            </Td>
            <Td>
            <div>
                <div className="dropdown show">

                <SvgIcon
                    url={Dots}
                    width="6px"
                    height="14px"
                    size="contain"
                    onClick={toggle}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    pointer
                ></SvgIcon>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {/* <DropdownItem className="dropdown-item"
                    onClick={handleDelete}
                    >Delete</DropdownItem> */}
                    <div>
                        <DropdownItem className="dropdown-item"
                        onClick={() => setModal(!modal)}
                        >Update</DropdownItem>
                        <Modal isOpen={modal} toggle={() => setModal(!modal)} className="modal-lg">
                        <ModalHeader toggle={() => setModal(!modal)}>Update Zone <strong> {zoneState.name} </strong></ModalHeader>
                            <ModalBody>
                            <NumberFieldsContainer>
                                <InputContainer>
                                    <Heading size="h6" weight="500">Confirmed Cases</Heading>
                                    <Input secondary type="number" min="0"  name="infected" placeholder="Confirmed Cases" value={zoneUpdatedState.infected} onChange={updateInputValue} required />
                                </InputContainer>
                                <InputContainer>
                                    <Heading size="h6" weight="500">Deaths</Heading>
                                    <Input secondary type="number" min="0"  name="dead" placeholder="Deaths" value={zoneUpdatedState.dead} onChange={updateInputValue} required/>
                                </InputContainer>
                                <InputContainer>
                                    <Heading size="h6" weight="500">Recovered Cases</Heading>
                                    <Input secondary type="number" min="0"  name="recovered" placeholder="Recovered Cases" value={zoneUpdatedState.recovered} onChange={updateInputValue} required />
                                </InputContainer>
                                <InputContainer>
                                    <Heading size="h6" weight="500">Active Cases</Heading> 
                                    <Input secondary type="number" min="0"  name="sick" placeholder="Active Cases" value={zoneUpdatedState.sick} onChange={updateInputValue} required />
                                </InputContainer>
                                
                            </NumberFieldsContainer>
                            {
                            zonesType === "national" ?
                                <FlexContainer>
                                    <Heading size="h6">Risky Area <input type="checkbox" checked={zoneUpdatedState.is_risky || ""} onChange={switchValue} required /> </Heading>
                                </FlexContainer>
                                : null
                        }
                            
                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                            <CustomButton selected onClick={handleUpdate} className={!valChanged ? "d-none" : "d-block" } >Save Changes</CustomButton>{' '}
                            <CustomButton onClick={() => setModal(!modal)}>Cancel</CustomButton>
                            </ModalFooter>
                        </Modal>
                    </div>
                    
                    {
                        status !== "a" ?
                        <DropdownItem className="dropdown-item"
                        onClick={handleAccept}> Accept </DropdownItem> : 
                        <DropdownItem className="dropdown-item"
                        onClick={handlePending}> Reset as Pending </DropdownItem>
                    }
                    {
                        status !== "r" ?
                        <DropdownItem className="dropdown-item"
                        onClick={handleReject}
                        > Reject </DropdownItem> : 
                        <DropdownItem className="dropdown-item"
                        onClick={handlePending}> Reset as Pending </DropdownItem>
                    }
                    
                    
                </div>
                </div>
                </div>
            </Td>
        </Tr>
    )
}