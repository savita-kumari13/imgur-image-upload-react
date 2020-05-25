import React from 'react'

const Images = ({image}) => {
    return (
        <img src = {image.link} className = 'image' alt = 'selected imagur'/>
    )
}

export default Images
