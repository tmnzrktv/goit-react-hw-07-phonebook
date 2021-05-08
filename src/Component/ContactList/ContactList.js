import React, { Component } from 'react';
import styles from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookOperations from '../../Redux/Phonebook/phonebook-operations';

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

const getVisibleItems = (allItems, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allItems.filter(item =>
        item.name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({ phonebook: { items, filter, loading } }) => ({
    items: getVisibleItems(items, filter),
    isLoadingContacts: loading,
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
