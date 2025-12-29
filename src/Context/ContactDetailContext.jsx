/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */

// eslint-disable-next-line no-unused-vars
import { createContext, useEffect, useState, useContext } from "react";
import { Outlet, useParams} from "react-router";
import { ContactListContext } from "./ContactListContext";

export const ContactDetailContext = createContext();

const ContactDetailContextProvider = () => {
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id

    const { contactState, getContactById, updateContactById } = useContext(ContactListContext)
    
    const contactSelected = getContactById(contact_id)  

useEffect(() => {        
        if (contactSelected && contactSelected.contact_unseen_messages > 0) {
            
            const updatedContact = {
                ...contactSelected,
                contact_unseen_messages: 0,                
                messages: contactSelected.messages.map(msg => ({
                    ...msg,
                    message_state: 'SEEN'
                }))
            }          

            updateContactById(updatedContact, contact_id)
        }
    }, [contact_id, contactSelected]) 



    function addNewMessage (content) {
        if(!contactSelected) return;
        const new_message = { 
            message_id: (contactSelected.messages?.length || 0) + 1,
            message_content: content,
            message_state: "NOT_SEND",
            message_created_at: new Date().toISOString(),
            send_by_me: true
        }     
        
        

        const contactSelectedCloned = { ...contactSelected }      
        contactSelectedCloned.messages = contactSelected.messages ? [...contactSelected.messages] : [];      
        contactSelectedCloned.messages.push(new_message)        
        updateContactById(contactSelectedCloned, contact_id)    
    }


    const providerValues = {
        contactSelected,
        addNewMessage        
    }

        console.log(contact_id, contactState, contactSelected)

    return(
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />  
        </ContactDetailContext.Provider>
    )
    
}

export default ContactDetailContextProvider