import React, { useContext } from "react"
import { ContactDetailContext } from "../../Context/ContactDetailContext"
import './AddNewMessage.css'


export default function AddNewMessage() {
    const {addNewMessage} = useContext(ContactDetailContext)

    function handleSubmitNewMessage (event){
        event.preventDefault()
        const message = event.target.message.value
        if (message.trim()){
            addNewMessage(message)
            event.target.reset()
        }

    }
    return (
        
        <form className="new_message_form" onSubmit={handleSubmitNewMessage}>
            <label htmlFor="message"></label>
            <textarea id="message" name='message'></textarea>
            <button type="submit"><i class="bi bi-arrow-left-square"></i></button>
        </form>
        
    )
}

