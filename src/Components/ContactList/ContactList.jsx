import React, { useContext } from 'react'
import './ContactList.css'
import './../../global.css'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
function ContactList({ searchQuery }) { 
    const {
        contactState,
        loadingContactsState,        
    } = useContext(ContactListContext) 
    
    if (loadingContactsState) {
        return (
            <div className='loading_message'>
                <img className='loading_img' src='/logomiausapp.jpg' alt="loading" />
                <p className='loading_text'>Cargando...</p>
            </div>
        )
    }

    const filteredContacts = contactState.filter((contact) =>
        contact.contact_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    if (filteredContacts.length === 0) {
        return <div className="no_results">No se encontraron contactos</div>
    }

    return (   
        <div className='contact_list'>
            {filteredContacts.map((contact) => (
                <Link 
                    key={contact.contact_id} 
                    to={`/chat/${contact.contact_id}/messages`} 
                    className="contact_item"
                >
                    
                    <div className='contact_avatar'>
                        <img src={contact.contact_avatar} alt={contact.contact_name} />
                    </div>
                    <div className='contact_name_last'>
                        <div className='name_last'>
                            <h2 className='contact_name'>{contact.contact_name}</h2>  
                            <p className='last_message'>{contact.last_message_content}</p>   
                        </div>
                        <div className='date_unseen'>
                            <p className='contact_date'>
                                {new Date(contact.last_message_created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                            <div className='unseen'>
                                {contact.contact_unseen_messages > 0 && (
                                    <span className='messages_unseen'>
                                        {contact.contact_unseen_messages}
                                    </span>
                                )}
                            </div>
                        </div>                                
                    </div>   
                </Link>
            ))}
        </div>
    )
}   
export default ContactList;