import React, { useContext } from "react"
import ContactSearchForm from "../ContactSearchForm/ContactSearchForm"
import ContactList from "../ContactList/ContactList"
import "./ContactSidebar.css"
import { ThemeContext } from "../../Context/ThemeContext"

function ContactSidebar() {  
    
    const {isDark, toggleTheme} = useContext(ThemeContext)
    console.log('el valor de isDark es' + isDark)  

    return (
        <>
        <div className="contact_data">
                <div className="contact_data_lateral">
                </div>            
                <aside className={`contact_data_aside ${isDark ? 'aside-dark' : ''}`}>
                    <button onClick={toggleTheme}> Cambiar Tema</button>   
                    <header className="contact_data_header">
                        <h1>Chat</h1>
                        <button className="contact_add_button">+</button>
                    </header>
                    <div className="contact_search">
                        <ContactSearchForm />                        
                    </div>
                    <ContactList />
                </aside>
        </div>
        </>
        
    )
}

export default ContactSidebar;




/*export default function ContactSidebar() {
    const [contactState, setContactState] = useState ([])
    const [loadingContactsState, setLoadingContactState] = useState(true)
    function loadContactList(){
        setLoadingContactState(true)
        setTimeout(
            function(){              
        
            const contact_list = getContactList()
            setContactState(contact_list)
            setLoadingContactState(false)
            },
            2000
        )
    }

    useEffect(
        loadContactList,
        []
    )
    console.log({loadingContactsState, contactState})

        return (
        <aside>
            <div>
                <ContactSearchForm />
                <a>Crear Contacto</a>
            </div>
            <ContactList />
            
        </aside>
    )
}*/
