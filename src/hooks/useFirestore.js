import { useState, useEffect } from 'react';
import { projectFireStore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFireStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
            let documents = [];
            snapshot.forEach((eachDocument) => {
                documents.push({...eachDocument.data(), id: eachDocument.id});
            });
            setDocs(documents);
        });
        return () => unsub();
        
    }, [collection]);

    return { docs };
};

export default useFirestore;