import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
    'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
    'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
    'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
    'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('phonebook/filter');

// export default {
//     addContact,
//     deleteContact,
//     changeFilter,
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
// };

// import { v4 as uuidv4 } from 'uuid';

// export const deleteContact = createAction('phonebook/delete');

// const addContact = createAction('phonebook/add', data => ({
//     payload: {
//         name: data.name,
//         number: data.number,
//         id: uuidv4(),
//     },
// }));

// const addContact = data => ({
//     type: types.ADD,
//     payload: {
//         name: data.name,
//         number: data.number,
//         id: uuidv4(),
//     },
// });

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });
