import React from 'react'
import "./ContactSearchForm.css"
function ContactSearchForm() {
return (
    <>
        <form action="/search" method="get">  
            <div className="search_container">
                <i className="bi bi-search search_icon"></i>  
                <input className="search_input" type="text" id="search-input" name="q" placeholder="Buscar"></input>
                {/*<button type="submit">Buscar</button>*/} 
            </div>                
        </form>
    </>
)
}

export default ContactSearchForm;

