import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../Redux/Phonebook/phonebook-actions';
import { phonebookSelectors } from '../../Redux/Phonebook';

import styles from '../Filter/Filter.module.css';

const Filter = ({ onChange, value }) => {
    return (
        <label>
            Find contacts by name
            <input
                className={styles.filter__input}
                type="text"
                name="search"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: event => dispatch(changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
