import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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
        <form>
            <label>
                <span style={{cursor:"pointer"}}>
                    <input type = 'file' onChange={changeHandler} />
                    <span>+</span>
                </span>
            </label>
            <div className="output">
                { error && <div className="error">Error: {error}</div> }
                { file && <div> {file.name} </div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
};

export default UploadForm;