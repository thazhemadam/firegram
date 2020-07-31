import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg'];

    const changeHandler = (e) => {

        let selected = e.target.files[0];
        if(selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select a valid image file.');
        }

        console.log(selected)
    };

    return (
        <div>
            <input type = 'file' onChange={changeHandler} />
            <div className="output">
                { error && <div className="error">Error: {error}</div> }
            </div>
        </div>
    )
};

export default UploadForm;