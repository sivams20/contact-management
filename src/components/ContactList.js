import react from "react";
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
    console.log(props);
    const contactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} />
        );
    });
    return(
        <div className="ui celled list">
            {contactList}
        </div>
    );
}

export default ContactList;