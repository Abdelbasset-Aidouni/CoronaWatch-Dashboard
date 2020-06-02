import React from 'react'
import './style.css'

export default ({name}) =>(
    <>
    <input type="checkbox" name={name} id="switch" style={{margin:".2rem .4rem"}} />
    <label for="switch">Toggle</label>
    </>
)