import React from 'react'

const Images = ({image, index, openModal}) => {
    return (
        <div className = 'images-div'>
            <img src = {image.link} className = 'hover-shadow cursor' alt = 'selected imagur' onClick = {() => openModal(index+1)}/>
        </div>
    )
}

export default Images
