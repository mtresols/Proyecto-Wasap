/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useParams } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { ContactListContext } from '../../Context/ContactListContext'
import AddNewMessage from '../../Components/AddNewMessage/AddNewMessage.jsx'
import MessagesList from '../../Components/MessagesList/MessagesList.jsx'
import './MessagesScreen.css'
import { Link } from 'react-router'
export default function MessagesScreen() {
    const { contactSelected } = useContext(ContactDetailContext)
    const { loadingContactsState } = useContext(ContactListContext)
    return (
        <div className='messages_layout'>
            <div className='sidebar_container'>
                <ContactSidebar />
            </div>
            <div className='messages_container'>
                {
                    loadingContactsState
                        ? <div className='loading_message'>
                            <img className='loading_img' src='/logomiausapp.jpg' alt="loading" />
                            <p className='loading_text'>Cargando...</p>
                        </div>
                        : (contactSelected ? (
                            <div className='message_selected'>
                                <div className='contact_state'>    
                                    <Link to="/" className="back_button_mobile" style={{ display: 'none', marginRight: '10px', fontSize: '24px' }}>
                                        <i className="bi bi-arrow-left"></i>
                                    </Link>                                
                                    <img src={contactSelected.contact_avatar} alt={contactSelected.contact_avatar} />
                                    <div className='contact_name_status'>
                                        <h2>{contactSelected.contact_name}</h2>
                                        <span className='contact_status'>en línea</span>
                                    </div>
                                    <div className='contact_actions'>
                                        <button className='button'><i className="bi bi-search"></i></button>
                                        <button className='button'><i className="bi bi-three-dots-vertical"></i></button>
                                    </div>
                                </div>
                                
                                <div className='messages_list_container'>
                                    <MessagesList />
                                </div>                               
                                    <AddNewMessage />                                
                            </div>
                        ) : (
                            <div>Contacto no encontrado</div>
                        ))
                }
            </div>
        </div>
    )
}