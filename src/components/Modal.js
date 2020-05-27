import React from 'react'

const Modal = ({image}) => {
    return (
        <div className = 'mySlides'>
            <img src = {image.link} className = 'slide-image cursor' alt = 'selected imagur'/>
        </div>
    )
}

export default Modal
