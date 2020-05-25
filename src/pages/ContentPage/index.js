import React,{useState,useEffect} from 'react'
import BasePage from '../BasePage'
import styled from 'styled-components'
import Header from './components/Header'
import Article from './components/Article'
import SvgIcon from '../../components/SvgIcon'
import {ArticlesWrapper,TableContainer} from './style'
import {
    TableStyle,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from './components/Table'
import ArticleLine from './components/ArticleLine'
import {useSelector,useDispatch} from 'react-redux'
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";


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

    const deleteArticle = (pk) =>{
        setArticles(pre => pre.filter(item => item.pk !== pk))
    }
    return (
    <>
        <Header/>
        <ArticlesWrapper blur={blurState}>
            <TableContainer>
                <TableStyle>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Article Title</Th>
                            <Th>Publisher</Th>
                            <Th>Publish date</Th>
                            <Th>status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            articles.filter(item => !item.deleted).sort(function(a,b){
                                if (a.status === "pending") return -1
                                else if (b.status === "pending") return 1
                                else return 0
                            }).map(article => <ArticleLine 
                                article={article} 
                                deleteHandler={deleteArticle}
                                /> )
                        }
                    </Tbody>
                </TableStyle>
            </TableContainer>
        
        
         
       
        
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