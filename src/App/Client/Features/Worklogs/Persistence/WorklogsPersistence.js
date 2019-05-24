
import { mapImpl } from 'App/Client/Common/Utilities/ClientPersistence';
import { saveWorklogOnFirestore } from './WorklogsFirestorePersistence';

export const saveWorklog = mapImpl({
    'firestore': saveWorklogOnFirestore
});