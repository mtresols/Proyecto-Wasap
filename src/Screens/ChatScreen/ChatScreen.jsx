import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactListContext } from '../../Context/ContactListContext'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import './ChatScreen.css'
import MessagesScreen from '../MessagesScreen/MessagesScreen'



export default function ChatScreen() {
return (
    <div className='chat_screen'>        
        <ContactSidebar/>
        
    </div>
)
}