import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: string; content: string; timestamp: string }[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await axios.get('/api/chat/messages');
            setMessages(response.data);
        };

        fetchMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const message = {
                sender: 'User', // Replace with actual user data
                content: newMessage,
                timestamp: new Date().toISOString(),
            };

            await axios.post('/api/chat/messages', message);
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.content} <em>{new Date(msg.timestamp).toLocaleTimeString()}</em>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatWindow;