import React from 'react'

const Images = ({image}) => {
    return (
        <div className = 'image-div'>
            <img src = {image.link} className = 'image' alt = 'selected imagur'/>
        </div>
    )
}

export default Images
