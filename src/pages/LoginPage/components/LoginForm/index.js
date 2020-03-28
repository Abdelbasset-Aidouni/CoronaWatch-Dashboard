import React,{useState}  from 'react'
import TextField from '../../../../components/TextField'
import Button from '../../../../components/Button'
import Container from '../../../../components/Container'
import CenteredContent from './style'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../../../../store/actions'
import {useHistory} from 'react-router-dom'
import {switchTab} from '../../../../store/actions'





const CenteredContentWithMargin = styled(CenteredContent)`
    margin-bottom:1.2rem;
`




export default () =>{
    const history = useHistory()
    const dispatch = useDispatch()
    const [user,setUser] = useState({
        username:"",
        password:""
    })
    const loggedIn = useSelector(state => state.auth.loggedIn)
    const menu =  useSelector(state => state.menu)
    console.log(loggedIn)

    
    const handleChange = (e) =>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
        console.log(name,value)
    }
    const handleSubmit = ()=>{
        console.log("clicked")
        if (user.username && user.password){
            dispatch(login(user))
            dispatch(switchTab("/"))
            history.replace('/')
        }
    }

    return (
    <Container>
        
        <CenteredContentWithMargin 
        width="100"
        >
            <TextField
                type={'text'}
                name={"username"}
                placeholder={"Username"}
                fontSize="1.125rem"
                width="100%"
                onChange={handleChange}
            />
            <TextField
                type={'password'}
                name={"password"}
                placeholder={"Password"}
                fontSize="1.125rem"
                width="100%"
                onChange={handleChange}
            />
        </CenteredContentWithMargin>

    
    <CenteredContent width="100">
        <Button
            onClickHandler={handleSubmit}
            text="Login"
            color="secondary"
            size="sm"
            width='50%'
            
        />
    </CenteredContent>
    <CenteredContent>
          <p className="m-0 mt-1 p-0 small">hint :> <span className="text-primary">admin</span>  </p>
    </CenteredContent>
    </Container>
)
}
