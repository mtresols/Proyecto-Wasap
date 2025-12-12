import React, {useContext} from 'react'
import './ContactList.css'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'

/**
 * Componente que renderiza una lista de contactos
 * 
 * @param {bool} props.loadingContactsState - Indica si se est  cargando la lista de contactos
 * @param {array} props.contactState - La lista de contactos cargada
 * @returns {JSX.Element} - La lista de contactos renderizada
 */
function ContactList() {
    const {
        contactState,
        loadingContactsState,        
    } = useContext(ContactListContext) 

        console.log({loadingContactsState, contactState})

    if(loadingContactsState){
        return (
            <div>Cargando Contactos...</div>
        )
    }

if(contactState.length === 0){
    return (
        <div>No hay contactos</div>
    )
}

return (   
    <div> 
        {contactState.map(
            function (contact){
                return (
                    <Link key={contact.contact_id} to={'/chat/' + contact.contact_id + '/messages'} className="contact_item">
                        <div className='contact_avatar'>
                            <img src={contact.contact_avatar} alt={contact.avatar} />
                        </div>
                        <div className='contact_name_date_lastmessage_unseen'>
                            <div className='contact_name_date'>
                                <h2 className='contact_name'>{contact.contact_name}</h2>                           
                                {/*<p className='contact_date'>{contact.last_message_created_at}</p>*/}
                            </div>                            
                            <p className='last_message'>{contact.last_message_content}</p>                            
                        </div>         
                        <div className='div_unseen'>
                            {contact.contact_unseen_messages > 0 && 
                            <span className='messages_unseen'>{contact.contact_unseen_messages}</span>}
                        </div>
                    </Link>
                    )
                }       
            )    
        }
    </div>
    )
}   

export default ContactList;