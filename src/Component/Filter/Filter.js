import React from 'react';
import styles from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../Redux/Phonebook/phonebook-actions';

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
    value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
