import React from 'react'
import styled from 'styled-components'
import $ from 'jquery'

const TableStyle = styled.table`
    width:100%;
    border-collapse: collapse;
    margin-bottom:1.2rem;    
`

const Tbody = styled.tbody`
    height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
`

const Th = styled.th`
    color:#8C918D;
    font-size:.875rem;
    font-weight:500;
    padding: .6rem .8rem;
    margin:1.2rem 1.6rem;
    text-align:center;
    
    &:first-child{
        text-align:left;
    }
`
const Td = styled.td`
    padding: .6rem .8rem;
    margin:1.2rem 1.6rem;
    font-size:1rem;
    /* border-bottom:solid #E8E8E8 1px; */
    text-align:center;
    color:#49514A;
    &:nth-child(2){
        font-weight:700;
        font-size:.8rem;
    }
    &:nth-child(3),&:nth-child(4){
        font-weight:500;
        font-size:.8rem;
    }
    &:last-child{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        border:none;
        margin:0;
    }
    
    &:first-child{
        font-size:.8rem;
        font-weight:500;
        text-align:left;
    }
`


const Tr = styled.tr`
    border-bottom:solid #E8E8E8 1px;
    padding: .6rem .8rem;
   
    &:last-child {
        border:none;
    }
    &:first-child{
        border-bottom:solid #E8E8E8 1px;
    }
    
`
const Thead = styled.thead`
    
`
$(document).ready(function (){
    
})
// const adjustTable = () =>{
//     var $table = $('table'),
//     $bodyCells = $table.find('tbody tr:first').children(),
//     colWidth;
    
//     console.log('jquery block executed',$bodyCells)
//     // Get the tbody columns width array
//     colWidth = $bodyCells.map(function() {
//         console.log($(this).width())
//         return $(this).width();
//     }).get();
    

//     // Set the width of thead columns
//     $table.find('thead tr').children().each(function(i, v) {
//         $(v).width(colWidth[i]);
//     }); 

//     $(window).resize(function() {
//         // Get the tbody columns width array
//         colWidth = $bodyCells.map(function() {
//             return $(this).width();
//         }).get();
        
//         // Set the width of thead columns
//         $table.find('thead tr').children().each(function(i, v) {
//             $(v).width(colWidth[i]);
//         });    
//     }).resize();
// }

export {
    Tr,
    Td,
    TableStyle,
    Th,
    Tbody,
    Thead,
    
}



