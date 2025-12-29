import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactListContext } from '../../Context/ContactListContext'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import './ChatScreen.css'
import MessagesScreen from '../MessagesScreen/MessagesScreen'



export default function ChatScreen() {
return (
        <div className='messages_layout home_view'> 
            <div className='sidebar_container'> 
                <ContactSidebar />
            </div>
            <div className='messages_container'> 
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100%',
                    color: '#667781'
                }}>
                    <p>Ningun mensjae seleccioando</p>
                </div>
            </div>
        </div>
    )
}