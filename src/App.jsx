// eslint-disable-next-line no-unused-vars
import { useState } from "react"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import {Route, Routes } from "react-router"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import './global.css'
import ContactListContextProvider from "./Context/ContactListContext"
import ContactDetailContextProvider from "./Context/ContactDetailContext"


function App(){
  return(
  <>
      <div className="app">      
        <Routes>        
          <Route 
            element={<ContactListContextProvider/>}
          >
            <Route 
              path="/" 
              element={
                <ChatScreen/>
              } 
            />
          <Route path="/chat/:contact_id" element={<ContactDetailContextProvider />}>
            <Route path="messages" element={<MessagesScreen />} />
          </Route>
          </Route>

          <Route 
            path="/login" 
            element={
              <h1>Soy el login</h1>
            } 
          />
        </Routes>
    </div>
  </>
  )
}


export default App;