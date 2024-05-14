import React from 'react';
import '../styles/message.css'

interface ScreenMessageProps {
    messages: string[];
}




const ScreenMessage: React.FC<ScreenMessageProps> = ({ messages }) => {
    return (
        <div>
            {messages.map((x) => (
                <div className="message" key={x}>
                    {x}
                </div>
            ))}
        </div>
    );
};

export default ScreenMessage;
