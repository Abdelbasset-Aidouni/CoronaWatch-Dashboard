import React,{useState} from 'react'
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
    padding:.2rem .4rem;
    & svg {
        display: inline-block;
        vertical-align: middle;
    }
`




const HomeContainer = () =>{
    const [tooltip,setTooltip] = useState("")
    return (
        <MainContentContainer>
            <CardsContainer>
            {data.data.map(info =>(
                <InfoCard>
                    <Heading size="h3"> {info.title}</Heading>
                    <Heading
                        size="h1"
                        weight="600"
                    >
                        {info.count}
                    </Heading>
                    <ProgressContainer>
                        <StatusProgressIcon
                            url={info.is_good ? StatusUp : StatusDown}
                            width="10px"
                            height="20px"
                            size="contain"
                            danger={info.is_good ? false : true}
                        />
                        <ProgressText
                            danger={info.is_good ? false : true}
                        > 0.39% </ProgressText>
                    </ProgressContainer>
                </InfoCard>
            ))}
                
            </CardsContainer>
            <MapContainer>
                <Map setTooltip={setTooltip}/>
                <ReactTooltip>{tooltip}</ReactTooltip>
            </MapContainer>
            
        </MainContentContainer>
    )
}







export default () => <BasePage> <HomeContainer/> </BasePage>