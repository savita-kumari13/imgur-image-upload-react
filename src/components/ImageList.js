import React from 'react'
import Images from './Images'
import Modal from './Modal'
import DemoCursor from './DemoCursor'

const ImageList = (props) => {
    return (
        <>
            <div id = 'myColumnn' className = 'columnn'>
                {props.images.map((image, index) => {
                    return <Images key= {image.id} image = {image} index = {index} openModal = {props.openModal}/>
                })}
            </div>
            <div id = 'myModal' className = 'modal'>
                <span className = 'close cursor' onClick = {props.closeModal}>&times;</span>
                <div className = 'modal-content'>
                    {props.images.map((image, index) => {
                        return <Modal key = {image.id} image = {image} index = {props.index}/>
                    })}
                    <button className = 'prev' onClick = {() => props.plusSlides(-1)}>&#10094;</button>
                    <button className = 'next' onClick = {() => props.plusSlides(1)}>&#10095;</button>
                    <div className = 'column'>
                        {props.images.map((image, index) => {
                            return <DemoCursor key = {image.id} image = {image} index = {index} currentSlide = {props.currentSlide}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ImageList
