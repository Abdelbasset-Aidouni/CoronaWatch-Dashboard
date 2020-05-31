import React from 'react'
import './style.css'

export default ({name}) =>(
    <>
    <input type="checkbox" name={name} id="switch" />
    <label for="switch">Toggle</label>
    </>
)