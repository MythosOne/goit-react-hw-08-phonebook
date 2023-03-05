import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

const Contacts = () => {
    
    return (
        <>
            <ContactForm />
            <ContactList />
            <Filter />
        </>
    );
};

export default Contacts;