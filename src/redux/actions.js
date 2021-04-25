import { createAction } from '@reduxjs/toolkit';
import { ADD, DELETE, FILTER } from './action-types';

const addContact = createAction(ADD);
const deleteContact = createAction(DELETE);
const findContact = createAction(FILTER);

export default {
    addContact,
    deleteContact,
    findContact,
};

// const addContact = contact => ({
//     type: ADD,
//     payload: contact,
// });

// const deleteContact = contactId => ({
//     type: DELETE,
//     payload: contactId,
// });

// const findContact = value => ({
//     type: FILTER,
//     payload: value,
// });
