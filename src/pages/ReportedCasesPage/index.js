import React,{useState,useEffect} from 'react'
import BasePage from '../BasePage'
import styled from 'styled-components'
import Case from './components/Case'
import SvgIcon from '../../components/SvgIcon'
import {ArticlesWrapper,NextButtonContainer} from './style'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import NextIcon from '../../assets/icons/next-button.svg'
import BackIcon from '../../assets/icons/back-button.svg'
import {useSelector,useDispatch} from 'react-redux'
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

import {fetchReportedCases} from './../../services/reportedCases'

const HiddenNextButton = styled(ButtonNext)`
    display:none;
`
const HiddenBackButton = styled(ButtonBack)`
    display:none;
`
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
    const [cases,setCases] = useState([])
    const [blurState,setBlurState] = useState(false)
    
    
    useEffect(()=>{
        const fetch = async () =>{
            setBlurState(true)
            setLoading(true)
            await fetchReportedCases().then(res => setCases(res.results))
            setLoading(false)
            setBlurState(false)
        }
        fetch()
    },[])
    
    return (
    <>
        
        <ArticlesWrapper blur={blurState}>
            <NextButtonContainer>
                <SvgIcon
                    url={BackIcon}
                    size="contain"
                    width="20px"
                    height="20px"
                    pointer
                    onClick={() => document.getElementById("backButton").click()}
                />
                
            </NextButtonContainer>
        
        
         <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={140}
                totalSlides={cases.length}
                visibleSlides={3}
            >
            <Slider>
            {
                    cases.sort((a,b)=> b.pk-a.pk).sort(function(a,b){
                        if (a.status === "pending" || a.status === 1) return -1
                        else if (b.status === "pending" || b.status === 1) return 1
                        else return 0
                    }).map(reportedCase => 
                        <Slide>
                            {console.log("Case",reportedCase)}
                            <Case 
                                pk={reportedCase.pk}
                                file={reportedCase.attachment}
                                description={reportedCase.description}
                                user={reportedCase.reporter}
                                date_posted={reportedCase.date_reported}
                                x={reportedCase.x}
                                y={reportedCase.y}
                                status={reportedCase.status}
                            />
                        </Slide>
                        )
                }
            </Slider>
            <HiddenNextButton id="nextButton">Next</HiddenNextButton>
            <HiddenBackButton id="backButton"></HiddenBackButton>
        </CarouselProvider>
        <NextButtonContainer>
            <SvgIcon
                url={NextIcon}
                size="contain"
                width="20px"
                height="20px"
                pointer
                onClick={() => document.getElementById("nextButton").click()}
            />
            
        </NextButtonContainer>
        
      </ArticlesWrapper>
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