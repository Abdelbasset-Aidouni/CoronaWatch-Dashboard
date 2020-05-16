import styled from 'styled-components'
import $ from "jquery"
export const PageWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 1rem 1.2rem;
    margin-left:4rem;
`
export const ArticleContainer = styled.div`
    height:80vh;
    overflow-y:scroll;
    flex-basis:60%;
    max-width:60%;
    scrollbar-width: none;
    /* width */
    &::-webkit-scrollbar {
    width: 10px;
    display:none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`

export const InfoContainer = styled.div`
    flex-basis:30%;
    max-width:30%;
    margin-right:3rem;
`
export const ActionsContainer = styled.div`
    margin-top:3rem;
    display:flex;
    justify-content:space-around;
`

$(document).ready(function (){
    $("#articleContainer").css("height",$(document).height() - $('#navBar').height() - 60)
})