import React from 'react'
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

const HiddenNextButton = styled(ButtonNext)`
    display:none;
`
const HiddenBackButton = styled(ButtonBack)`
    display:none;
`
// const CustomCarouselProvider = styled

const ContentWrapper = () =>{
    let Articles = useSelector(state => state.content)
    Articles = Articles.filter(item => item.selected)[0]
    return (
    <>
        <Header/>
        <ArticlesWrapper>
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
                totalSlides={Articles.data.length}
                visibleSlides={3}
            >
            <Slider>
            {
                    Articles.data.map(article => 
                        <Slide>
                            <Article 
                                title={article.title}
                                video={article.video ? article.video : false}
                                image={article.image ? article.image : false}
                                text={article.text}
                                user={article.user}
                                userImage={article.userImage}
                                date={article.date}
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
    </>
    
)}

export default () => <BasePage> <ContentWrapper/> </BasePage>