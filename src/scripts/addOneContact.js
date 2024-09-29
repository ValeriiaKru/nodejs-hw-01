import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContacts = createFakeContact();
        const updatedContacts = [...existingContacts, newContacts];
        await writeContacts(updatedContacts);
    } catch (error) {
        console.error('Failed to add contacts', error);
    }
};

addOneContact();
