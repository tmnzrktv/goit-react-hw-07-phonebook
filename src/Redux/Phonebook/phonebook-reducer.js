import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
} from '../Phonebook/phonebook-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});

// const initialItems = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const items = (state = initialItems, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload);

//         default:
//             return state;
//     }
// };

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case [actions.changeFilter]:
//             return payload;

//         default:
//             return state;
//     }
// };
