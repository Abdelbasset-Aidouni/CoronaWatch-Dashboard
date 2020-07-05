import React from 'react'
import './style.css'

export default ({name,checked,onChange,value}) =>(
    <>
    <input type="checkbox" name={name}     id="switch" style={{margin:".2rem .4rem"}} />
    <label for="switch" class="custom-switch-label">Toggle</label>
    </>
)