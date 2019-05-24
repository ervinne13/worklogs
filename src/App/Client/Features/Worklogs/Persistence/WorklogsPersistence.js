
import { mapImpl } from 'App/Client/Common/Utilities/ClientPersistence';
import { saveWorklogToFirestore, loadWorklogsFromFirestore } from './WorklogsFirestorePersistence';

export const saveWorklog = mapImpl({
    'firestore': saveWorklogToFirestore
});

export const loadWorklogs = mapImpl({
    'firestore': loadWorklogsFromFirestore
});