import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from '../Phonebook/phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3004/';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    return axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => fetchContactsError(error));
};

const addContact = data => dispatch => {
    const contact = {
        name: data.name,
        number: data.number,
    };

    dispatch(addContactRequest());

    return axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    return axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));
};

export default {
    fetchContacts,
    addContact,
    deleteContact,
};
