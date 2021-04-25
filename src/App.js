import { connect } from 'react-redux';
import PhonebookForm from './Components/Phonebook';
import ContactsFilter from './Components/ContactsFilter';
import Contacts from './Components/Contacts';

const App = () => (
    <main>
        <PhonebookForm />
        <ContactsFilter />
        <Contacts />
    </main>
);

export default App;
