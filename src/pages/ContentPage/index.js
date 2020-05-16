import React,{useState,useEffect} from 'react'
import BasePage from '../BasePage'
import styled from 'styled-components'
import Header from './components/Header'
import Article from './components/Article'
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
    const [articles,setArticles] = useState([])
    const [blurState,setBlurState] = useState(false)
    let Articles = useSelector(state => state.content)
    Articles = Articles.filter(item => item.selected)[0]
    console.log(Articles)
    useEffect(()=>{
        const fetch = async () =>{
            setBlurState(true)
            setLoading(true)
            await Articles.fetch().then(res => setArticles(res.results))
            setLoading(false)
            setBlurState(false)
        }
        fetch()
    },[Articles,])
    return (
    <>
        <Header/>
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
                totalSlides={articles.length}
                visibleSlides={3}
            >
            <Slider>
            {
                    articles.map(article => 
                        <Slide>
                            {console.log("article",article)}
                            <Article 
                                pk={article.pk}
                                title={article.title}
                                file={article.file}
                                content={article.content}
                                user={article.user}
                                date_posted={article.date_posted}
                                status={article.status}
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