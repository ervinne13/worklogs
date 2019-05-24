
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const saveWorklogOnFirestore = worklog => {
    const db = firebase.firestore();   
    return db.collection('worklogs').add(worklog);
};