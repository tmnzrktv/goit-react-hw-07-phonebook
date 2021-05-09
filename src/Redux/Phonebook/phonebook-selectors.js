import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;

const getFilter = state => state.phonebook.filter;

const getAllContacts = state => state.phonebook.items;

const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(item =>
            item.name.toLowerCase().includes(normalizedFilter),
        );
    },
);

export default { getLoading, getFilter, getAllContacts, getVisibleContacts };
