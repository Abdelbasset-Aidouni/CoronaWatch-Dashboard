import React from 'react'
import Style from './style'
export default ({color,style,width,size,onClickHandler,text}) =>(
    <Style
        size={size}
        width={width}
        color={color}
        onClick={onClickHandler}
    >
        {text}
    </Style>
)