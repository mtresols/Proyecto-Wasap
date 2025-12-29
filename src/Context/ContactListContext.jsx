/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../services/contactService";


export const ContactListContext = createContext()

const ContactListContextProvider = () => {    
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)


    function loadContactList (){
        setLoadingContactState(true)
        setTimeout(
            function () {                
                const contact_list = getContactList()
                setContactState(contact_list)
                setLoadingContactState(false)
            },
            2000
        )
        
    }

    function getContactById(contact_id){   
        for(const contact of contactState){
            if(Number(contact.contact_id) === Number(contact_id)){
                return contact 

            }
        }
    }   

function updateContactById(contact_to_update, contact_id){
        const new_contact_list = contactState.map(
            (contact) => {
                if(Number(contact.contact_id) === Number(contact_id)){
                    return contact_to_update
                }
                return contact
            }
        )
        setContactState(new_contact_list)
    }
        
    useEffect (
        loadContactList,
        []
    )

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
        getContactById,
        updateContactById
    }



    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}


export default ContactListContextProvider
