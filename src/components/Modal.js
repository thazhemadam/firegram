import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImage, setSelectedImage}) => {
    const closeZoomedImage = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
    };

    return (
        <motion.div className = "backdrop" onClick={closeZoomedImage}
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImage} alt="Enlarged View"
                initial={{ y: "-100vh"}}
                animate={{ y: "0vh"}}
            />
        </motion.div>
    )
}

export default Modal;