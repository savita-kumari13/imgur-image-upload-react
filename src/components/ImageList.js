import React from 'react'
import Images from './Images'

const ImageList = (props) => {
        return (
            <div className = 'images-list'>
                {props.images.map((image) => {
                    // console.log(image)
                    return <Images key= {image.id} image = {image}/>
                })} 
            </div>
        )
}

export default ImageList
