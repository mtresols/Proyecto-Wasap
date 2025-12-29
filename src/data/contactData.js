const contact_data =   [
    {
        contact_id: 1,
        contact_name: 'Fru',
        contact_avatar: "/avatars/avatar1.jpg",
        contact_unseen_messages: 5,
        last_message_content: 'Tengo un hambre',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: '2025-12-25T20:30:00',
            messages: [
                        {
                message_id: 1,
                message_content: 'Qué comemos hoy?',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T20:29:00',
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Tengo un hambre',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T20:30:00',
                send_by_me: false
            }
        ]
            
    },

    {
        contact_id: 2,
        contact_name: 'Pitu',
        contact_avatar: '/avatars/avatar2.jpg',
        contact_unseen_messages: 1,
        last_message_content: 'Hola Elii, soy la Pitu',
        last_message_state: 'UNSEEN',
        last_message_created_at: '2025-12-25T20:00:00',
        send_by_me: true,
        messages: [
            {
                message_id: 1,
                message_content: 'Hola Eli, soy la Pitu',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T20:00:00',
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'PitucaChe, Pituca, quién tuviera la alegría?',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T22:15:00',
                send_by_me: false
            }
        ]
    },
    
    {
        contact_id: 3,
        contact_name: 'Solbb',
        contact_avatar: '/avatars/avatar3.jpg',
        contact_unseen_messages: 1,
        last_message_content: 'Wiiiiipuuuu',
        last_message_state: 'SEEN',
        last_message_created_at: '2025-12-25T15:30:00',
            messages: [
                {
                message_id: 1,
                message_content: 'solb, solbb',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T15:31:00',
                send_by_me: true
            },
                        {
                message_id: 2,
                message_content: 'Eliiii',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T15:32:00',
                send_by_me: false
            },
            {
                message_id: 3,
                message_content: 'Wiiiiipuuuu',
                message_state: 'UNSEEN',
                message_created_at: '2025-12-25T15:33:00',
                send_by_me: false
            }
        ]
            
    },
    {
        contact_id: 4,
        contact_name: 'Junior',
        contact_avatar: '/avatars/avatar4.jpg',
        contact_unseen_messages: 2,
        last_message_content: 'querés tomar birra y escuchar los redondos?',
        last_message_state: 'SEEN',
        last_message_created_at: '2025-12-25T16:30:00',
            messages: [
                        {
                message_id: 1,
                message_content: 'Eliiii',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T16:30:00',
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'querés tomar birra y escuchar los redondos?',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T16:30:00',
                send_by_me: false
            }
        ]
            
    },
    {
        contact_id: 5,
        contact_name: 'Lua',
        contact_avatar: '/avatars/avatar5.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'si si claro',
        last_message_state: 'SEEN',
        last_message_created_at: '2025-12-25T10:35:00',
            messages: [
                        {
                message_id: 1,
                message_content: 'fue un chiste',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T10:30:00',
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'si si claro',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T10:35:00',
                send_by_me: false
            }
        ]
            
    },
    {
        contact_id: 6,
        contact_name: 'Rúbi',
        contact_avatar: '/avatars/avatar6.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'amo el peinecito',
        last_message_state: 'SEEN',
        last_message_created_at: '2025-12-25T12:30:00',
            messages: [
                        {
                message_id: 1,
                message_content: 'Rubi qué es lo que más te gusta en el mundo?',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T12:00:00',
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'amo el peinecito',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T12:30:00',
                send_by_me: false
            }
        ]
            
    },
    {
        contact_id: 7,
        contact_name: 'Fafelton',
        contact_avatar: '/avatars/avatar7.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'dale, a la noche vagamos',
        last_message_state: 'SEEN',
        last_message_created_at: '2025-12-25T11:30:00',
        messages: [
                        {
                message_id: 1,
                message_content: 'Fafel, sale techo con Pandilla hoy',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T11:30:00',
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'dale, a la noche vagamos',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T11:30:00',
                send_by_me: false
            }
        ]
            
    },
    {
        contact_id: 8,
        contact_name: 'Pandilla',
        contact_avatar: '/avatars/avatar8.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Eli todo bien, de madrugada nos vemos, avisale a Fafel',
        last_message_state: 'SEEN',
        last_message_created_at: '2025-12-25T11:00:00',
            messages: [
                        {
                message_id: 1,
                message_content: 'Pandi, qué haces, qué caloor, salimos a la noche?',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T11:00:00',
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Eli todo bien, de madrugada nos vemos, avisale a Fafel',
                message_state: 'SEEN',
                message_created_at: '2025-12-25T11:00:00',
                send_by_me: false
            }
        ]
            
    },
    {
        contact_id: 9,
        contact_name: 'Kiki',
        contact_avatar: '/avatars/avatar9.jpg',
        contact_unseen_messages: 1,
        last_message_content: 'Daleee',
        last_message_state: 'SEEN',
        last_message_created_at: '2025-12-24T15:30:00',
            messages: [
                        {
                message_id: 1,
                message_content: 'Kikiii, tomamos sol?',
                message_state: 'SEEN',
                message_created_at: '2025-12-24T15:30:00',
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Daleee',
                message_state: 'SEEN',
                message_created_at: '2025-12-24T15:30:00',
                send_by_me: false
            }
        ]
            
    }

]



export default contact_data