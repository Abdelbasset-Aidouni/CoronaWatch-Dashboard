import styled from 'styled-components'


const AccountsContainer = styled.div`
    margin:.8rem 2.4rem;
    display:flex;
    flex-direction:column;
    flex-grow:8;
`

const TableContainer = styled.div`
    background-color:white;
    border-radius: 5px;
    border:none;
    padding:.8rem 1.2rem;
    
`

const HeadingFilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    width:25%;
`


const FilterButton = styled.button`
    border:none;
    border-radius:5px;
    padding:.1rem .2rem;
    background-color:#EBEBEB;
    outline:none;
    cursor:pointer;
    margin-right:.4rem;
`
const FilterButtonContainer = styled.div`
    display:flex;
    align-items:baseline;
`


const LoadMoreButtonContainer = styled.div`
    border-radius:50%;
    background-color:#F7F7F7;
    border:none;
    cursor:pointer;
    padding:.5rem;
`

const Header = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
`

export default AccountsContainer
export {
    AccountsContainer,
    TableContainer,
    HeadingFilterContainer,
    FilterButton,
    FilterButtonContainer,
    LoadMoreButtonContainer,
    Header
}