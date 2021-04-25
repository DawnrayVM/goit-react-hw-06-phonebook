import { createReducer } from '@reduxjs/toolkit';
import actions from '../redux/actions';

const contactsReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) =>
        Object.values(
            state.map(({ name }) => name).includes(payload.name)
                ? (alert('Contact with such name already exists'), [...state])
                : [...state, payload],
        ),
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [actions.findContact]: (state, { payload }) => payload,
});

export default { contactsReducer, filterReducer };
