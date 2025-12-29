Curso de Programador Web Inicial - Front End Developer - Turno Tarde - UTN 

Trabajo integrador final: Aplicación de mensajería

Utiliza node.js

Dependencias: 
React
React DOM
React Router
Vite

Utiliza enrutador, ruta raiz que envuelve al ContactListContextProvider que da acceso a la lista de contactos a las demás rutas.

Los contextos utilizan 
-estados 
useState
(contactState para lista de contactos), 
-efectos 
useEffect(loadContactList, getContactList) 
-métodos (getContactById, updateContactById)

Componentes y pantallas 
-ChatScreen: pantalla principal. Muestra la ContactSidebar con lista de contactos.
-ContactSidebar: usa ContactListContext para cada contacto.
-MessagesScreen:muestra los mensajes con ContactDetailContext




