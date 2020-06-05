import React,{useState} from 'react'
import $ from 'jquery'

export default ({options,name,selected,onChangeHandler}) =>{
    const [options_,setOptions] = useState(selected ? options.filter(option => option.wilaya === selected) : options)
    return (
    
    <div 
    className="custom-select" 
    style={{backgroundColor:"white"}}
    >
        <select 
        onChange={() => console.log('select changed')} 
        // onClick={onChangeHandler} 
        name={name} >
            {console.log("selected value : ", selected)}
            {
                    options_.map(option => <option value={option.value} >{option.display}</option>  )
                
            }
            
        </select>
    </div>
)}



