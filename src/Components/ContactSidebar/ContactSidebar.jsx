//import React, { useContext } from "react"
import React, { useState } from "react"
import ContactSearchForm from "../ContactSearchForm/ContactSearchForm"
import ContactList from "../ContactList/ContactList"
import "./ContactSidebar.css"
import { ThemeContext } from "../../Context/ThemeContext"


function ContactSidebar() {  
    const [searchQuery, setSearchQuery] = useState('')
    /*const {isDark, toggleTheme} = useContext(ThemeContext)
    console.log('el valor de isDark es' + isDark)  */

    return (
        <>
        {/*<div className={`contact_data ${isDark ? 'aside-dark' : ''}`}>*/}
        <div className="contact_data">
                <div className="contact_data_lateral">
                    <div className="lateral_icons_head">
                        <i className="bi bi-chat-square-text"></i>                    
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-disc"></i>
                        <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="lateral_icons_foot">
                        <i className="bi bi-gear"></i>
                        <div className="profile_image">
                            <img src='/avatars/profile.jpg' alt="profile"/>
                        </div>
                    </div>
                </div>            
                {/*<aside className={`contact_data_aside ` + (isDark ? 'aside-dark' : '')}>*/}
                <aside className="contact_data_aside">
                    {/*<button onClick={toggleTheme}> Cambiar Tema</button>   */}
                    <header className="contact_data_header">
                        <div className="icon_title">
                            
                            <h1 className="header_title">MiausApp</h1>
                        </div>
                        <div className="div_contact_add_button">
                            <span className="span_header"></span>
                            <button className="contact_add_button"><i className="bi bi-plus-square"></i></button>
                        </div>
                    </header>
                    <div className="contact_search">
                        <ContactSearchForm setSearchQuery={setSearchQuery} />                        
                    </div>
                    <ContactList searchQuery={searchQuery} />
                </aside>
        </div>
        </>
        
    )
}

export default ContactSidebar;



