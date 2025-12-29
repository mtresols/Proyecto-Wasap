import React from 'react'
import { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import './MessagesList.css'
const MessagesList = () => {
    const { contactSelected } = useContext(ContactDetailContext)
    return (
        <div className='messages_list'>
            {(contactSelected.messages || []).map((contact) => {
                return (
                    <div className={`message_row ${contact.send_by_me ? 'message_own' : 'message_other'}`} key={contact.message_id}>
                        <div className="message_bubble">
                            <div className="message_text">{contact.message_content}</div>
                            <div className="message_time">
                                {contact.message_created_at ? new Date(contact.message_created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                <i class="bi bi-check-all"></i>                                
                            </div>
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
}
export default MessagesList