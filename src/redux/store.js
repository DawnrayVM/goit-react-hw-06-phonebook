// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, createReducer } from '@reduxjs/toolkit';
// import actions from '../redux/actions';
import reducers from './reducers';
// import { ADD, DELETE, FILTER } from './action-types';

const store = configureStore({
    reducer: {
        contacts: reducers.contactsReducer,
        filter: reducers.filterReducer,
    },
});
export default store;

// const contactsReducer = createReducer([], {
//     [actions.addContact]: (state, { payload }) =>
//         Object.values(
//             state.map(({ name }) => name).includes(payload.name)
//                 ? (alert('Contact with such name already exists'), [...state])
//                 : [...state, payload],
//         ),
//     [actions.deleteContact]: (state, { payload }) =>
//         state.filter(({ id }) => id !== payload),
// });

// const filterReducer = createReducer('', {
//     [actions.findContact]: (state, { payload }) => payload,
// });

// const contactsReducer = (state = [], { type, payload }) => {
//     switch (type) {
//         case ADD:
//             return Object.values(
//                 state.map(({ name }) => name).includes(payload.name)
//                     ? (alert('Contact with such name already exists'),
//                       [...state])
//                     : [...state, payload],
//             );
//         case DELETE:
//             return state.filter(({ id }) => id !== payload);
//         default:
//             return state;
//     }
// };
// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case FILTER:
//             return payload;
//         default:
//             return state;
//     }
// };
// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

// const initialState = {
//     contacts: [],
//     filter: '',
// };

// const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return {
//                 ...state,
//                 contacts: Object.values(
//                     state.contacts
//                         .map(({ name }) => name)
//                         .includes(payload.name)
//                         ? (alert('Contact with such name already exists'),
//                           [...state.contacts])
//                         : [...state.contacts, payload],
//                 ),
//             };
//         case types.DELETE:
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(({ id }) => id !== payload),
//             };

//         case types.FILTER:
//             return {
//                 ...state,
//                 filter: payload,
//             };

//         default:
//             return state;
//     }
// };
