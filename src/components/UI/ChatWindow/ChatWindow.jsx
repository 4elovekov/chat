import React from 'react';
import cl from "./ChatWindow.module.css"
import Message from "../Message/Message";

const ChatWindow = ({messages, ...props}) => {
    return (
        <div id={"scrollable-container"} {...props} className={cl.chatWindow}>
            {messages.map((message, index) =>
                <Message
                    key={index}
                    children={message}
                />
            )}
        </div>
    );
};

export default ChatWindow;