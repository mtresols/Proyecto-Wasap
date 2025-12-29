import React from 'react'
import "./ContactSearchForm.css"
function ContactSearchForm({setSearchQuery}) {
return (
    <>
        <form onSubmit={(e) => e.preventDefault()}> 
            <div className="search_container">
                <i className="bi bi-search search_icon"></i>  
                <input 
                className="search_input" 
                type="text" id="search-input" 
                name="q" 
                placeholder="Buscar"
                onChange={(e) => setSearchQuery(e.target.value)}>
                </input>
            </div>                
        </form>
    </>
)
}

export default ContactSearchForm;

