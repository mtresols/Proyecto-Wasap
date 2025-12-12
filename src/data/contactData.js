const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Eli',
        contact_avatar: "/avatars/avatar1.jpg",
        contact_unseen_messages: 5,
        last_message_content: 'testing',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date()
    },
    {
        contact_id: 2,
        contact_name: 'Pitu',
        contact_avatar: '/avatars/avatar2.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date()
    },
]

export default contact_data