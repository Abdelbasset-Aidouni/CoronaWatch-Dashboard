import BasePage from '../BasePage'
import React, { useState,useEffect } from 'react'
import {CommentsWrapper,TableContainer} from './style'
import {
    TableStyle,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from './components/Table'
import CommentLine from './components/CommentLine'
import {fetchComments} from '../../services/comments'
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";









const override = css`
    position:absolute;
    top:55%;
    left:45%;
`


const ContentWrapper = () => {
    const [comments,setComments] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const fetch = async () =>{
            setLoading(true)
            await fetchComments().then(res => setComments(res.results))
            setLoading(false)
        }
        fetch()
    },[])
    return (
        <>
        <CommentsWrapper>
            <TableContainer>
                <TableStyle>
                    <Thead>
                        <Tr>
                            <Th>User</Th>
                            <Th>Date</Th>
                            <Th>Reports count</Th>
                            <Th>Comment</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            comments.map(comment => <CommentLine comment={comment} />)
                        }
                    </Tbody>
                </TableStyle>
            </TableContainer>
        </CommentsWrapper>
        <PulseLoader
        css={override}
        // size={60}
        color={"#13C7E9"}
        loading={loading}
        // margin={0}
        />
        </>
    )
}

export default () => <BasePage> <ContentWrapper/> </BasePage>