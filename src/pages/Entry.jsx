import React, {useContext} from 'react';
import {AuthContext} from "../context";
import MyButton from "../components/UI/MyButton/MyButton";

const Entry = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = () => {
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="entry">
            <h1>Вход в чат</h1>
            <MyButton onClick={login}>Войти</MyButton>
        </div>
    );
};

export default Entry;