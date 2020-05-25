import React, { Component } from 'react'
import ImageList from './ImageList';
import Header from './Header';
import {connect} from 'react-redux'
import {addImage} from '../actions'
import config from '../config'

class ImgurUpload extends Component {
    uploadImage = (e) => {
        let imageFile = e.target.files[0]
        const formData = new FormData()
        formData.append('image', imageFile)
        fetch('https://api.imgur.com/3/image/', {
            method: 'POST',
            headers: new Headers({
            Authorization: `Client-ID ${config.CLIENT_ID}`
            }),
            body: formData
        }).then(resp => 
            resp.json()
        ).then(res => {
            sessionStorage.setItem(res.data.id, JSON.stringify(res.data))
            let images = []
            images.push(res.data)
            this.props.addImage(images)
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        const items = {...sessionStorage}
        let images = []
        Object.values(items).forEach(item => {
            images.push(JSON.parse(item))
        })
        if(images.length)
            this.props.addImage(images)
    }
    render(){
        return (
            <>
                <Header upload = {this.uploadImage}/>
                {this.props.images.length > 0 && <ImageList images = {this.props.images}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    images: state.images
})

const mapDispatchToProps = (dispatch) => ({
    addImage: image => (dispatch(addImage(image)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImgurUpload)
