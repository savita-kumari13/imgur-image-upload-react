import React from 'react'

const DemoCursor = ({image, index, currentSlide}) => {
    return (
        <img src = {image.link} className = 'demo cursor' alt = 'selected imagur' onClick = {() => currentSlide(index)}/>
    )
}

export default DemoCursor
