import React, {useContext} from "react";
import "../styles/App.css";
import {AuthContext} from "../context";
import MyButton from "../components/UI/MyButton/MyButton";

function Chat() {
    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="chat">
            <h1>Чат</h1>
            <MyButton onClick={logout}>Выйти из чата</MyButton>
        </div>
    );
}

export default Chat;