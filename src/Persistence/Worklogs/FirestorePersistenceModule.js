
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const saveWorklog = worklog => {
    const db = firebase.firestore();
    return db.collection('worklogs').add(worklog);
};

//  todo: filter by user id
export const loadWorklogs = (date) => {
    const db = firebase.firestore();
    return new Promise((resolve, reject) => {
        db.collection('worklogs')
            .where("logDate", "==", date)
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

export const getTotalLoggedMinsInDate = (date) => {
    const db = firebase.firestore();
    return new Promise((resolve, reject) => {
        db.collection('worklogs')
            .where("logDate", "==", date)
            .get()
            .catch(reject)
            .then(querySnapshot => {
                let totalLoggedMins = 0;
                querySnapshot.docs.forEach(doc => {
                    totalLoggedMins += doc.data().loggedMins;
                });

                resolve(totalLoggedMins);
            });
    });
};

const FirestorePersistenceModule = {
    saveWorklog,
    loadWorklogs,
    getTotalLoggedMinsInDate,
}

Object.defineProperty(
    FirestorePersistenceModule,
    'NAME',
    { get: () => 'FirestorePersistenceModule' }
);

export default FirestorePersistenceModule;