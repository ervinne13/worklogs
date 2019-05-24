
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const saveWorklogToFirestore = worklog => {
    const db = firebase.firestore();   
    return db.collection('worklogs').add(worklog);
};

//  todo: filter by user id
export const loadWorklogsFromFirestore = (date) => {
    const db = firebase.firestore();   
    return new Promise((resolve, reject) => {        
        db.collection('worklogs')
            .get()
            .catch(reject)
            .then(querySnapshot => {
                resolve(querySnapshot
                    .docs
                    .map(doc => doc.data())
                );
            });
    });    
};