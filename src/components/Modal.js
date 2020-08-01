import React from 'react'

const Modal = ({selectedImage, setSelectedImage}) => {
    const closeZoomedImage = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
    };

    return (
        <div className = "backdrop" onClick={closeZoomedImage}>
            <img src={selectedImage} alt="Enlarged Image"/>
        </div>
    )
}

export default Modal;