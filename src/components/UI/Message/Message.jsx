import React from 'react';
import cl from "./Message.module.css"

const Message = ({children, ...props}) => {
    return (
        <div {...props} className={cl.message}>
            {children}
        </div>
    );
};

export default Message;