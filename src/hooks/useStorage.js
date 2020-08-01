import { useState, useEffect } from 'react';
import { projectStorage, projectFireStore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);    // Progress of Upload
    const [error, setError] = useState(null);       // Errors from upload
    const [url, setUrl] = useState(null);           // URL of uploaded image

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFireStore.collection('images');

        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const imageURL = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({
                url: imageURL, 
                createdAt
            })
            setUrl(imageURL);
        });
        
    }, [file]);

    return {progress, url, error};
}
export default useStorage;
