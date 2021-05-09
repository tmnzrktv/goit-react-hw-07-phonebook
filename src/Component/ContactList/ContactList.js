import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../../Redux/Phonebook';

import styles from '../ContactList/ContactList.module.css';

class ContactList extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        const { items, onDeleteContact } = this.props;
        return (
            <ul className={styles.contacts}>
                {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
                {items.map(({ id, name, number }) => {
                    return (
                        <li className={styles.contacts__item} key={id}>
                            <span>
                                {name} : {number}
                            </span>
                            <button
                                className={styles.contacts__button}
                                onClick={() => onDeleteContact(id)}
                            >
                                Удалить
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    items: phonebookSelectors.getVisibleContacts(state),
    isLoadingContacts: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
    fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func,
};
