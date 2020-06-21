import React,{useState,useEffect} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import $ from "jquery"
import validate from "jquery-validation"
import {
    ModalContainer,
    ModalWrapper,
    TextField,
    FormContainer,
    Col,
    Label,
    DateInputContainer,
    BirthDateField,
    Header,
    CloseBtn
} from './style'
import Button from '../../../ContentPage/components/Button'
import '../../../../components/CustomSelect/index'
import SvgIcon from '../../../../components/SvgIcon'
import Heading from '../../../../components/Heading'
import styled from 'styled-components'
import Calendar from "../../../../assets/icons/calendar-1.png"
import {createUser} from '../../../../services/accounts/users'
import {setUpSelectField} from '../../../../components/CustomSelect' 

$.validate = validate



const ButtonSubmit = styled(Button)`
    margin-top:1rem;
    margin-left:1.6rem;
    margin-bottom:1rem;
`

const DateInput = styled(TextField)`
    flex-basis:27%;
    max-width:${props => `${props.basis}`};
    padding-left:.6rem;
    padding-right:.6rem;
    text-align:center;
    font-size:1.2rem;
    font-weight:700;
    &::placeholder{
        font-size:1.2rem;
        font-weight:700;
        text-align:center;
    }
`
const HiddenDatePicker = styled(DatePicker)`
display:none;
`
export default () =>{
    const [startDate, setStartDate] = useState(new Date(1995,10,19));
    
    useEffect(()=>{
        setUpSelectField()
    },[])

    $.validator.addMethod("minAge", function(value, element) {
        var inputDate = new Date(value);
        var ageDifMs = Date.now() - inputDate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        let age     = Math.abs(ageDate.getUTCFullYear() - 1970);
        console.log()
        if (age >= 20)
            return true;
        return false;
    }, "Age must be at least 20 years !");
    $('#addUserForm').validate({
        submitHandler: function(form) {
            formSubmitionHandler(form)
          },
          rules: {
            birth_date: {
                required: true,
                date: true,
                minAge: true
            }
        }
    })
    const formSubmitionHandler = async (form) =>  {
        let data = $(form).serializeArray()
        let formData = {};
        data.forEach(function (value,index){

            formData[value.name] = value.value
            if (value.name === "password") formData["password2"] = value.value
        })
        formData['is_active'] = true
        
        console.log(formData)
        await createUser(formData)
            .then(res => {
                if (res.status === 200){
                    window.$.alert({title:"Success",content:'User Created Successfully'})
                    $('#modalWrapper,#addUserModal').fadeToggle('slow')
                }else{
                    window.$.alert({title:"Failed",content:'Sorry an Error Occured, Try Later'})
                    $('#modalWrapper,#addUserModal').fadeToggle('slow')
                }
            } )
            
    }
    return (
    <>
        <ModalWrapper id="modalWrapper"/>
        <ModalContainer id="addUserModal">
            <Header>
            <Heading size="h3">Add User</Heading>
            <CloseBtn onClick={() => $('#modalWrapper,#addUserModal').fadeToggle('slow')} >&times;</CloseBtn>
            </Header>
            
            <hr style={{margin:"0"}} />
            <FormContainer id="addUserForm">
                
                <Col>
                    <Label>First Name</Label>
                    <TextField name="first_name" required/>
                    <Label>Email</Label>
                    <TextField type="email" name="email" required />
                    <Label>Birth date</Label>
                    <TextField
                        required
                         
                        name="birth_date"
                        type="date" 
                        // value={`${startDate.getFullYear()}-${startDate.getMonth() < 10 ? "0" : ""}${startDate.getMonth() + 1}-${startDate.getDate() < 10 ? "0" : ""}${startDate.getDate()}`}
                    />
                    {/* <input 
                    required
                    hidden 
                    name="birth_date"
                    type="date" 
                    value={`${startDate.getFullYear()}-${startDate.getMonth() < 10 ? "0" : ""}${startDate.getMonth() + 1}-${startDate.getDate() < 10 ? "0" : ""}${startDate.getDate()}`} /> */}
                    {/* <BirthDateField>
                        <DateInputContainer>
                            <DateInput disabled type="number" max="31" placeholder="DD" basis="25%" value={startDate.getDate()} />
                            <DateInput disabled type="number" max="12" placeholder="MM" basis="25%" value={startDate.getMonth() + 1} />
                            <DateInput disabled type="number" max="9999" placeholder="YYYY" basis="40%" value={startDate.getFullYear()}/>
                        </DateInputContainer>
                        <HiddenDatePicker 
                        id="datePicker" 
                        selected={startDate} 
                        onChange={date => setStartDate(date)} 
                        showYearDropdown
                        yearDropdownItemNumber={20}
                        scrollableYearDropdown
                        />
                        <SvgIcon
                        url={Calendar}
                        size="contain"
                        width="30px"
                        height="30px"
                        onClick={() => window.$('#datePicker').click()}
                        pointer
                        />
                            
                    </BirthDateField> */}
                    
                    
                </Col>
                <Col>
                    <Label>Last Name</Label>
                    <TextField name="last_name" required/>
                    <Label>Password</Label>
                    <TextField type="password" name="password" required />
                    <Label>Role</Label>
                    <div className="custom-select" style={{width:"100%"}}>
                        <select name="role" required>
                            <option value="5" >Admin</option>
                            <option value="2" >Moderator</option>
                            <option value="4" >Health Agent</option>
                            <option value="3" >Writer</option>
                            <option value="1" >Visitor</option>
                        </select>
                    </div>
                    
                </Col>
                
            </FormContainer>
            <ButtonSubmit  active large onClick={() => $('#addUserForm').submit()}>Create User</ButtonSubmit>
            
        </ModalContainer>
    </>
    
)
}


