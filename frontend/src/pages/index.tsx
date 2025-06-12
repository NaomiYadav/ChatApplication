import React from 'react';
import ChatWindow from '../components/ChatWindow';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Chat Application</h1>
            <ChatWindow />
        </div>
    );
};

export default HomePage;