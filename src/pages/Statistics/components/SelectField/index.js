import React from 'react'

export default ({options,name}) =>(
    <div className="custom-select" style={{backgroundColor:"white"}}>
        <select name={name} >
            {options.map(option => <option value={option.value} >{option.display}</option>  )}
            
        </select>
    </div>
)