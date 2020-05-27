import React, { useEffect } from 'react'
import ImageList from '../components/ImageList';
import Header from '../components/Header';
import {connect} from 'react-redux'
import {addImage} from '../actions'
import config from '../config'

const ImgurUpload = (props) => {

    const uploadImage = (e) => {
        let imageFile = e.target.files[0]
        const formData = new FormData()
        formData.append('image', imageFile)
        fetch(`${config.IMAGE_UPLOAD}`, {
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
            props.addImage(images)
            let slides = document.getElementsByClassName('mySlides');
            openModal(slides.length)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        const items = {...sessionStorage}
        let images = []
        Object.values(items).forEach(item => {
            images.push(JSON.parse(item))
        })
        if(images.length)
            props.addImage(images)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    let slideIndex = 1
    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName('mySlides');
        let dots = document.getElementsByClassName('demo');
        if (n > slides.length)
            slideIndex = 1
        if (n < 1)
            slideIndex = slides.length
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].className += ' active';
      }

    const openModal = (index) => {
        document.getElementById('myModal').style.display = 'block';
        document.getElementById('myColumnn').style.display = 'none';
        showSlides(slideIndex = index)
    }
    
    const closeModal = () => {
        document.getElementById('myModal').style.display = 'none';
        document.getElementById('myColumnn').style.display = 'flex';
    }

    const plusSlides = (index) => {
        showSlides(slideIndex += index);
    }

    const currentSlide = (index) => {
        showSlides(slideIndex = index + 1);
    }

    return (
        <>
            <Header upload = {uploadImage}/>
            {props.images.length &&
            <ImageList images = {props.images}
                currentSlide = {currentSlide}
                openModal = {openModal}
                closeModal = {closeModal}
                plusSlides = {plusSlides}/>}
        </>
    )
}

const mapStateToProps = (state) => ({
    images: state.images
})

const mapDispatchToProps = (dispatch) => ({
    addImage: image => (dispatch(addImage(image))),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImgurUpload)
