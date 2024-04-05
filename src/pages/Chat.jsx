import React, {useContext, useEffect, useState} from "react";
import "../styles/App.css";
import {AuthContext} from "../context";
import MyButton from "../components/UI/MyButton/MyButton";
import ChatWindow from "../components/UI/ChatWindow/ChatWindow";

function Chat() {
    const {setIsAuth} = useContext(AuthContext);
    const [messages, setMessages] = useState(["Привет, как дела?", "Всё хорошо, ты как?", "Норм"])

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    const addMessage = () => {
        setMessages([...messages, "lorem ipsum dolor sit amet"])
    }

    useEffect(() => {
        const container = document.getElementById('scrollable-container');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat">
            <h1>Чат</h1>
            <ChatWindow
                messages={messages}
            />
            <MyButton onClick={logout}>Выйти из чата</MyButton>
            <MyButton onClick={addMessage}>Добавить сообщение</MyButton>
        </div>
    );
}

export default Chat;