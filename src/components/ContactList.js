import react from "react";
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const contactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} />
        );
    });
    return(
        <div className="ui celled list">
            {contactList}
        </div>
    );
}

export default ContactList;