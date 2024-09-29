import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => { 
    try {
        writeContacts([]);
    } catch (error) {
        console.error('Failed to remove contacts', error);
    }

};

removeAllContacts();
