import React, { Component } from 'react';
import styles from '../СontactForm/ContactForm.module.css';
import { connect } from 'react-redux';
import phonebookOperations from '../../Redux/Phonebook/phonebook-operations';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSumbit = event => {
        event.preventDefault();
        this.reset();

        if (this.checkDuplicateContacts(this.state)) {
            return;
        }
        this.props.onSubmit(this.state);
    };

    checkDuplicateContacts = newContact => {
        const { existedContacts } = this.props;
        const isDuplicateNumber = existedContacts.find(
            ({ number }) => number === newContact.number,
        );
        const isDuplicateName = existedContacts.find(
            ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
        );

        if (isDuplicateNumber || isDuplicateName) {
            alert('This number is already in contacts.');
            return true;
        }
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSumbit}>
                    <label className={styles.form__label}>
                        Name
                        <input
                            className={styles.form__input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={styles.form__label}>
                        Number
                        <input
                            className={styles.form__input}
                            type="tel"
                            name="number"
                            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                            required
                            value={this.state.number}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className={styles.form__button} type="submit">
                        Add contact
                    </button>
                </form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    existedContacts: state.phonebook.items,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: text => dispatch(phonebookOperations.addContact(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
