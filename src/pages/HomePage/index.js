import React,{useState,useEffect} from 'react'
import BasePage from '../BasePage'
import styled, { css } from 'styled-components'
import Heading from '../../components/Heading'
import SvgIcon from '../../components/SvgIcon'
import StatusUp from '../../assets/icons/up.svg'
import StatusDown from '../../assets/icons/down.svg'
import { PrimaryTheme } from '../../global/Themes'
import ReactTooltip from "react-tooltip"
import data from '../../data/general_info.json'
import Map from './map'
import LeafMap from './map/leaf'
import {getNationalZones} from '../../services/statistics'



const CardsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:200px;
    width:100%;
    

`
const StatusProgressIcon = styled(SvgIcon)`

    ${props => props.danger && css`
    filter: invert(49%) sepia(26%) saturate(1348%) hue-rotate(314deg) brightness(101%) contrast(100%);
    `}

`
const ProgressText = styled.p`
    color:${props => props.danger ? "#FF5D5D":"#61DD66"};
    font-size:.875rem;
    font-weight:500;
    margin-left:.2rem;
    margin-bottom:0;
`


const InfoCard = styled.div`
    display:flex;
    flex-direction:column;
    width:23%;
    justify-content:space-between;
    height:100%;
    border:none;
    border-radius:5px;
    padding:1.4rem 1.6rem;
    background-color:white;
`
const MainContentContainer = styled.div`
    display:flex;
    width:65%;
    flex-direction:column;
    margin: .4rem 1.2rem;
`
const ProgressContainer = styled.div`
    display:flex;
    align-items:flex-start;
`
const MapContainer = styled.div`
    width:100%;
    height:300px;
    overflow:hidden;
    margin-top:1rem;
    border-radius:5px;
    background-color:white;
    
    & svg {
        display: inline-block;
        vertical-align: middle;
    }
`
const EventsContainer = styled.div`
    display:flex;
    width:25%;
    flex-direction:column;
    margin: .4rem 1.2rem;
    background-color:white;
    border-radius:5px;
    height:400px;
`

const Wrapper = styled.div`
    display:flex;
`

const HomeContainer = () =>{
    const [tooltip,setTooltip] = useState("")
    const [statData,setStatData] = useState([])


    useEffect(() =>{
        
            const _wilayas = async () => {
                await getNationalZones().then(res => {
                    if (res.status === 200){
                        res.json().then(json =>{setStatData(json.results)} )
                    }else{
                        window.$.alert({title:"Failed to fetch Statistics Data ",content:"please refresh the page or contact the administration and help us get the app to work correctly"})
                    }
                })
                
            }
            _wilayas()
        },[])
    return (
        <Wrapper>
        <MainContentContainer>
            <CardsContainer>
            
                <InfoCard>
                    <Heading size="h3"> Infected </Heading>
                    <Heading
                        size="h1"
                        weight="600"
                    >
                        {statData.reduce((total,item)=> total + item.infected,0)}
                    </Heading>
                    <ProgressContainer>
                        <StatusProgressIcon
                            url={true ? StatusUp : StatusDown}
                            width="10px"
                            height="20px"
                            size="contain"
                            danger={true}
                        />
                        <ProgressText
                            danger= {true}
                        > 0.39% </ProgressText>
                    </ProgressContainer>
                </InfoCard>

                <InfoCard>
                    <Heading size="h3"> Sick </Heading>
                    <Heading
                        size="h1"
                        weight="600"
                    >
                        {statData.reduce((total,item)=> total + item.sick,0)}
                    </Heading>
                    <ProgressContainer>
                        <StatusProgressIcon
                            url={true ? StatusUp : StatusDown}
                            width="10px"
                            height="20px"
                            size="contain"
                            danger={true}
                        />
                        <ProgressText
                            danger= {true}
                        > 0.39% </ProgressText>
                    </ProgressContainer>
                </InfoCard>

                <InfoCard>
                    <Heading size="h3"> Recovered </Heading>
                    <Heading
                        size="h1"
                        weight="600"
                    >
                        {statData.reduce((total,item)=> total + item.recovered,0)}
                    </Heading>
                    <ProgressContainer>
                        <StatusProgressIcon
                            url={true ? StatusUp : StatusDown}
                            width="10px"
                            height="20px"
                            size="contain"
                            danger={true}
                        />
                        <ProgressText
                            danger= {true}
                        > 0.39% </ProgressText>
                    </ProgressContainer>
                </InfoCard>

                <InfoCard>
                    <Heading size="h3"> Death </Heading>
                    <Heading
                        size="h1"
                        weight="600"
                    >
                        {statData.reduce((total,item)=> total + item.dead,0)}
                    </Heading>
                    <ProgressContainer>
                        <StatusProgressIcon
                            url={false ? StatusUp : StatusDown}
                            width="10px"
                            height="20px"
                            size="contain"
                            danger={false}
                        />
                        <ProgressText
                            danger= {false}
                        > 0.39% </ProgressText>
                    </ProgressContainer>
                </InfoCard>
          
                





            </CardsContainer>
            <MapContainer>
                <LeafMap setTooltip={setTooltip}/>
                <ReactTooltip>{tooltip}</ReactTooltip>
            </MapContainer>
            
        </MainContentContainer>
        <EventsContainer></EventsContainer>
        </Wrapper>
    )
}







export default () => <BasePage> <HomeContainer/> </BasePage>