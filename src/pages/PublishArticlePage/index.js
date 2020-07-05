import React,{useState} from 'react'
import $ from 'jquery'
import { Progress } from 'reactstrap';
import BasePage from '../BasePage'
import Editor from './components/Editor'
import {Wrapper,Input,TitleInputContainer,SubmitButtonContainer,ProgressBarContainer} from './style'
import Heading from '../../components/Heading'
import Button from '../ContentPage/components/Button'
import { publishPost } from './../../services/content'
import {useSelector,useDispatch} from 'react-redux'

import {setUnfetched} from './../../store/actions'

const handleInputFieldChange = (event, name,callback) => {
    const { target } = event;
    callback(preState => ({
      ...preState,
    [name]: target.value
    }));
  };


const PublishPage = () => {
    const [progressBar,setProgressBar] = useState(0)
    const [showProgress,setShowProgress] = useState(false)
    const dispatch = useDispatch()
    let Articles = useSelector(state => state.content)
    Articles = Articles.filter(item => item.selected)[0]

    const onSubmitHandler = async (e) =>{
        e.preventDefault()
        const data = {
            title:e.target.title.value,
            content:e.target.content.value
        }
        let message = ""
        if (data["title"] !== "" && data["content"] !== ""){
            await publishPost(data).then(res =>{
                if (res.status === 201){
                    dispatch(setUnfetched("redactors"))
                    $.alert({title:"Success",content:`Post ${data["title"]} created Successfully `})
                }else{
                    $.alert({title:"Failed",content:`Oops!!, An Error Occurred, please check your data and try again`})
                }
            });
        }else{

            if (data["title"] === "") message += " <b>&nbsp title</b> Cannot be Empty </br>"
            if (data["content"] === "") message += "<b>&nbsp Post Content</b> Cannot be Empty </br>" 
            $.alert({type:"orange",icon:"fas fa-exclamation-triangle",title:" <strong>Validation Error</strong>",content:`<br/>please check your data and try again<br>` + message})        
        }
    }

    return (
        <>
        <Wrapper onSubmit={onSubmitHandler} method="POST">
            <TitleInputContainer>
                <Heading size="h4" >Title : </Heading>
                <Input 
                type="text" 
                name="title" 
                placeholder="ex : 10 Advices to keep yourself ..." /> 
            </TitleInputContainer>
            
            <Editor progressBarValueHandler={setProgressBar} progressBarDisplayHandler={setShowProgress} />
            <SubmitButtonContainer>
                <Button active large >Submit</Button>
            </SubmitButtonContainer>
            
        </Wrapper>
        <ProgressBarContainer  active={showProgress}>
            <Heading size="h4">Uploading Image ...</Heading>
            <Progress className="w-100" color="info" value={progressBar} > {progressBar}% </Progress>
        </ProgressBarContainer>
        </>
    )
}











export default () => <BasePage> <PublishPage/> </BasePage>