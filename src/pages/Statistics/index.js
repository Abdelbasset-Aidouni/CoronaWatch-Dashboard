import React,{useState,useEffect} from 'react'
import $ from 'jquery'
import BasePage from '../BasePage'
import styled from 'styled-components'
import Header from './components/Header'
import SvgIcon from '../../components/SvgIcon'
import {ZonesWrapper,TableContainer} from './style'
import {
    TableStyle,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from './components/Table'
import ZoneLine from './components/ZoneLine'

import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import {getInterationalZones,getNationalZones} from '../../services/statistics'

// const CustomCarouselProvider = styled
const TestLoader = styled.div`
    width:40px;
    height:40px;
    background-color:black;
    position:absolute;
    top:60%;
    left:60%;

`
const override = css`
    position:absolute;
    top:55%;
    left:45%;
`
const ContentWrapper = () =>{
    const [loading,setLoading] = useState(false)
    const [zones,setZones] = useState([{}])
    const [blurState,setBlurState] = useState(false)
    const [zonesType,setZonesType] = useState("national")
    useEffect(()=>{
        const fetch = async () =>{
            let fetcher;
            setBlurState(true)
            setLoading(true)
            if (zonesType === "national")   fetcher = getNationalZones
            else fetcher = getInterationalZones
            await fetcher().then(res => res.json().then(json => {
                if (res.status === 200){
                    setZones(json.results)
                }else $.alert({type:"danger",title:"Failed",content:"An Error Occurred while fetching data"})
            }))
            setLoading(false)
            setBlurState(false)
        }
        fetch()
    },[zonesType])

    const deleteZone = (pk) =>{
        setZones(pre => pre.filter(item => item.pk !== pk))
    }
    return (
    <>
        <Header changeZoneType={setZonesType} />
        <ZonesWrapper blur={blurState}>
            <TableContainer>
                <TableStyle>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Zone Name</Th>
                            {
                                zonesType === "national" ? <Th>is Risky</Th> : null
                            }
                            
                            <Th>Dead</Th>
                            <Th>Sick</Th>
                            <Th>Recovered</Th>
                            <Th>Infected</Th>
                            <Th>status</Th>
                            <Th></Th>
                            
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            zones.filter(item => !item.deleted).sort(function(a,b){
                                if (a.status === "p") return -1
                                else if (b.status === "p") return 1
                                else return 0
                            }).map(zone => <ZoneLine 
                                zone={zone} 
                                deleteHandler={deleteZone}
                                zonesType={zonesType}
                                /> )
                        }
                    </Tbody>
                </TableStyle>
            </TableContainer>
        
        
         
       
        
      </ZonesWrapper>
      <PulseLoader
        css={override}
        // size={60}
        color={"#13C7E9"}
        loading={loading}
        // margin={0}
        />
    </>
    
)}

export default () => <BasePage> <ContentWrapper/> </BasePage>